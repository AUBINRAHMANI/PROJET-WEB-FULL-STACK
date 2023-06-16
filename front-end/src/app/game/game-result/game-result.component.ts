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

  ngOnInit(): void {
    console.log(this.gameInstance?.answersGiven);
  }

  saveGameInstanceToFile(): void {
    this.gameService.saveGameInstanceToFile(this.gameInstance);
  }
  areBothTrue(value1: boolean | string, value2: boolean | string): boolean {
    return String(value1).toLowerCase() === String(value2).toLowerCase();
  }
}
