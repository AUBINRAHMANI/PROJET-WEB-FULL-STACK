import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable, take} from 'rxjs';
import { Quiz } from '../../../../models/quiz.model';
import { GameService } from '../../../../service/game.service';
import { faCity, faTheaterMasks, faPaw, faMusic, faBirthdayCake, faLanguage } from '@fortawesome/free-solid-svg-icons';
import {GameInstance} from "../../../../models/gameInstance.model";
import { OwlOptions } from 'ngx-owl-carousel-o';
import {CalibrageService} from "../../../../service/calibrage.service";

@Component({
  selector: 'app-game-instance',
  templateUrl: './game-instance.component.html',
  styleUrls: ['./game-instance.component.scss']
})
export class GameInstanceComponent implements OnInit {
  quizList$: Observable<Quiz[]> = new Observable<Quiz[]>();
  currentQuiz: Observable<Quiz | undefined> | undefined;
  quizStarted = false;
  private numQuizzes: number =0;
  private theta: number | undefined;
  private currQuiz: number =0;

  // @ts-ignore
  @ViewChild('prevButton', { static: true }) prevButton: ElementRef ;
  // @ts-ignore
  @ViewChild('nextButton', { static: true }) nextButton: ElementRef ;
  // Définissez les icônes que vous souhaitez utiliser

  constructor(private gameService: GameService,private calibrageService:CalibrageService, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log("GAME-INSTANCE: ngOnInit");
    this.quizList$ = this.gameService.getQuizList();
    this.numQuizzes=this.gameService.quizList.length;
  }

  ngAfterViewInit(): void {
  }
  onClick(direction: number): void {
    // @ts-ignore
    this.currQuiz = (this.currQuiz += direction) % this.numQuizzes;
    console.log("thisssss current "+this.currQuiz);
    // Update transform to rotate to new quiz
    // @ts-ignore
  }


  selectQuiz(quizId: string): void {
    console.log("GAME-INSTANCE: selectQuiz");
    this.currentQuiz = this.getQuiz(quizId);
    this.gameService.selectedQuizId = quizId;
    this.gameService.startGame(quizId,this.calibrageService.getCalibrateLevel());
    this.quizStarted = true;
    console.log(quizId);
  }

  getQuiz(quizId: string): Observable<Quiz | undefined> {
    console.log("GAME-INSTANCE: getQuiz");
    return this.gameService.getQuiz(quizId);
  }
  onNavClick(direction: number): void {
  }


}
