import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../../../models/quiz.model';
import { GameService } from '../../../service/game.service';

@Component({
  selector: 'app-game-instance',
  templateUrl: './game-instance.component.html',
  styleUrls: ['./game-instance.component.scss']
})
export class GameInstanceComponent implements OnInit {
  quizList$: Observable<Quiz[]> = new Observable<Quiz[]>();
  currentQuiz: Observable<Quiz | undefined> | undefined;
  quizStarted = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.quizList$ = this.gameService.getQuizList();
  }

  selectQuiz(quizId: string): void {
    this.currentQuiz = this.getQuiz(quizId);
    this.gameService.selectedQuizId = quizId;
    this.gameService.startGame(quizId);
    this.quizStarted = true;
    console.log(quizId);
  }

  getQuiz(quizId: string): Observable<Quiz | undefined> {
    return this.gameService.getQuiz(quizId);
  }
}
