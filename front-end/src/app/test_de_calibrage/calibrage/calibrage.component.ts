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
  showButton: boolean = true; // indique si le bouton doit être affiché
  buttonDisabled: boolean = false; // indique si le bouton doit être désactivé

  constructor(private calibrageService: CalibrageService) {
  }

  ngOnInit(): void {
    console.log("Initialisation du calibrage");
    // commencer la calibration avec le premier niveau
    this.calibrageService.startCalibration();
  }

  onButtonClick(): void {
    console.log("Clic sur le bouton");
    // vérifier si le niveau cliqué est le niveau attendu
    const isCalibrated = this.calibrageService.checkCalibration(this.levels[this.currentLevel]);

    if (isCalibrated) {
      // afficher un message de succès
      this.modalMessage = 'Calibrage réussi !';
      this.showModal = true;

      // passer au niveau suivant si ce n'est pas le dernier
      if (this.currentLevel < this.levels.length - 1) {
        this.currentLevel++;
        this.calibrageService.startCalibration();
        this.showButton = true;
        this.buttonDisabled = false;
      } else {
        // terminer la calibration et retourner au menu principal
        this.calibrageService.endCalibration();
        this.showModal = false;
        this.showButton = false;
        // TODO: retourner au menu principal
      }
    } else {
      // afficher un message d'erreur
      this.modalMessage = 'Calibrage échoué. Réessayez.';
      this.showModal = true;
      this.buttonDisabled = true;
      setTimeout(() => {
        this.closeModal();
      }, 3000);
    }
  }

  closeModal(): void {
    console.log("Fermeture de la modale");
    // fermer la modale
    this.showModal = false;

    if (this.currentLevel < this.levels.length - 1 && this.modalMessage === 'Calibrage réussi !') {
      // si le calibrage est réussi et que ce n'est pas le dernier niveau, passer au niveau suivant
      this.currentLevel++;
      this.calibrageService.startCalibration();
      this.modalMessage = ''; // réinitialiser le message de la modale
    } else {
      // si le calibrage est échoué ou que c'est le dernier niveau, retourner au menu principal
      // TODO: retourner au menu principal
    }
  }

  onButtonClickOutside(event: MouseEvent): void {
    console.log("Clic en dehors du bouton");
    if ((event.target as HTMLElement).tagName !== 'BUTTON') {
      // L'utilisateur a cliqué en dehors du bouton, afficher un message d'erreur
      this.modalMessage = 'Vous devez cliquer sur le bouton pour calibrer.';
      this.showModal = true;
      this.buttonDisabled = true;
      setTimeout(() => {
        this.closeModal();
        this.calibrageService.startCalibration();
        this.currentLevel = 0;
        this.showButton = true;
        this.buttonDisabled = false;
      }, 3000);
    }
  }
}
