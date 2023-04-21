import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamePageComponent} from "./game/game-page/game-page.component";
import {GameInstanceComponent} from "./game/game-instance/game-instance.component";
import {GameResultComponent} from "./game/game-result/game-result.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {CalibrageComponent} from "./test_de_calibrage/calibrage/calibrage.component";
import {ConnexionComponents} from "./connexion/connexion.components";

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'gameinstance', component: GameInstanceComponent },
  { path: 'calibrage', component: CalibrageComponent },
  { path: 'connexion', component: ConnexionComponents },
  { path: 'game-result', component: GameResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
