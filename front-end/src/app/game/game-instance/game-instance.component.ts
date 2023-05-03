import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable, take} from 'rxjs';
import { Quiz } from '../../../models/quiz.model';
import { GameService } from '../../../service/game.service';
import { faCity, faTheaterMasks, faPaw, faMusic, faBirthdayCake, faLanguage } from '@fortawesome/free-solid-svg-icons';
import {GameInstance} from "../../../models/gameInstance.model";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-game-instance',
  templateUrl: './game-instance.component.html',
  styleUrls: ['./game-instance.component.scss']
})
export class GameInstanceComponent implements OnInit {
  quizList$: Observable<Quiz[]> = new Observable<Quiz[]>();
  currentQuiz: Observable<Quiz | undefined> | undefined;
  quizStarted = false;

  private carousel: HTMLElement | undefined;
  private figure: HTMLElement | undefined;
  private nav: HTMLElement | undefined;
  private numQuizzes: number =0;
  private theta: number | undefined;
  private currQuiz: number =0;

  // @ts-ignore
  @ViewChild('prevButton', { static: true }) prevButton: ElementRef ;
  // @ts-ignore
  @ViewChild('nextButton', { static: true }) nextButton: ElementRef ;
  // Définissez les icônes que vous souhaitez utiliser
  faCity = faCity;
  faTheaterMasks = faTheaterMasks;
  faPaw = faPaw;
  faMusic = faMusic;
  faBirthdayCake = faBirthdayCake;
  faLanguage = faLanguage;

  constructor(private gameService: GameService, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log("GAME-INSTANCE: ngOnInit");
    this.quizList$ = this.gameService.getQuizList();
    this.numQuizzes=this.gameService.quizList.length;
  }

  ngAfterViewInit(): void {
    this.quizList$.pipe(take(1)).subscribe((quizList) => {
      this.carousel = this.el.nativeElement.querySelector('.carousel');
      // @ts-ignore
      this.figure = this.carousel.querySelector('figure');
      // @ts-ignore
      this.numQuizzes=this.gameService.quizList.length;
      // @ts-ignore
      this.nav = this.carousel.querySelector('nav');
      this.theta = 2 * Math.PI / this.numQuizzes;
      this.rotateCarouselAutomatically();
    });
  }





  rotateCarouselAutomatically() {
    let currentIndex = 0;
    // @ts-ignore
    console.log(this.numQuizzes + " nm quiz\n "+this.currQuiz);
    setInterval(() => {
      // @ts-ignore
      this.onNavClick(1);
    }, 3000); // Changez cette valeur pour ajuster la durée entre les rotations (en millisecondes)
  }
  onClick(direction: number): void {

    // @ts-ignore
    this.currQuiz = (this.currQuiz += direction) % this.numQuizzes;
    console.log("thisssss current "+this.currQuiz);
    // Update transform to rotate to new quiz
    // @ts-ignore
    this.figure.style.transform = `rotateY(${-this.currQuiz * this.theta}rad)`;
  }


  selectQuiz(quizId: string): void {
    console.log("GAME-INSTANCE: selectQuiz");
    this.currentQuiz = this.getQuiz(quizId);
    this.gameService.selectedQuizId = quizId;
    this.gameService.startGame(quizId);
    this.quizStarted = true;
    console.log(quizId);
  }

  getQuiz(quizId: string): Observable<Quiz | undefined> {
    console.log("GAME-INSTANCE: getQuiz");
    return this.gameService.getQuiz(quizId);
  }
  onNavClick(direction: number): void {
    // @ts-ignore
    this.currQuiz += direction;

    // @ts-ignore
    if (this.currQuiz < 0) {
      // @ts-ignore
      this.currQuiz = this.numQuizzes - 1;
    } else { // @ts-ignore
      if (this.currQuiz >= this.numQuizzes) {
        this.currQuiz = 0;
      }
    }

    // @ts-ignore
    this.figure.style.transform = `rotateY(${this.currQuiz * -this.theta}rad)`;
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

}
