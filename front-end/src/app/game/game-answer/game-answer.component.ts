import { Component, ElementRef, EventEmitter, Input, Output, ViewChild,Renderer2, SimpleChanges  } from '@angular/core';
import { Answer } from '../../../models/question.model';
import {GameService} from "../../../service/game.service";
import {CalibrageService} from "../../../service/calibrage.service";

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
  randomColor: string ="#007bff";
  textColor: string="#fff";
  @Input() backgroundColor: string = '#007bff';
  @Input() textColoor: string = '#fff';
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

  constructor(private elementRef: ElementRef, private renderer: Renderer2,public gameService: GameService,public calibrageService:CalibrageService) { }

  ngOnInit(): void {
    console.log("GameAnswerComponent - ngOnInit()");
    console.log(" bouton onit "+this.enlargeButtons)
    this.randomColor=this.backgroundColor;
    this.textColor=this.textColoor
    this.generateRandomColor();
    if (this.enlargeButtons) {
      this.globalClickListener = this.renderer.listen('document', 'click', (event) => {
        if (!this.elementRef.nativeElement.contains(event.target)) {
          this.enlargeButton();
        }
      });
    }
    console.log(localStorage.getItem('profilSelectionne'));
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

  generateRandomColor(): void {
    // Sélectionne une paire de couleurs aléatoire dans le tableau
    const randomIndex = Math.floor(Math.random() * this.colorPairs.length);
    const randomPair = this.colorPairs[randomIndex];

    // Met à jour les valeurs de couleur du composant en utilisant la paire sélectionnée
    this.randomColor = randomPair.bgColor;
    this.textColor = randomPair.textColor;
  }


  /*generateRandomColor(): void {
    // Génère une couleur aléatoire en utilisant la logique souhaitée
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.randomColor = randomColor;
    this.textColor = this.calculateTextColor(randomColor);
  }

  calculateTextColor(color: string): string {
    // Calcule la couleur du texte en fonction de la luminosité du fond
    const brightness = this.calculateBrightness(color);
    const threshold = 128; // Seuil de luminosité pour décider si le texte sera blanc ou noir

    if (brightness <= threshold) {
      return '#fff';
    } else {
      return '#000';
    }
  }

  calculateBrightness(color: string): number {
    // Calcule la luminosité de la couleur de fond
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness;
  }*/



  }
