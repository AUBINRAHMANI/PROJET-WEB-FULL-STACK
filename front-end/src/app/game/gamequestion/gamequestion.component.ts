import { Component, OnInit } from '@angular/core';
import {Answer, Question} from "../../../models/question.model";

@Component({
  selector: 'app-gamequestion',
  templateUrl: './gamequestion.component.html',
  styleUrls: ['./gamequestion.component.scss']
})

export class GamequestionComponent implements OnInit {

  ngOnInit(): void {
  }
  currentQuestion!: Question ;

  /*constructor(private gameService: GameService) {
    this.gameService.currentQuestion$.subscribe((question) => {
      this.currentQuestion = question;
    });
    this.gameService.answerStatus$.subscribe((isCorrect) => {
      if (isCorrect !== null) {
        this.handleAnswerStatus(isCorrect);
      }
    });
  }*/


  onAnswerSelected(selectedAnswer: Answer) {
   /* this.gameService.registerAnswer(selectedAnswer);*/
    console.log('Réponse sélectionnée:', selectedAnswer);
  }
  handleAnswerStatus(isCorrect: boolean): void {
    if (isCorrect) {
      // Gérer la réponse correcte (afficher un message, passer à la question suivante, etc.)
    } else {
      // Gérer la réponse incorrecte (afficher un message, proposer de retenter, etc.)
    }
  }
}
