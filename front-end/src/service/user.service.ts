import { Injectable } from '@angular/core';
import {Utilisateur} from "../models/user.model";
import {LISTE_UTILISATEUR} from "../mocks/user-list.mock";
import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {httpOptionsBase, serverUrl} from "../configs/server.config";



@Injectable({
  providedIn: 'root'
})

export class UserService {

  public utilisateurs: Utilisateur[] = [];

  public userSelected$: Subject<Utilisateur> = new Subject();

  private usersUrl = serverUrl + "/users"; // URL to web api

  // Observable containing a list of users, initialized with an empty array.
  // Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
  public utilisateurs$: BehaviorSubject<Utilisateur[]> = new BehaviorSubject(this.utilisateurs);
  private httpOptions = httpOptionsBase;


  constructor(private http: HttpClient, private router: Router) {
    this.retrieveUsers();
  }

  public retrieveUsers() {
    console.log("UsersService.retrieveQuizList()");
    this.http.get<Utilisateur[]>(this.usersUrl).subscribe((users: Utilisateur[]) => {
      this.utilisateurs = users;
      this.utilisateurs$.next(this.utilisateurs);
    });
    console.log("Users : " + this.utilisateurs);
  }

  addUser(utilisateur: Utilisateur): void {
    this.http.post<Utilisateur>(this.usersUrl, utilisateur, this.httpOptions).subscribe(() => this.retrieveUsers());
  }

  setSelectedUser(userId: string): void {
    const urlWithId = this.usersUrl + '/' + userId;
    this.http.get<Utilisateur>(urlWithId).subscribe((user) => {
      this.userSelected$.next(user);
    });
  }

  deleteUser(user: Utilisateur): void {
    const urlWithId = this.usersUrl + '/' + user.id;
    this.http.delete<Utilisateur>(urlWithId, this.httpOptions).subscribe(() => this.retrieveUsers());
  }

  updateUser(user: Utilisateur): void {
    const urlWithId = this.usersUrl + '/' + user.id;
    this.http.put<Utilisateur>(urlWithId, user, this.httpOptions).subscribe(() => this.retrieveUsers());
  }
}








