import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quiz } from '../models/quiz.model';
import { Question } from "../models/question.model";
import { QUIZ_LIST } from "../mocks/quiz-list.mock";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public quizList = QUIZ_LIST;
  public _currentQuizIndex = 0;
  public _currentQuestionIndex = 0;
  public selectedQuizId: string | null = null;

  public quizList$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizList);
  public currentQuiz$: BehaviorSubject<Quiz> = new BehaviorSubject(this.quizList[this.currentQuizIndex]);
  public currentQuestion$: BehaviorSubject<Question> = new BehaviorSubject(this.quizList[this.currentQuizIndex].questions[this.currentQuestionIndex]);

  constructor(private http: HttpClient) {
    this.retrieveQuizList();
  }

  get currentQuizIndex(): number {
    return this._currentQuizIndex;
  }

  set currentQuizIndex(index: number) {
    this._currentQuizIndex = index;
    this.currentQuiz$.next(this.quizList[this._currentQuizIndex]);
    this.currentQuestionIndex = 0;
  }

  get currentQuestionIndex(): number {
    return this._currentQuestionIndex;
  }

  set currentQuestionIndex(index: number) {
    this._currentQuestionIndex = index;
    this.currentQuestion$.next(this.quizList[this.currentQuizIndex].questions[this._currentQuestionIndex]);
  }

  public retrieveQuizList(): void {
    this.quizList = QUIZ_LIST;
    this.quizList$.next(this.quizList);
    this.currentQuizIndex = 0;
    this.currentQuestionIndex = 0;
  }

  retrieveQuestions(quizId: string): void {
    const quiz = this.quizList.find(q => q.id === quizId);
    if (quiz) {
      this.currentQuizIndex = this.quizList.indexOf(quiz);
      this.currentQuestionIndex = 0;
      if (quiz.questions) {
        this.currentQuestion$.next(quiz.questions[this.currentQuestionIndex]);
      }
    } else {
      console.log(`Le quiz avec l'identifiant ${quizId} n'a pas été trouvé.`);
    }
  }


  nextQuestion(): void {
    if (this.currentQuestionIndex < this.quizList[this.currentQuizIndex].questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      // si c'est la dernière question du quiz, on passe au quiz suivant
      this.nextQuiz();
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  selectAnswer(answerIndex: number): void {
    this.quizList[this.currentQuizIndex].questions[this.currentQuestionIndex].selectedAnswerIndex = answerIndex;
    this.nextQuestion();
  }

  nextQuiz(): void {
    if (this.currentQuizIndex < this.quizList.length - 1) {
      this.currentQuizIndex++;
      this.currentQuestionIndex = 0;
    } else {
      // si c'est le dernier quiz, on affiche un message de fin de jeu ou on redirige vers la page d'accueil, etc.
      console.log('Fin du jeu');
    }
  }

  getQuizList(): Observable<Quiz[]> {
    return this.quizList$;
  }

  getQuiz(quizId: string): Observable<Quiz | undefined> {
    return this.quizList$.pipe(
      map((quizList: Quiz[]) => quizList.find((quiz: Quiz) => quiz.id === quizId))
    );
  }
  startGame(quizId: string): void {
    this.retrieveQuestions(quizId);
  }

}
