import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable, take} from 'rxjs';
import { Quiz } from '../../../models/quiz.model';
import { GameService } from '../../../service/game.service';
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
  private numQuizzes: number | undefined;
  private theta: number | undefined;
  private currQuiz: number =0;

  // @ts-ignore
  @ViewChild('prevButton', { static: true }) prevButton: ElementRef ;
  // @ts-ignore
  @ViewChild('nextButton', { static: true }) nextButton: ElementRef ;

  constructor(private gameService: GameService, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log("GAME-INSTANCE: ngOnInit");
    this.quizList$ = this.gameService.getQuizList();
  }

  ngAfterViewInit(): void {
    this.quizList$.pipe(take(1)).subscribe((quizList) => {
      this.carousel = this.el.nativeElement.querySelector('.carousel');
      // @ts-ignore
      this.figure = this.carousel.querySelector('figure');
      // @ts-ignore
      this.nav = this.carousel.querySelector('nav');
      this.numQuizzes = quizList.length;
      this.theta = 2 * Math.PI / this.numQuizzes;
      this.currQuiz = 0;


      this.rotateCarouselAutomatically();
    });
  }





  rotateCarouselAutomatically() {
    let currentIndex = 0;

    setInterval(() => {
      // @ts-ignore
      this.currQuiz = (this.currQuiz + 1) % this.numQuizzes;
      this.onNavClick(1);
    }, 3000); // Changez cette valeur pour ajuster la durée entre les rotations (en millisecondes)
  }
  onClick(direction: number): void {
    // Add direction to current quiz index
    this.currQuiz += direction;

    // Ensure current quiz index stays within bounds of quiz list
    if (this.currQuiz < 0) {
      // @ts-ignore
      this.currQuiz = this.numQuizzes - 1;
    } else { // @ts-ignore
      if (this.currQuiz >= this.numQuizzes) {
            this.currQuiz = 0;
          }
    }

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
}
