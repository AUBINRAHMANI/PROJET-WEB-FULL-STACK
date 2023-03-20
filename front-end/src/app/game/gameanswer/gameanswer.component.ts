import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Answer} from "../../../models/question.model";

@Component({
  selector: 'app-gameanswer',
  templateUrl: './gameanswer.component.html',
  styleUrls: ['./gameanswer.component.scss']
})

export class GameanswerComponent implements OnInit {

  @Input() answer!: Answer ;
  @Output() answerSelected = new EventEmitter<Answer>();

  constructor() {}

  ngOnInit(): void {}

  onAnswerClick() {
    this.answerSelected.emit(this.answer);
  }
}
