import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GameQuestionComponent} from "./game/game-question/game-question.component";
import {GameAnswerComponent} from "./game/game-answer/game-answer.component";
import {GameInstanceComponent} from "./game/menu/game-instance/game-instance.component";
import {HttpClientModule} from "@angular/common/http";
import { AccueilComponent } from './accueil/accueil.component';
import { CalibrageComponent } from './test_de_calibrage/calibrage/calibrage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {ReactiveFormsModule} from "@angular/forms";
import {UserManagementComponent} from "./user-management/user-management.component";
import {ProfilComponent} from "./profil/profil.component";
import {UserComponent} from "./user/user.component";
import { HeaderComponent } from './header/header.component';
import {AdaptButtonSizeDirective} from "./AdaptButtonSize.directive";
import {GamePageComponent} from "./game/game-page/game-page.component";
import {GameResultComponent} from "./game/game-result/game-result.component";
import {CarouselModule} from "ngx-owl-carousel-o";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ModalComponent } from './test_de_calibrage/modal/modal.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { QuizGridComponent } from './game/menu/quiz-grid/quiz-grid.component';
import {ConnexionComponent} from "./connexion/connexion.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { AccueilPComponent } from './accueil-p/accueil-p.component';
import { CreerQuizzComponent } from './creer-quizz/creer-quizz.component';

@NgModule({
  declarations: [
    AppComponent,
    GameInstanceComponent,
    GameAnswerComponent,
    GameQuestionComponent,
    GamePageComponent,
    GameResultComponent,
    AccueilComponent,
    CalibrageComponent,
    HeaderComponent,
    AdaptButtonSizeDirective,
    CalibrageComponent,
    UserManagementComponent,
    ProfilComponent,
    UserComponent,
    ModalComponent,
    QuizGridComponent,
    ConnexionComponent,
    AccueilPComponent,
    CreerQuizzComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTooltipModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    NgbModule,
    FontAwesomeModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
