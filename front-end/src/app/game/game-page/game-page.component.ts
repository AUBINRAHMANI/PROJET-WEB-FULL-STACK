import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from "../../../models/quiz.model";
import { GameService } from "../../../service/game.service";
import { Answer, Question } from "../../../models/question.model";
import { Observable } from "rxjs";
import {GameInstance} from "../../../models/gameInstance.model";
import { ChangeDetectorRef } from '@angular/core';
import {CalibrageService} from "../../../service/calibrage.service";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  private backgroundMusic: HTMLAudioElement | undefined;
  quiz: Observable<Quiz | undefined> = new Observable<Quiz | undefined>();

  gameInstance: GameInstance;
  private alertSound: HTMLAudioElement | undefined;
  private inactivityTimeout: number = 3000000; // 5 minutes
  private inactivityTimer: any;




  @Input() quizId: string | undefined;
  currentQuestion: Question | undefined;
  questions: Question[] = [];

  MinusQuestions : Question[]=[]
  @Output() containerClick: EventEmitter<void> = new EventEmitter();

  constructor(private route: ActivatedRoute, public gameService: GameService,public calibrageService:CalibrageService,private changeDetectorRef: ChangeDetectorRef) {
    console.log("CLASS GamePageComponent");
    this.ngOnInit();
    this.gameInstance = this.gameService.gameInstance;
  }

  ngOnInit(): void {
    console.log("METHOD ngOnInit");
    if (this.quizId) {
      this.quiz = this.gameService.getQuiz(this.quizId);
      this.gameService.retrieveQuestions(this.quizId,this.calibrageService.getCalibrateLevel());
      this.gameService.currentQuestion$.subscribe((question: Question) => {
        this.currentQuestion = question;
      });
      this.quiz.subscribe((quiz: Quiz | undefined) => {
        console.log("dure dure");
        if (quiz) {
          this.questions = quiz.questions;
        }
        console.log("ouiyutryuilu");
      });
      this.questions.forEach((question: Question) => {
        this.MinusQuestions.push(question.getMiniusQuestions());
      });

    }
    this.backgroundMusic = document.getElementById('background-music') as HTMLAudioElement;
    if (this.backgroundMusic) {
      this.backgroundMusic.play();
    }
    this.alertSound = document.getElementById('alert-sound') as HTMLAudioElement;
    this.resetInactivityTimer();

  }

  ngOnDestroy() {
    // @ts-ignore
    this.backgroundMusic.pause();
    // @ts-ignore
    this.backgroundMusic.currentTime = 0;
    this.resetInactivityTimer();

  }

  onAnswerSelected(answer: { question: Question; answer: Answer }) {
    console.log("METHOD onAnswerSelected");
    this.gameService.selectAnswer(answer.answer.answerId);
    this.resetInactivityTimer();

  }

  previousQuestion() {
    console.log("METHOD previousQuestion");
    this.gameService.previousQuestion();
  }

  nextQuestion() {
    console.log("METHOD nextQuestion");
    this.gameService.nextQuestion();
  }

  disablePrevious(): boolean {
    console.log("METHOD disablePrevious");
    return this.gameService.currentQuestionIndex === 0;
  }

  disableNext(): boolean {
    console.log("METHOD disableNext");
    return this.gameService.currentQuestionIndex === this.questions.length - 1;
    ;
  }

  isGameFinished(): boolean {
    const quiz = this.gameService.quizList[this.gameService.currentQuizIndex];
    const currentQuestionIndex = this.gameService.currentQuestionIndex;
    return currentQuestionIndex === quiz.questions.length - 1;
  }


  onContainerClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (targetElement.tagName.toLowerCase() !== 'button') {
      this.gameService.recalibrageEffectue = true;
      this.containerClick.emit();
      this.changeDetectorRef.detectChanges();
    }
    this.resetInactivityTimer();

  }

  enlargeButtons() {
    if (!this.gameService.recalibrageEffectue) {
      this.gameService.recalibrageEffectue = true;
      this.containerClick.emit();
    }
    this.resetInactivityTimer();

  }
  resetInactivityTimer() {
    clearTimeout(this.inactivityTimer);
    this.inactivityTimer = setTimeout(() => {
      if (this.alertSound) {
        this.alertSound.play();
      }
    }, this.inactivityTimeout);
  }

  getMinus(index: string): Question {
    // @ts-ignore
    return this.MinusQuestions.find((question) => question.id === index);
  }


}
