import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {createErrorClass} from "rxjs/internal/util/createErrorClass";

@Component({
  selector: 'app-accueil-p',
  templateUrl: './accueil-p.component.html',
  styleUrls: ['./accueil-p.component.scss']
})
export class AccueilPComponent {
  constructor(private router: Router) {}

    creerQuizz(){
      this.router.navigate(['/createQuizz']);
    }

    consulterQuizz(){
      this.router.navigate(['/gameinstance']);
    }

    GestionProfils(){
      this.router.navigate(['/user-management']);
    }

}


