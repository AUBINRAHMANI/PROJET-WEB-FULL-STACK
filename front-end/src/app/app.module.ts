import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GameQuestionComponent} from "./game/game-question/gamequestion.component";
import {ResultatComponent} from "./composant/Resultat.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClientModule} from "@angular/common/http";
import {GameInstanceComponent} from "./game/game-instance/game-instance.component";
import {GamePageComponent} from "./game/game-page/gamepage.component";
import {GameAnswerComponent} from "./game/game-answer/gameanswer.component";

@NgModule({
  declarations: [
    AppComponent,
    ResultatComponent,
    GameInstanceComponent,
    GameAnswerComponent,
    GamePageComponent,
    GameQuestionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
