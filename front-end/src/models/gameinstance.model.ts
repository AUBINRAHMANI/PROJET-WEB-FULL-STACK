import {Answer} from "./question.model";
import {Quiz} from "./quiz.model";
export class GameInstance {
  constructor(
    public id: number,
    public quiz: Quiz,
    public startTime: Date,
    public endTime: Date | null,
    public answersGiven: AnswerGiven[]
  ) {}

  public score: number = 0;

  get duration(): number | null {
    if (!this.endTime) {
      return null;
    }
    return (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  }

  addAnswer(answerGiven: AnswerGiven) {
    this.answersGiven.push(answerGiven);
  }

  updateScore(answer: Answer): void {
    if (answer.isCorrect) {
      this.score += 1;
    }
  }
  endGame() {
    this.endTime = new Date();
  }
}

export class AnswerGiven {
  constructor(
    public questionId: number,
    public answerId: number,
  ) {}
}

