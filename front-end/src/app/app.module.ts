import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GamepageComponent} from "./game/gamepage/gamepage.component";
import {GamequestionComponent} from "./game/gamequestion/gamequestion.component";
import {GameanswerComponent} from "./game/gameanswer/gameanswer.component";
import {GameInstanceComponent} from "./game/gameinstance/game-instance.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    GamepageComponent,
    GamequestionComponent,
    GameanswerComponent,
    GameInstanceComponent
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
