import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Answer, Question } from '../../../models/question.model';

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})
export class GameQuestionComponent implements OnInit {
  @Input() currentQuestion!: Question;
  @Output() answerSelected: EventEmitter<{ question: Question, answer: Answer }> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAnswerSelected(question: Question, answer: Answer): void {
    console.log("GameQuestionComponent.onAnswerSelected");
    this.answerSelected.emit({ question, answer });
  }

  isAnswerCorrect(answer: Answer): boolean {
    return answer.isCorrect;
  }

}
