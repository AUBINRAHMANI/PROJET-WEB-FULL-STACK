import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Utilisateur} from "../../models/Utilisateur.model";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})

export class ConnexionComponents implements OnInit {

  public listeUtilisateur: Utilisateur[] = [];

  constructor(public userService: UserService) {
    this.userService.utilisateurs$.subscribe((utilisateur: Utilisateur[]) => {
      this.listeUtilisateur = utilisateur;
    });
  }


  ngOnInit(): void {
  }

  deleteUser(user: Utilisateur): void {
    this.userService.deleteUser(user);
    console.log("connexion : ",user.id);
  }
}





