import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../../../models/question.model";

@Component({
  selector: 'app-gameanswer',
  templateUrl: './gameanswer.component.html',
  styleUrls: ['./gameanswer.component.scss']
})

export class GameanswerComponent implements OnInit {
  @Input() answer!: Answer;

  constructor() { }

  ngOnInit(): void {
  }
}
