import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameInstanceComponent} from "./game/menu/game-instance/game-instance.component";
import {GameResultComponent} from "./game/game-result/game-result.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {CalibrageComponent} from "./test_de_calibrage/calibrage/calibrage.component";
import {UserManagementComponent} from "./user-management/user-management.component";
import {ConnexionComponent} from "./connexion/connexion.component";

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'gameinstance', component: GameInstanceComponent },
  { path: 'calibrage', component: CalibrageComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'game-result', component: GameResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
