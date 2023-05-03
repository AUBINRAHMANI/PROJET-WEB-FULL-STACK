import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Answer, Question } from '../../../models/question.model';
import {GameService} from "../../../service/game.service";

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})
export class GameQuestionComponent implements OnInit {
  @Input() currentQuestion!: Question;
  @Output() answerSelected: EventEmitter<{ question: Question, answer: Answer }> = new EventEmitter();

  @Input() enlargeButtons: (() => void) | undefined;
  @Input() containerClick: EventEmitter<void> = new EventEmitter();

  @Input() recalibrageEffectue : boolean | undefined;
  constructor(public gameService: GameService) {}

  ngOnInit(): void {
  }

  onAnswerSelected(question: Question, answer: Answer): void {
    console.log("GameQuestionComponent.onAnswerSelected");
    this.answerSelected.emit({ question, answer });
  }

  isAnswerCorrect(answer: Answer): boolean {
    return answer.isCorrect;
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
