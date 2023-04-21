import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CalibrageService {
  expectedLevel: number = 0; // le niveau attendu de calibrage
  currentLevel: BehaviorSubject<number> = new BehaviorSubject<number>(0); // le niveau actuel de calibrage
  levels: number[] = [5, 4, 3, 2, 1]; // les différents niveaux de calibrage
  isCalibrated: boolean = false; // indique si le calibrage est terminé
  private calibrationResult: any;

  constructor(private http: HttpClient,private router:Router) {
    this.startCalibration();
  }

  startCalibration(): void {
    this.isCalibrated = false;
    this.currentLevel.next(0);
    this.expectedLevel = this.levels[0];
  }

  testButton(level: number): boolean {
    if (level === this.expectedLevel) {
      if (this.currentLevel.value === this.levels.length - 1) {
        // Dernier niveau atteint, le calibrage est terminé
        this.isCalibrated = true;
        return true;
      } else {
        // Passer au niveau de calibrage suivant
        this.currentLevel.next(this.currentLevel.value + 1);
        this.expectedLevel = this.levels[this.currentLevel.value];
        return true;
      }
    } else {
      // Mauvais bouton, réinitialiser le calibrage
      this.startCalibration();
      return false;
    }
  }
  checkCalibration(level: number): boolean {
    if (level === this.expectedLevel) {
      this.currentLevel.next(this.currentLevel.value + 1); // augmenter le niveau actuel
      this.expectedLevel = this.levels[this.currentLevel.value]; // définir le prochain niveau attendu
      return true; // retourner vrai si le niveau cliqué est le niveau attendu
    } else {
      return false; // retourner faux si le niveau cliqué n'est pas le niveau attendu
    }
  }
  endCalibration(): void {
    if (this.calibrationResult) {
      // afficher un modal de confirmation avec un message de réussite
      // et passer au niveau de calibrage suivant si possible
      this.currentLevel.next(this.currentLevel.value + 1);
      this.calibrationResult = false; // réinitialiser le résultat de la calibration
    } else {
      // afficher un modal d'erreur avec un message d'échec
      // et retourner au menu principal
      this.router.navigate(['/']);
    }
  }


}
