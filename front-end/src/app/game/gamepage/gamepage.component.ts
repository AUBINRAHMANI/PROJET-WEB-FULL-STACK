import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from "../../../models/quiz.model";
import { GameService } from "../../../service/game.service";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  quiz$: Observable<Quiz | undefined> = new Observable<Quiz | undefined>();

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('quizId');
    if (quizId) {
      this.quiz$ = this.gameService.getQuiz(quizId);
      this.gameService.retrieveQuestions(quizId);
    }
  }
}
