import {Answer, Question} from "./question.model";
import { Quiz } from "./quiz.model";
import {Utilisateur} from "./user.model";

export class GameInstance {
  set userId(value: number) {
    this._userId = value;
  }
  get userId(): number {
    return this._userId;
  }
  get recalibrage(): boolean {
    return this._recalibrage;
  }

  set recalibrage(value: boolean) {
    this._recalibrage = value;
  }
  private _id: number;
  private _score: number = 0;
  private _quiz: Quiz | undefined;
  private _answersGiven: AnswerGiven[] = [];

  private _isfinished : boolean;

  private _recalibrage = false;

  static numberOfInstances: number = 0;


  constructor(
    private _startTime: Date,
    private _endTime: Date | null = null,
    private _userId:number,
  ) {
    this._id = ++GameInstance.numberOfInstances;
    this._isfinished=false;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  // @ts-ignore
  get getQuiz(): Quiz | undefined {
    return this._quiz;
  }

  set setQuiz(value: Quiz) {
    this._quiz = value;
  }

  get startTime(): Date {
    return this._startTime;
  }

  set startTime(value: Date) {
    this._startTime = value;
  }

  get endTime(): Date | null {
    return this._endTime;
  }

  set endTime(value: Date | null) {
    this._endTime = value;
  }

  get answersGiven(): AnswerGiven[] {
    return this._answersGiven;
  }

  set answersGiven(value: AnswerGiven[]) {
    this._answersGiven = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }
  get isFinished():boolean{
    return this._isfinished;
  }
  get duration(): number | null {
    if (!this._endTime) {
      return null;
    }
    return (this._endTime.getTime() - this._startTime.getTime()) / 1000;
  }

  addAnswer(answerGiven: AnswerGiven) {
    this._answersGiven.push(answerGiven);
  }

  updateScore(answer: Answer): void {
    if(!this._isfinished){
      console.log("---"+answer.isCorrect);
      if (this.areBothTrue(true,answer.isCorrect)) {
        this._score += 1;
      }
      console.log(this.score);
    }
    console.log("le jeu est fini !");
  }

  endGame() {
    this._isfinished=true;
    console.log("le jeu est bien fini");
    this._endTime = new Date();
  }

  areBothTrue(value1: boolean | string, value2: boolean | string): boolean {
    return String(value1).toLowerCase() === String(value2).toLowerCase();
  }
}

export class AnswerGiven {
  constructor(public question: Question, public givenAnswer: Answer, correctAnswer: Answer | undefined) {}
}
