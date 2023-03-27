import { Component, OnInit } from '@angular/core';
import {Answer, Question} from "../../../models/question.model";
import { GameService } from "../../../service/game.service";

@Component({
  selector: 'app-gamequestion',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})

export class GameQuestionComponent implements OnInit {
  questionlist: Question[] = [];
  questionIndex: number = 0;

  constructor(public gameservice : GameService) {
    this.gameservice.questions$.subscribe((questions : Question[]) => {
      this.questionlist = questions;
    });
  }

  ngOnInit(): void {
  }

  get currentQuestion(): Question {
    return this.questionlist[this.questionIndex];
  }

  // onAnswerSelected(answer: Answer) {
  //   // Logique pour gérer la sélection de la réponse
  //   // Passer à la question suivante
  //   this.questionIndex++;
  // }
}
