import { Injectable } from '@angular/core';
import {Utilisateur} from "../../models/Utilisateur.model";
import {LISTE_UTILISATEUR} from "../../mocks/listeUtilisateur.mock";
import {BehaviorSubject} from "rxjs";



@Injectable({
  providedIn: 'root'
})

export class UserService {

  private utilisateurs : Utilisateur[]= LISTE_UTILISATEUR;
 // private listeUtilisateur: Utilisateur[] = [];

  // Observable containing a list of quizzes, initialized with an empty array.
// Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
  public utilisateurs$: BehaviorSubject<Utilisateur[]> = new BehaviorSubject(this.utilisateurs);
  //public listeUtilisateur$: Utilisateur[] = this.listeUtilisateur;

  public addUtilisateur(utilisateur: Utilisateur): void {
    this.utilisateurs.push(utilisateur);
    this.utilisateurs$.next(this.utilisateurs);
  }

  public deleteUser(user: Utilisateur): void {
    this.utilisateurs = this.utilisateurs.filter((u: Utilisateur) => u !== user);
    this.utilisateurs$.next(this.utilisateurs);
  }



}


