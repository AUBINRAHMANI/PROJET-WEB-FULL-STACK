import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GamepageComponent} from "./game/gamepage/gamepage.component";
import {GamequestionComponent} from "./game/gamequestion/gamequestion.component";
import {GameanswerComponent} from "./game/gameanswer/gameanswer.component";
import {GameinstanceComponent} from "./game/gameinstance/gameinstance.component";
import {ResultatComponent} from "./composant/Resultat.component";
import {ConnexionComponents} from "./connexion/connexion.components";
import {ProfilComponent} from "./profil/profil.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    ResultatComponent,
    GamepageComponent,
    GamequestionComponent,
    GameanswerComponent,
    GameinstanceComponent,
    ConnexionComponents,
    ProfilComponent
  ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


