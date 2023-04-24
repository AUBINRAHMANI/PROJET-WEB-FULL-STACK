import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GameQuestionComponent} from "./game/game-question/game-question.component";
import {GameAnswerComponent} from "./game/game-answer/game-answer.component";
import {GameInstanceComponent} from "./game/game-instance/game-instance.component";
import {HttpClientModule} from "@angular/common/http";
import { AccueilComponent } from './accueil/accueil.component';
import { CalibrageComponent } from './test_de_calibrage/calibrage/calibrage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {ReactiveFormsModule} from "@angular/forms";
import {ConnexionComponents} from "./connexion/connexion.components";
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

/*import { AdaptCalibrageButtonSizeDirective } from './adaptButtonSize/adapt-calibrage-button-size.directive';
*/

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
    ConnexionComponents,
    ProfilComponent,
    UserComponent,
    ModalComponent,
    /*AdaptCalibrageButtonSizeDirective*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
