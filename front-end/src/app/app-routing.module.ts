import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameInstanceComponent} from "./game/gameinstance/game-instance.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {CalibrageComponent} from "./calibrage/calibrage.component";

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'gameinstance', component: GameInstanceComponent },
  { path: 'calibrage', component: CalibrageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
