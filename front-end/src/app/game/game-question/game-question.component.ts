import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Answer, Question } from '../../../models/question.model';
import { GameService } from "../../../service/game.service";

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})
export class GameQuestionComponent implements OnInit {
  questionlist: Question[] = [];
  questionIndex: number = 0;
  @Output() answerSelected: EventEmitter<{ question: Question, answer: Answer }> = new EventEmitter();

  constructor(public gameservice : GameService) {
    this.gameservice.questions$.subscribe((questions : Question[]) => {
      this.questionlist = questions;
    });
  }

  ngOnInit(): void {
  }

  onAnswerSelected(question: Question, answer: Answer): void {
    console.log("GameQuestionComponent.onAnswerSelected");
    this.answerSelected.emit({ question, answer });
  }

  get currentQuestion(): Question {
    return this.questionlist[this.questionIndex];
  }

}
