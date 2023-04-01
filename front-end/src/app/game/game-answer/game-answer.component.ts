import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Answer } from '../../../models/question.model';

@Component({
  selector: 'app-game-answer',
  templateUrl: './game-answer.component.html',
  styleUrls: ['./game-answer.component.scss']
})
export class GameAnswerComponent {

  @Input() answer: Answer | undefined;
  @Input() correct = false;
  @Output() answerSelected: EventEmitter<Answer> = new EventEmitter();
  disabled: any;
  isCorrect: boolean | null = null;

  // Ajoutez ces lignes pour accéder aux éléments audio
  @ViewChild('correctAudio') correctAudio: ElementRef<HTMLAudioElement> | undefined;
  @ViewChild('incorrectAudio') incorrectAudio: ElementRef<HTMLAudioElement> | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log("GameAnswerComponent - ngOnInit()");
  }

  onAnswerSelected(button: HTMLElement): void {
    console.log("GameAnswerComponent - onAnswerSelected()");
    this.isCorrect = this.answer?.isCorrect ?? false;
    if (this.isCorrect) {
      this.applyAnimation(button, 'correct-animation');
      this.playAudio('correct'); // Ajoutez cette ligne
    } else {
      this.applyAnimation(button, 'incorrect-animation');
      this.playAudio('incorrect'); // Ajoutez cette ligne
    }

    setTimeout(() => {
      this.answerSelected.emit(this.answer);
    }, 1000);
  }

  private applyAnimation(button: HTMLElement, animationClass: string): void {
    console.log("XA DERVRAGYFGHJKLKMJKLGHDFSKJLMKJHGFHJKL?MKJCGFXDWCGKJL?M");
    button.classList.add(animationClass);
    setTimeout(() => {
      button.classList.remove(animationClass);
    }, 10000);
  }

  // Ajoutez cette méthode pour jouer les sons
  private playAudio(type: 'correct' | 'incorrect'): void {
    if (type === 'correct' && this.correctAudio) {
      this.correctAudio.nativeElement.play();
    } else if (type === 'incorrect' && this. incorrectAudio) {
      this.incorrectAudio.nativeElement.play();
    }
  }
}
