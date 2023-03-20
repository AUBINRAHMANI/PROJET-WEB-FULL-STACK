import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GamepageComponent} from "./game/gamepage/gamepage.component";
import {GamequestionComponent} from "./game/gamequestion/gamequestion.component";
import {GameanswerComponent} from "./game/gameanswer/gameanswer.component";
import {GameinstanceComponent} from "./game/gameinstance/gameinstance.component";
import {ResultatComponent} from "./composant/Resultat.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    ResultatComponent,
    GamepageComponent,
    GamequestionComponent,
    GameanswerComponent,
    GameinstanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
