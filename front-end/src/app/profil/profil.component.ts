import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';
import {UserService} from "../../service/user.service";
import {Utilisateur} from "../../models/user.model";
import { Router } from '@angular/router';


import {LISTE_UTILISATEUR} from "../../mocks/user-list.mock";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  @Input() public user!: Utilisateur;

  @Output() public deleteUser = new EventEmitter<Utilisateur>();

  public userForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public userService : UserService, private router: Router) {
    this.userForm = this.formBuilder.group({
      id: [''],
      nom: [''],
      prenom: [''],
    });

    this.userForm.patchValue({
      id: this.user?.id ?? '',
      nom: this.user?.nom ?? '',
      prenom: this.user?.prenom ?? '',
    });

    this.userForm.controls['id'].setValue(this.user?.id ?? '');

  }

  ngOnInit(): void {
    console.log('utilisateur', this.user);
  }

  addUser(): void {
   // this.userService.addUtilisateur(this.userForm.value);
    const userToCreate: Utilisateur = this.userForm.getRawValue() as Utilisateur;
    userToCreate.stade = -1;
    userToCreate.droit = false;
    userToCreate.image = 'https://www.w3schools.com/howto/img_avatar.png';
    this.userService.addUser(userToCreate);

  }

  userDelete(): void {
    this.userService.deleteUser(this.user);
  }

}



