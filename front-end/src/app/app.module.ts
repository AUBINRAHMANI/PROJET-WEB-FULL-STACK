import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GamePageComponent} from "./game/game-page/game-page.component";
import {GameQuestionComponent} from "./game/game-question/game-question.component";
import {GameAnswerComponent} from "./game/game-answer/game-answer.component";
import {GameInstanceComponent} from "./game/game-instance/game-instance.component";
import {HttpClientModule} from "@angular/common/http";
import {ResultatComponent} from "./composant/resultat.component";
import { AccueilComponent } from './accueil/accueil.component';
import { CalibrageComponent } from './calibrage/calibrage.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultatComponent,
    GamePageComponent,
    GameQuestionComponent,
    GameAnswerComponent,
    GameInstanceComponent,
    AccueilComponent,
    CalibrageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
