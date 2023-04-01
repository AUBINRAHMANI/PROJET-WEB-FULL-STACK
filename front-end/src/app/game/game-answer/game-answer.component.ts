import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from '../../../models/question.model';

@Component({
  selector: 'app-game-answer',
  templateUrl: './game-answer.component.html',
  styleUrls: ['./game-answer.component.scss']
})
export class GameAnswerComponent {

  @Input() answer: Answer | undefined;
  @Input() correct = false; // Ajoutez cette ligne
  @Output() answerSelected: EventEmitter<Answer> = new EventEmitter();
  disabled: any;
  isCorrect: boolean | null = null; // Modifiez cette ligne


  constructor() { }

  ngOnInit(): void {
    console.log("GameAnswerComponent - ngOnInit()");
  }

  onAnswerSelected(button: HTMLElement): void {
    console.log("GameAnswerComponent - onAnswerSelected()");
    this.isCorrect = this.answer?.isCorrect ?? false;
    if (this.isCorrect) {
      this.applyAnimation(button, 'correct-animation');
    } else {
      this.applyAnimation(button, 'incorrect-animation');
    }
    // Ajoutez un setTimeout pour retarder l'émission de l'événement
    setTimeout(() => {
      this.answerSelected.emit(this.answer);
    }, 1000); // Ajustez la durée si nécessaire, 500 ms correspond à la durée de l'animation
  }


  private applyAnimation(button: HTMLElement, animationClass: string): void {
    console.log("XA DERVRAGYFGHJKLKMJKLGHDFSKJLMKJHGFHJKL?MKJCGFXDWCGKJL?M");
    button.classList.add(animationClass);
    setTimeout(() => {
      button.classList.remove(animationClass);
    }, 10000);
  }
}
