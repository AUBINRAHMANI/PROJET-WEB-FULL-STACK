import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Answer, Question } from '../../../models/question.model';
import {GameService} from "../../../service/game.service";
import {CalibrageService} from "../../../service/calibrage.service";

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})
export class GameQuestionComponent implements OnInit {
  @Input() currentQuestion!: Question;
  @Input() currentQuestionMinus!: Question ;
  @Output() answerSelected: EventEmitter<{ question: Question, answer: Answer }> = new EventEmitter();

  @Input() enlargeButtons: (() => void) | undefined;
  @Input() containerClick: EventEmitter<void> = new EventEmitter();

  @Input() recalibrageEffectue : boolean | undefined;
  constructor(public gameService: GameService,public calibrageService:CalibrageService) {

  }

  colorPairs = [
    {bgColor: '#007bff', textColor: '#fff'},
    {bgColor: '#28a745', textColor: '#fff'},
    {bgColor: '#dc3545', textColor: '#fff'},
    {bgColor: '#ffc107', textColor: '#000'},
    {bgColor: '#6610f2', textColor: '#fff'},
    {bgColor: '#6f42c1', textColor: '#fff'},
    {bgColor: '#9b59b6', textColor: '#fff'}
    // Ajoutez d'autres paires de couleurs selon vos besoins
  ];

  ngOnInit(): void {
    console.log("CurrentQuestion");
    console.log(this.currentQuestion);
    console.log("CurrentQuestionMinus");
    console.log(this.currentQuestionMinus);
  }


  onAnswerSelected(question: Question, answer: Answer): void {
    console.log("GameQuestionComponent.onAnswerSelected");
    console.log({question,answer});
    this.answerSelected.emit({ question, answer });
  }
  isAnswerCorrect(answer: Answer): boolean {
    if(answer!=undefined)
       return answer.isCorrect;
    return false;
  }
  onContainerClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (targetElement.tagName.toLowerCase() !== 'button') {
      this.gameService.recalibrageEffectue=true
      // @ts-ignore
      this.enlargeButtons();
    }
  }

}
