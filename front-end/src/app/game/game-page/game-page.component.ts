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
  private inactivityTimeout: number = 10000; // 1 minutes
  private inactivityTimeoutText: number = 5000; // 5 secondes
  private timer: any;
  //private sound: Howl;  alternative pour HTMLAudioElement
  public showReminder: boolean = false;



  @Input() quizId: string | undefined;
  currentQuestion: Question | undefined;
  questions: Question[] = [];

  MinusQuestions : Question[]=[]
  @Output() containerClick: EventEmitter<void> = new EventEmitter();
  progressValue: number=0;

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
        this.MinusQuestions.push( question.getMiniusQuestions());
      });

    }
    this.backgroundMusic = document.getElementById('z-music') as HTMLAudioElement;
    if (this.backgroundMusic) {
      this.backgroundMusic.play();
    }
    this.alertSound = document.getElementById('alert-sound') as HTMLAudioElement;
    this.startTimer();
  }

  ngOnDestroy() {
    // @ts-ignore
    // @ts-ignore


  }

  onAnswerSelected(answer: { question: Question; answer: Answer }) {
    console.log("METHOD onAnswerSelected");
    this.gameService.selectAnswer(answer.answer.answerId);
    this.resetTimer();

  }

  previousQuestion() {
    console.log("METHOD previousQuestion");
    this.gameService.previousQuestion();
    this.startTimer();
  }

  nextQuestion() {
    console.log("METHOD nextQuestion");
    this.gameService.nextQuestion();
    this.startTimer()
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
    this.resetTimer();

  }

  enlargeButtons() {
    if (!this.gameService.recalibrageEffectue) {
      this.gameService.recalibrageEffectue = true;
      this.containerClick.emit();
    }

    this.resetTimer();
  }

  startTimer() {
    this.timer = setTimeout(() => {
      this.playSound();
    }, this.inactivityTimeout);
  }

  resetTimer(){
    clearTimeout(this.timer);
    this.startTimer();
  }


  playSound() {
    const audio = new Audio('assets/ding.mp3');
    audio.play();
    this.showReminder = true;
    setTimeout(() =>{
      this.showReminder = false;
    }, this.inactivityTimeoutText) // le message s'affiche pendant 5 secondes
  }

  getMinus(index: string): Question {
    // @ts-ignore
    return this.MinusQuestions.find((question) => question.id === index);
  }


}
