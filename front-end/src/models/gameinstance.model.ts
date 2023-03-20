import {Answer} from "./question.model";

export interface Gameinstance{
  Id: string;
  quizId:string;
  gameAnswers: Answer[ ];
  startTime: Date;
  endTime: Date;
}
