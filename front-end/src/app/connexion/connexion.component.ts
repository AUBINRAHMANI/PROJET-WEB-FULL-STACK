import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Utilisateur} from "../../models/user.model";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  public listeUtilisateur: Utilisateur[] = [];
  public profilSelectionne: Utilisateur | null = null;

  constructor(public userService: UserService) {
    this.userService.utilisateurs$.subscribe((utilisateurs: Utilisateur[]) => {
      this.listeUtilisateur = utilisateurs;
    });
  }

  ngOnInit(): void {
    // Vérifiez si un profil est déjà enregistré dans le localStorage
    const profilEnregistre = localStorage.getItem('profilSelectionne');
    if (profilEnregistre) {
      this.profilSelectionne = JSON.parse(profilEnregistre);
    }
  }

  selectProfil(utilisateur: Utilisateur): void {
    this.profilSelectionne = utilisateur;
    // Enregistrez le profil sélectionné dans le localStorage
    localStorage.setItem('profilSelectionne', JSON.stringify(utilisateur));
  }

  deselectionnerProfil(): void {
    this.profilSelectionne = null;
    // Supprimez l'enregistrement du profil dans le localStorage
    localStorage.removeItem('profilSelectionne');
  }

}




