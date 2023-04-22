import { Component, OnInit } from '@angular/core';
import { CalibrageService } from "../../../service/calibrage.service";

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
  buttonSizes: number[][] = [
    [600, 500], // niveau 5
    [300, 250], // niveau 4
    [250, 200], // niveau 3
    [125, 105], // niveau 2
    [100, 80]   // niveau 1
  ];
  private modalTimeoutId: number | undefined;

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
      this.modalMessage = '🫡'; // réinitialiser le message de la modale
      // adapter la taille du bouton pour le niveau suivant
      this.resizeButton(this.currentLevel);
    } else {
      // si le calibrage est échoué ou que c'est le dernier niveau, retourner au menu principal
      // TODO: retourner au menu principal
      this.calibrageService.endCalibration();
    }
  }

  onButtonClickOutside(event: MouseEvent): void {
    if ((event.target as HTMLElement).tagName !== 'BUTTON') {
      console.log("Clic en dehors du bouton");
      // L'utilisateur a cliqué en dehors du bouton, afficher un message d'erreur
      this.modalMessage = 'Vous devez cliquer sur le bouton pour calibrer.';
      this.showModal = true;
      this.buttonDisabled = true;
      const closeModalTimeout = setTimeout(() => {
        this.endModal();
        this.currentLevel = 0;
        this.showButton = true;
        this.buttonDisabled = false;
        // adapter la taille du bouton pour le premier niveau
        this.resizeButton(this.currentLevel);

        // attendre 3 secondes avant de terminer la calibration
        const endCalibrationTimeout = setTimeout(() => {
          this.calibrageService.endCalibration();
        }, 3000);

        // enregistrer l'ID du timeout pour pouvoir le supprimer en cas de fermeture du modal
        this.modalTimeoutId = endCalibrationTimeout;

      }, 3000);

      // enregistrer l'ID du timeout pour pouvoir le supprimer en cas de fermeture du modal
      this.modalTimeoutId = closeModalTimeout;
    }
  }

  endModal(): void {
    // fermer la modale et supprimer le timeout associé
    this.showModal = false;
    clearTimeout(this.modalTimeoutId);
    // terminer la calibration si la modale est fermée avant les 3 secondes
    this.calibrageService.endCalibration();
  }



  resizeButton(level: number): void {
    // récupérer la taille du bouton correspondant au niveau actuel
    const buttonSize = this.buttonSizes[level];
    // ajuster la taille du bouton
    const buttonElement = document.querySelector('button');
    if (buttonElement) {
      buttonElement.style.width = `${buttonSize}px`;
      // @ts-ignore
      buttonElement.style.height = `${buttonSize / 5 * 4}px`;
    }
  }
}
