import { test, expect } from '@playwright/test';
import { testUrl } from '../e2e.config';
import {ConnexionFixture} from "../../src/app/connexion/connexion.fixture";
import {AccueilPFixtureil} from "../../src/app/accueil-p/acceuil-p.fixture";
import {CreerQuizzFixture} from "../../src/app/creer-quizz/creer-quizz.fixture";

test.describe('Creation de test', () => {
  test('Selection profil + creer quizz', async ({ page }) => {

    await page.goto(testUrl);

    //creation des fixtures
    const connexionFixture = new ConnexionFixture(page);
    const acceuilFixture = new AccueilPFixtureil(page);
      const creerQuizzFixture = new CreerQuizzFixture(page);

    //constantes
    const verifyProfilExist = connexionFixture.verifyProfilExist("Ergothérapeute");
    const profil = connexionFixture.getProfil();
    const profilSelectionne = connexionFixture.getProfileSelected('Ergothérapeute');
    const profilSelectionneImage = connexionFixture.getProfileSelectedImage('Ergothérapeute');
    const boutonCreerQuizz = acceuilFixture.BoutonCreer();
    const boutonCreer = creerQuizzFixture.ButtonCreate();



    //on verifie si l'ergotherapeute existe
    await expect(verifyProfilExist).toBeVisible();

    // Cliquer sur le div qui contient "marry ferry"
    await profil.first().click();

    //verifier que le profil s'affiche bien en haut
    await expect(profilSelectionne).toBeVisible();
    await expect(profilSelectionneImage).toBeVisible();

    // Cliquer sur le div profil-selectionne
    await profilSelectionneImage.click();

    //verifier s'il est visible puis cliquer dessus
    await expect(boutonCreerQuizz).toBeVisible();
    await boutonCreerQuizz.click();

    //verifier si on est bien sur la page de creation de quizz
    await expect(page).toHaveURL("http://localhost:4200/createQuizz");

    //on remplie le formulaire

    await creerQuizzFixture.inputTitle('Quizz de test');
    await creerQuizzFixture.inputTheme('Test');
    await creerQuizzFixture.inputQuestion('Question de test');

    //on verifie qu'il existe le bouton creer
    await expect(boutonCreer).toBeVisible();
    await boutonCreer.click();





    });
});
