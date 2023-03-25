import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from "../../../models/quiz.model";
import { GameService } from "../../../service/game.service";
import { Answer, Question } from "../../../models/question.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  quiz: Observable<Quiz | undefined> = new Observable<Quiz | undefined>();
  currentQuestion: Question | undefined;
  questions: Question[] = [];

  constructor(private route: ActivatedRoute, public gameService: GameService) {}

  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('quizId');
    if (quizId) {
      this.quiz = this.gameService.getQuiz(quizId);
      this.gameService.retrieveQuestions(quizId);
      this.gameService.currentQuestion$.subscribe((question: Question) => {
        this.currentQuestion = question;
      });
      this.quiz.subscribe((quiz: Quiz | undefined) => {
        if (quiz) {
          this.questions = quiz.questions;
        }
      });
    }
  }

  onAnswerSelected(answer: { question: Question; answer: Answer }) {
    this.gameService.selectAnswer(answer.answer.answerId);
  }

  previousQuestion() {
    this.gameService.previousQuestion();
  }

  nextQuestion() {
    this.gameService.nextQuestion();
  }

  disablePrevious(): boolean {
    return this.gameService.currentQuestionIndex === 0;
  }

  disableNext(): boolean {
    return this.gameService.currentQuestionIndex === this.questions.length - 1;;
  }
}
