import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import{Utilisateur} from "../../models/user.model";

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
      console.log("user : ",this.user.id);
    }
}
