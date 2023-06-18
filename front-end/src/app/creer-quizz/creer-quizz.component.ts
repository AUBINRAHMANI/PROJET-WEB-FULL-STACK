import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { GameService } from '../../service/game.service';
import { Quiz } from '../../models/quiz.model';
import {Question} from "../../models/question.model";


@Component({
  selector: 'app-creer-quizz',
  templateUrl: './creer-quizz.component.html',
  styleUrls: ['./creer-quizz.component.scss']
})
export class CreerQuizzComponent implements OnInit {

  public quizForm: FormGroup;


    constructor(public formBuilder: FormBuilder, public quizService: GameService, private router: Router){
      this.quizForm = this.formBuilder.group({
        name: [''],
        theme: [''],
        questions: ['']
      });
    }

    ngOnInit(): void {
    }

    addQuiz(): void {
      const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;

      this.quizService.addQuiz(quizToCreate);
    }

  RetourAcceuil(){
    this.router.navigate(['/accueilP']);
  }


}
