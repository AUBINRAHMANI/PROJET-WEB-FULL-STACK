import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from '../../../models/question.model';

@Component({
  selector: 'app-game-answer',
  templateUrl: './game-answer.component.html',
  styleUrls: ['./game-answer.component.scss']
})
export class GameAnswerComponent {

  @Input() answer!: Answer;
  @Output() answerSelected: EventEmitter<Answer> = new EventEmitter();
  disabled: any;

  constructor() { }

  ngOnInit(): void {
    console.log("GameAnswerComponent - ngOnInit()");
  }

  onAnswerSelected(): void {
    console.log("GameAnswerComponent - onAnswerSelected()");
    this.answerSelected.emit(this.answer);
  }

}
