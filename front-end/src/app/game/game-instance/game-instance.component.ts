import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Quiz} from "../../../models/quiz.model";
import {GameService} from "../../../service/game.service";


@Component({
  selector: 'app-game-instance',
  templateUrl: './game-instance.component.html',
  styleUrls: ['./game-instance.component.scss']
})
export class GameInstanceComponent implements OnInit {
  quizList$: Observable<Quiz[]> = new Observable<Quiz[]>();
  currentQuiz: Quiz | undefined;
  quizStarted = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.quizList$ = this.gameService.getQuizList();
  }

  startQuiz(quiz: Quiz) {
    this.currentQuiz = quiz;
    this.quizStarted = true;
    this.gameService.startGame(quiz.id);
  }
}
