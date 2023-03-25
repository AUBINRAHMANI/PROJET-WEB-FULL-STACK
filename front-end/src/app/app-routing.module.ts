import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameInstanceComponent} from "./game/gameinstance/game-instance.component";

const routes: Routes = [
  { path: 'gameinstance', component: GameInstanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
