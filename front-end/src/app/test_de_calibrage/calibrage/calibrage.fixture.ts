import {E2EComponentFixture} from "../../../../e2e/e2e-component.fixture";


export class CalibrageFixture extends E2EComponentFixture {

  getBoutonCalibrage(){
    return this.page.getByTestId('bouton-calibrage');
  }

  clickBoutonCalibrage(index : number){
    return this.page.getByRole('button', { name: index.toString() }).click();
  }

  isButtonCalibrageVisible(){
    return this.getBoutonCalibrage().isVisible();
  }


}
