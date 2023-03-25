import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject } from "rxjs";
import {Question} from "../models/question.model";
import {QUESTION_CAPITALES} from "../mocks/quiz-list.mock";
@Injectable({
  providedIn: 'root'
})

export class GameService {

  private questions: Question[] = [];

  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);

  constructor(private http: HttpClient) {
    this.retrieveQuestions();
  }

  retrieveQuestions(): void {
    this.questions=QUESTION_CAPITALES;
    this.questions$.next(this.questions);
  }
}
