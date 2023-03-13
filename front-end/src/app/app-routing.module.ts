import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamepageComponent } from './game/gamepage/gamepage.component';

const routes: Routes = [
  { path: 'gamepage', component: GamepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
