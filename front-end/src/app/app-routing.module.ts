import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamePageComponent} from "./game/game-page/game-page.component";
import {GameInstanceComponent} from "./game/game-instance/game-instance.component";

const routes: Routes = [
  { path: '', component: GameInstanceComponent },
  { path: 'gamepage', component: GamePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
