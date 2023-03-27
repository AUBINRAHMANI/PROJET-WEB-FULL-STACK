import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';
import {UserService} from "../service/user.service";
import {Utilisateur} from "../../models/Utilisateur.model";



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  @Input() public user!: Utilisateur;

  @Output() public deleteUser = new EventEmitter<Utilisateur>();

  public userForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public userService : UserService) {
    this.userForm = this.formBuilder.group({
      id: [''],
      nom: [''],
      prenom: [''],
      score: [''],
      stade: [''],
    });

    }

  ngOnInit(): void {
  }

  addUser(): void {
   // this.userService.addUtilisateur(this.userForm.value);
    const userToCreate: Utilisateur = this.userForm.getRawValue() as Utilisateur;
    this.userService.addUtilisateur(userToCreate);
  }

  userDelete(): void {
    this.deleteUser.emit(this.user);
  }


  }



