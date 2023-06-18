import {E2EComponentFixture} from "../../../e2e/e2e-component.fixture";

export class CreerQuizzFixture extends E2EComponentFixture {

  CreationQuizz(){
    return this.page.getByTestId('CreerQuiz');
  }

  inputTitle(value : string){
    return this.page.fill('input[id="name"]', value);
  }

  inputTheme(value: string){
    return this.page.fill('input[id="theme"]', value);
  }

  inputQuestion(value: string){
    return this.page.fill('input[id="question"]', value);
  }

  ButtonCreate(){
    return this.page.getByRole('button', { name: 'Creer' });
  }

  ButtonRetour(){
    return this.page.getByRole('button', { name: 'Retour' });
  }




}
