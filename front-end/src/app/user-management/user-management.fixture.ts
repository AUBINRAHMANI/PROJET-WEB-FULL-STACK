import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class UserManagementFixture extends E2EComponentFixture {


  getUserList(){
    return this.page.$$('user-list');
  }

  VerifyContentPage(){
    return this.page.$('#Connexion');
  }

  getForm(){
    return this.page.locator('css=form');

  }

  inputNom(value : string){
    return this.page.fill('input[id="nom"]', value);
  }

  inputPrenom(value : string){
    return this.page.fill('input[id="prenom"]', value);
  }

  CreateBoutton(){
    return this.page.getByRole('button', { name: 'Créer' });
  }

  VerifyUserExist(value : string){
    return (this.page.getByText(value));
  }


}
