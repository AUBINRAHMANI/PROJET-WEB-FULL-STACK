import {E2EComponentFixture} from "../../../e2e/e2e-component.fixture";

export class AccueilPFixtureil extends E2EComponentFixture {

  BoutonCreer(){
    return this.page.getByRole(('button'), {name:'Créer un quizz'});
  }


}
