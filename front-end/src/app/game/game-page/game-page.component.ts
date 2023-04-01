import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from "../../../models/quiz.model";
import { GameService } from "../../../service/game.service";
import { Answer, Question } from "../../../models/question.model";
import { Observable } from "rxjs";
import {GameInstance} from "../../../models/gameInstance.model";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  quiz: Observable<Quiz | undefined> = new Observable<Quiz | undefined>();
  gameInstance: GameInstance;

  @Input() quizId: string | undefined;
  currentQuestion: Question | undefined;
  questions: Question[] = [];

  constructor(private route: ActivatedRoute, public gameService: GameService) {
    console.log("CLASS GamePageComponent");
    this.ngOnInit();
    this.gameInstance = this.gameService.gameInstance;
  }

  ngOnInit(): void {
    console.log("METHOD ngOnInit");
    if (this.quizId) {
      this.quiz = this.gameService.getQuiz(this.quizId);
      this.gameService.retrieveQuestions(this.quizId);
      this.gameService.currentQuestion$.subscribe((question: Question) => {
        this.currentQuestion = question;
      });
      this.quiz.subscribe((quiz: Quiz | undefined) => {
        console.log("dure dure");
        if (quiz) {
          this.questions = quiz.questions;
        }
        console.log("ouiyutryuilu");
      });
    }
  }

  onAnswerSelected(answer: { question: Question; answer: Answer }) {
    console.log("METHOD onAnswerSelected");
    this.gameService.selectAnswer(answer.answer.answerId);
  }

  previousQuestion() {
    console.log("METHOD previousQuestion");
    this.gameService.previousQuestion();
  }

  nextQuestion() {
    console.log("METHOD nextQuestion");
    this.gameService.nextQuestion();
  }

  disablePrevious(): boolean {
    console.log("METHOD disablePrevious");
    return this.gameService.currentQuestionIndex === 0;
  }

  disableNext(): boolean {
    console.log("METHOD disableNext");
    return this.gameService.currentQuestionIndex === this.questions.length - 1;
    ;
  }

  isGameFinished(): boolean {
    const quiz = this.gameService.quizList[this.gameService.currentQuizIndex];
    const currentQuestionIndex = this.gameService.currentQuestionIndex;
    return currentQuestionIndex === quiz.questions.length - 1;
  }


}
