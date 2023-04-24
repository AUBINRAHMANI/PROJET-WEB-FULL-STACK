import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']

})
export class AccueilComponent {
  labelMessage1: string = "Veuillez cliquer sur le bouton pour acceder au quizz !";
  labelMessage2: string = "Veuillez cliquer sur le bouton pour acceder au test de calibrage !";

}
