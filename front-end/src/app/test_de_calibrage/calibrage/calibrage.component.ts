import {Component, OnInit} from '@angular/core';
import {CalibrageService} from "../../../service/calibrage.service";

@Component({
  selector: 'app-calibrage',
  templateUrl: './calibrage.component.html',
  styleUrls: ['./calibrage.component.scss']
})

export class CalibrageComponent implements OnInit {
  levels: number[] = [5, 4, 3, 2, 1]; // les niveaux de calibrage, du plus grand au plus petit
  currentLevel: number = 0; // le niveau actuel de calibrage
  modalMessage: string = ''; // le message à afficher dans la modale de retour
  showModal: boolean = false; // indique si la modale doit être affichée

  constructor(private calibrageService: CalibrageService) { }

  ngOnInit(): void {
    // commencer la calibration avec le premier niveau
    this.calibrageService.startCalibration();
  }

  onButtonClick(level: number): void {
    // vérifier si le niveau cliqué est le niveau attendu
    const isCalibrated = this.calibrageService.checkCalibration(level);

    if (isCalibrated) {
      // afficher un message de succès
      this.modalMessage = 'Calibrage réussi !';
      this.showModal = true;

      // passer au niveau suivant si ce n'est pas le dernier
      if (this.currentLevel < this.levels.length - 1) {
        this.currentLevel++;
        this.calibrageService.startCalibration();
      } else {
        // terminer la calibration et retourner au menu principal
        this.calibrageService.endCalibration();
        this.showModal = false;
        // TODO: retourner au menu principal
      }
    } else {
      // afficher un message d'erreur
      this.modalMessage = 'Calibrage échoué. Réessayez.';
      this.showModal = true;
    }
  }

  closeModal(): void {
    // fermer la modale
    this.showModal = false;
  }
}
