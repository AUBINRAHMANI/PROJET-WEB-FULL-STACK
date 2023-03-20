import { Component, OnInit } from '@angular/core';
import {Question} from "../../../models/question.model";
import {GameService} from "../../../service/game.service";

@Component({
  selector: 'app-gamequestion',
  templateUrl: './gamequestion.component.html',
  styleUrls: ['./gamequestion.component.scss']
})

export class GamequestionComponent implements OnInit {

  questionlist: Question[] = [];

  constructor(public gameservice : GameService) {
    this.gameservice.questions$.subscribe((questions : Question[]) => {
      this.questionlist = questions;
    });
  }

  ngOnInit(): void {
  }


}
