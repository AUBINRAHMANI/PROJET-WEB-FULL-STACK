import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamepageComponent } from './game/gamepage/gamepage.component';
import {ConnexionComponents} from "./connexion/connexion.components";

const routes: Routes = [
  { path: 'gamepage', component: GamepageComponent },
  { path: 'connexion', component: ConnexionComponents },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
