import {E2EComponentFixture} from "../../../e2e/e2e-component.fixture";

export class ConnexionFixture extends E2EComponentFixture {

  getBoutonGestion(){
    return this.page.getByTestId('boutonGestion');
  }

  isButtonGestionVisible(){
    return this.getBoutonGestion().isVisible();
  }

  verifyProfilExist(value : string){
    return this.page.getByText(value);
  }

  TableauProfil(num : number){
    return this.page.$$('.profil-liste');
  }

  getProfil(){
    return this.page.getByRole('img', { name: 'Image de profil' });
  }

  getProfileSelected(value : string){
    return this.page.locator('app-connexion div').filter({ hasText: 'Cliquez sur votre profil'+value});
  }

  getProfileSelectedImage(value : string){
    return this.getProfileSelected(value).getByRole('img', { name: 'Image de profil' });
  }



}
