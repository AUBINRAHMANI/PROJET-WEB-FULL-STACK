import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GamepageComponent} from "./game/gamepage/gamepage.component";
import {GamequestionComponent} from "./game/gamequestion/gamequestion.component";
import {GameanswerComponent} from "./game/gameanswer/gameanswer.component";

@NgModule({
  declarations: [
    AppComponent,
    GamepageComponent,
    GamequestionComponent,
    GameanswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
