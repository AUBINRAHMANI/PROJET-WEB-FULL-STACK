import { Component, ElementRef, EventEmitter, Input, Output, ViewChild,Renderer2, SimpleChanges  } from '@angular/core';
import { Answer } from '../../../models/question.model';
import {GameService} from "../../../service/game.service";

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
  recalibrageEffectue = false;
  isCorrect: boolean | null = null;

  @Input() enlargeButtons = false;
  private globalClickListener: Function | undefined;
  // Ajoutez ces lignes pour accéder aux éléments audio
  @ViewChild('correctAudio') correctAudio: ElementRef<HTMLAudioElement> | undefined;
  @ViewChild('incorrectAudio') incorrectAudio: ElementRef<HTMLAudioElement> | undefined;
  @Input() containerClick: EventEmitter<void> = new EventEmitter();

  constructor(private elementRef: ElementRef, private renderer: Renderer2,public gameService: GameService) { }

  ngOnInit(): void {
    console.log("GameAnswerComponent - ngOnInit()");
    console.log(" bouton onit "+this.enlargeButtons)
    if (this.enlargeButtons) {
      this.globalClickListener = this.renderer.listen('document', 'click', (event) => {
        if (!this.elementRef.nativeElement.contains(event.target)) {
          this.enlargeButton();
        }
      });
    }
  }



  ngOnDestroy() {
    if (this.globalClickListener) {
      this.globalClickListener();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("GameAnswerComponent - ngOnChanges()");
    if (changes['enlargeButtons'] && !changes['enlargeButtons'].firstChange) {
      const button = this.elementRef.nativeElement.querySelector('button');
      if (this.enlargeButtons) {
        this.renderer.addClass(button, 'enlarged-button');
      } else {
        this.renderer.removeClass(button, 'enlarged-button');
      }
    }
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
  increaseButtonSize(): void {
    console.log("// Augmente la taille des boutons");
    const buttons = document.querySelectorAll('.answer-button-selector');
    buttons.forEach((button: Element) => {
      button.classList.add('enlarged-button');
    });
  }
  buttonClass(): string {
    console.log("// Button class recalibrage "+this.recalibrageEffectue);
    return this.enlargeButtons ? 'enlarged-button' : 'button';
  }

  private enlargeButton() {
    // Vérifie si le jeu est terminé en utilisant la méthode isGameFinished()
    if (!this.gameService.isGameFinished()) {
      console.log("// Button class " + this.enlargeButtons);
      this.enlargeButtons=true;
      this.gameService.recalibrageEffectue=true;
      const button = this.elementRef.nativeElement.querySelector('button');
      this.renderer.addClass(button, 'enlarged-button');
    }
  }




}
