import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { faCity, faTheaterMasks, faPaw, faMusic, faBirthdayCake, faLanguage } from '@fortawesome/free-solid-svg-icons';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-quiz-grid',
  templateUrl: './quiz-grid.component.html',
  styleUrls: ['./quiz-grid.component.scss'],
  animations: [
    trigger('growAndDisappear', [
      state('inactive', style({ transform: 'scale(1)', opacity: 1 })),
      state('active', style({ transform: 'scale(2)', opacity: 1 })),
      transition('inactive => active', [
        animate(
          '15s ease-in-out',
          keyframes([
            style({ transform: 'scale(1)', opacity: 1, offset: 0 }),
            style({ transform: 'scale(1)', opacity: 1, offset: 0.2 }),
            style({ transform: 'scale(5)', opacity: 0, offset: 0.9 }),
            style({ transform: 'scale(6)', opacity: 0, offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})

export class QuizGridComponent {
  @Input() quizList: Quiz[] = [];
  @Output() selectQuiz = new EventEmitter<string>();
  currentIndex = 0;
  gridColumns = 3;
  gridRows = 2;
  faCity = faCity;
  faTheaterMasks = faTheaterMasks;
  faPaw = faPaw;
  faMusic = faMusic;
  faBirthdayCake = faBirthdayCake;
  faLanguage = faLanguage;


  constructor() {}

  startAnimation(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.quizList.length;
    }, 3000);
  }
  ngOnInit(): void {
    this.startAnimation();
  }

  getIcon(quizId: string) : string {
    switch (quizId) {
      case '1':
        return  "fas fa-city btn-icon";
      case '2':
        return "fas fa-theater-masks btn-icon";
      case '3':
        return "fas fa-paw btn-icon";
      case '4':
        return "fas fa-music btn-icon";
      case '5':
        return "fas fa-birthday-cake btn-icon";
      case '6':
        return "fas fa-language btn-icon";
      default:
        return "fas fa-language btn-icon";
    }
  }
  getGridStyles(): object {
    return {
      'grid-template-columns': `repeat(${this.gridColumns}, minmax(0, 1fr))`,
      'grid-template-rows': `repeat(${this.gridRows}, auto)`,
      'grid-gap': '20px',
    };
  }

}
