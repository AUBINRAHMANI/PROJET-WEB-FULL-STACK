import {E2EComponentFixture} from "../../../e2e/e2e-component.fixture";

export class ConnexionFixture extends E2EComponentFixture {

  getBoutonGestion(){
    return this.page.getByTestId('boutonGestion');
  }

  isButtonGestionVisible(){
    return this.getBoutonGestion().isVisible();
  }

  clickOnSelectedProfile(){
    return this.page.click('.profil-selectionne .profil-item');;
  }

  clickOnProfile(string : string){
    return this.page.click('.profil-liste .profil-item >> text='+string);
  }


}
