import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer, Question } from '../../../models/question.model';

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})
export class GameQuestionComponent {
  @Input() currentQuestion!: Question;
  @Output() answerSelected: EventEmitter<{ question: Question, answer: Answer }> = new EventEmitter();

  constructor() {}

  onAnswerSelected(question: Question, answer: Answer): void {
    this.answerSelected.emit({ question, answer });
  }
}
