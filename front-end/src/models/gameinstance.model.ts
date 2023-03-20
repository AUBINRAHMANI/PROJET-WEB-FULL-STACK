import {Answer} from "./question.model";

export interface GameInstance{
  Id: string;
  quizId:string;
  gameAnswers: Answer[ ];
  startTime: Date;
  endTime: Date;
}
