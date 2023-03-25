import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GamepageComponent} from "./game/gamepage/gamepage.component";
import {GamequestionComponent} from "./game/gamequestion/gamequestion.component";
import {GameanswerComponent} from "./game/gameanswer/gameanswer.component";
import {GameInstanceComponent} from "./game/gameinstance/game-instance.component";
import {HttpClientModule} from "@angular/common/http";
import {ResultatComponent} from "./composant/resultat.component";
import { AccueilComponent } from './accueil/accueil.component';
import { CalibrageComponent } from './calibrage/calibrage.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultatComponent,
    GamepageComponent,
    GamequestionComponent,
    GameanswerComponent,
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
