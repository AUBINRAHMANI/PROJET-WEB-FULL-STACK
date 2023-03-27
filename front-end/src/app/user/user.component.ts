import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import{Utilisateur} from "../../models/Utilisateur.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

    @Input() public user!: Utilisateur;

    @Output() public deleteUser = new EventEmitter<Utilisateur>();

    constructor() { }

    ngOnInit(): void {
    }

    userDelete(): void {
      this.deleteUser.emit(this.user);
    }
}
