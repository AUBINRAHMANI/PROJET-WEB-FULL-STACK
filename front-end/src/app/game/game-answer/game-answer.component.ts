import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../../../models/question.model";

@Component({
  selector: 'app-gameanswer',
  templateUrl: './game-answer.component.html',
  styleUrls: ['./game-answer.component.scss']
})

export class GameAnswerComponent implements OnInit {
  @Input() answer!: Answer;

  constructor() { }

  ngOnInit(): void {
  }
}
