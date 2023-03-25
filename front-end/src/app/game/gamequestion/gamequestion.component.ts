import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Answer, Question } from '../../../models/question.model';
import { GameService } from '../../../service/game.service';
import {Quiz} from "../../../models/quiz.model";

@Component({
  selector: 'app-gamequestion',
  templateUrl: './gamequestion.component.html',
  styleUrls: ['./gamequestion.component.scss']
})
export class GamequestionComponent implements OnInit {
  questionlist: Question[] = [];
  currentQuestion!: Question;

  @Output() answerSelected: EventEmitter<Answer> = new EventEmitter();

  constructor(public gameservice: GameService) {
    this.gameservice.currentQuestion$.subscribe((question: Question) => {
      this.currentQuestion = question;
    });
    this.gameservice.quizList$.subscribe((quizList: Quiz[]) => {
      this.questionlist = quizList[this.gameservice.currentQuizIndex].questions;
      this.currentQuestion = this.questionlist[this.gameservice.currentQuestionIndex];
    });
  }

  ngOnInit(): void {}

  onAnswerSelected(question: Question, answer: Answer) {
    console.log(`La réponse "${answer.value}" a été sélectionnée pour la question "${question.label}".`);
    this.answerSelected.emit(answer);
  }

  nextQuestion(): void {
    this.gameservice.nextQuestion();
  }

  handleAnswerStatus(isCorrect: boolean): void {
    if (isCorrect) {
      // Gérer la réponse correcte (afficher un message, passer à la question suivante, etc.)
    } else {
      // Gérer la réponse incorrecte (afficher un message, proposer de retenter, etc.)
    }
  }
}
