import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GamequestionComponent} from "./game/gamequestion/gamequestion.component";
import {ResultatComponent} from "./composant/Resultat.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClientModule} from "@angular/common/http";
import {GameInstanceComponent} from "./game/gameinstance/game-instance.component";
import {GamePageComponent} from "./game/gamepage/gamepage.component";
import {GameAnswerComponent} from "./game/gameanswer/gameanswer.component";

@NgModule({
  declarations: [
    AppComponent,
    ResultatComponent,
    GamePageComponent,
    GamequestionComponent,
    GameAnswerComponent,
    GameInstanceComponent
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
