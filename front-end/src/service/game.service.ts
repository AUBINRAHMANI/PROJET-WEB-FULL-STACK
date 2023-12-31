import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quiz } from '../models/quiz.model';
import {Answer, Question} from "../models/question.model";
import { QUIZ_LIST } from "../mocks/quiz-list.mock";
import {AnswerGiven, GameInstance} from "../models/gameInstance.model";
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import {serverUrl, httpOptionsBase} from "../configs/server.config";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public quizList = QUIZ_LIST;
  public _currentQuizIndex = 0;
  public _currentQuestionIndex = 0;
  public selectedQuizId: string | null = null;

  private quizUrl = serverUrl + "/quizzes"; // URL to web api

  public recalibrageEffectue = false;
  public quizQuestionsLength = 0;

  public quizList$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizList);
  public currentQuiz$: BehaviorSubject<Quiz> = new BehaviorSubject(this.quizList[this.currentQuizIndex]);
  public currentQuestion$: BehaviorSubject<Question> = new BehaviorSubject(this.quizList[this.currentQuizIndex].questions[this.currentQuestionIndex]);
  // @ts-ignore
  private _gameInstance: GameInstance ;

  private readonly FILE_NAME = 'Reports/results.json';
  constructor(private http: HttpClient,private router:Router) {
    this.retrieveQuizList();
  }

  get currentQuizIndex(): number {
    return this._currentQuizIndex;
  }
  get gameInstance(): GameInstance {
    return this._gameInstance;
  }
  set gameInstance(value: GameInstance) {
    this._gameInstance = value;
  }
  set currentQuizIndex(index: number) {
    console.log("GameService.setCurrentQuizIndex()");
    this._currentQuizIndex = index;
    this.currentQuiz$.next(this.quizList[this._currentQuizIndex]);
    this.currentQuestionIndex = 0;
  }

  get currentQuestionIndex(): number {
    return this._currentQuestionIndex;
  }

  set currentQuestionIndex(index: number) {
    console.log("GameService.setCurrentQuestionIndex()");
    this._currentQuestionIndex = index;
    this.currentQuestion$.next(this.quizList[this.currentQuizIndex].questions[this._currentQuestionIndex]);
  }

  public retrieveQuizList(): void {
    console.log("GameService.retrieveQuizList()");
    this.http.get<Quiz[]>(this.quizUrl).subscribe((quizList) => {
      this.quizList = quizList.map((quiz) => {
        const questions = quiz.questions.map((question) => {
          const answers = question.answers.map((answer) => new Answer(
            answer.id,
            answer.value,
            answer.isCorrect,
            answer.type
          ));
          return new Question(question.id, question.label, answers);
        });
        return {
          ...quiz,
          questions: questions
        };
      });
      this.quizList$.next(this.quizList);
    });
    this.currentQuizIndex = 0;
    this.currentQuestionIndex = 0;
  }


  retrieveQuestions(quizId: string,level:number): void {
    console.log("GameService.retrieveQuestions()");
    const quiz = this.quizList.find(q => q.id === quizId);
    // @ts-ignore
    console.log(quiz.questions)
    if (quiz) {
      this.currentQuizIndex = this.quizList.indexOf(quiz);
      this.currentQuestionIndex = 0;
      if (quiz.questions) {
        this.currentQuestion$.next(quiz.questions[this.currentQuestionIndex]);
        console.log(quiz.questions)
        this.quizQuestionsLength = quiz.questions[0].answers.length;
        console.log(this.quizQuestionsLength+" size"); // Affiche la longueur de la liste des questions dans la console du navigateur
      }
    } else {
      console.log(`Le quiz avec l'identifiant ${quizId} n'a pas été trouvé.`);
    }
  }


  nextQuestion(): void {
    console.log("GameService.nextQuestion()");
    if (this.currentQuestionIndex < this.quizList[this.currentQuizIndex].questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      // si c'est la dernière question du quiz, on passe au quiz suivant
      this._gameInstance.endGame()
      console.log('Fin du jeu');
      this.router.navigate(['/game-result']);
    }
  }

  previousQuestion(): void {
    console.log("GameService.previousQuestion()");
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }
  selectAnswer(answerIndex: number): void {
    console.log(this._gameInstance.isFinished+" ok");
    if(!this._gameInstance.isFinished){
    console.log("GameService - selectAnswer"+answerIndex);
    this.quizList[this.currentQuizIndex].questions[this.currentQuestionIndex].selectedAnswerIndex = answerIndex;
    let selectedAnswer = this.quizList[this.currentQuizIndex].questions[this.currentQuestionIndex].answers.find((answer) => answer.id === answerIndex);
    console.log(this.quizList[this.currentQuizIndex].questions[this.currentQuestionIndex])
    console.log(selectedAnswer);
    let currentValebleQuestion = this.currentQuestion$.getValue();
    // @ts-ignore
      console.log(selectedAnswer.id+" "+selectedAnswer.isCorrect);
      // @ts-ignore
      console.log(selectedAnswer);
      // @ts-ignore
      this._gameInstance.updateScore(selectedAnswer);
      // @ts-ignore
      this._gameInstance.addAnswer(new AnswerGiven(currentValebleQuestion,selectedAnswer,this.findCorrectAnswer(currentValebleQuestion)));
      // @ts-ignore
      console.log("score -------"+this._gameInstance.score)
      this.nextQuestion();
    }else{
      console.log("Le jeu est fini");
      this.router.navigate(['/game-result']);
    }

  }

  nextQuiz(): void {
    console.log("GameService - nextQuiz");
    if (this.currentQuizIndex < this.quizList.length - 1) {
      this.currentQuizIndex++;
      this.currentQuestionIndex = 0;
    } else {
// si c'est le dernier quiz, on affiche un message de fin de jeu ou on redirige vers la page d'accueil, etc.
      console.log('Fin du jeu');
    }
  }

  getQuizList(): Observable<Quiz[]> {
    console.log("GameService - getQuizList");
    return this.quizList$;
  }

  getQuiz(quizId: string): Observable<Quiz | undefined> {
    console.log("GameService - getQuiz");
    return this.quizList$.pipe(
      map((quizList: Quiz[]) => quizList.find((quiz: Quiz) => quiz.id === quizId))
    );
  }

  startGame(quizId: string,level:number): void {
    console.log("GameService - startGame");
    const profilEnregistre = localStorage.getItem('profilSelectionne');
    // @ts-ignore
    const objetProfil = JSON.parse(profilEnregistre);
    console.log(objetProfil.id);
    console.log("voici le profil enregistre",profilEnregistre);
    // @ts-ignore
    this._gameInstance=new GameInstance(new Date(),null,parseInt(objetProfil.id));
    const quiz = this.quizList.find(q => q.id === quizId);
    // @ts-ignore
    this._gameInstance.setQuiz=quiz;
    if (quiz) {
      this.retrieveQuestions(quiz.id,level);
    } else {
      console.log(`Le quiz avec l'identifiant ${quizId} n'a pas été trouvé.`);
    }
  }
  findCorrectAnswer(question: Question): Answer | undefined {
    return question.answers.find(answer => answer.isCorrect);
  }

  isGameFinished() {
    return this._gameInstance.isFinished;
  }
  saveGameInstanceToFile(gameInstance: GameInstance | undefined): void {
    if (!gameInstance) return;

    const json = JSON.stringify(gameInstance);
    const blob = new Blob([json], { type: 'application/json' });
    saveAs(blob, this.FILE_NAME);
  }

  addQuiz(quiz: Quiz): void {
    console.log("GameService - addQuiz");
    this.quizList.push(quiz);
    this.quizList$.next(this.quizList);
  }
}
