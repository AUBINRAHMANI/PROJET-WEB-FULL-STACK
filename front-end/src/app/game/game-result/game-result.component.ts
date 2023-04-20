import { Component, OnInit } from '@angular/core';
import { GameInstance } from '../../../models/gameInstance.model';
import { GameService } from '../../../service/game.service';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss'],
})
export class GameResultComponent implements OnInit {
  gameInstance: GameInstance | undefined;

  constructor(private gameService: GameService) {
    this.gameInstance = this.gameService.gameInstance;
    this.saveGameInstanceToFile();
  }

  ngOnInit(): void {}

  saveGameInstanceToFile(): void {
    this.gameService.saveGameInstanceToFile(this.gameInstance);
  }
}
