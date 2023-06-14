import { test, expect } from '@playwright/test';
import { testUrl, testUrlGameInstance } from 'e2e/e2e.config';
import {ConnexionFixture} from "../../src/app/connexion/connexion.fixture";
import {CalibrageFixture} from "../../src/app/test_de_calibrage/calibrage/calibrage.fixture";

test.describe('Select Quiz and play', () => {
  test('Basic test', async ({ page }) => {
    await page.goto(testUrl);

    await page.waitForSelector('.profil-liste .profil-item span');

    // Cliquer sur le div qui contient "marry ferry"
    await page.click('.profil-liste .profil-item >> text="Ferry Marry"');

    // Attendre que l'élément profil-selectionne soit visible
    await page.waitForSelector('.profil-selectionne');

    // Cliquer sur le div profil-selectionne
    await page.click('.profil-selectionne .profil-item');

    const gameMenuDiv = await page.$('.game-menu');
    expect(gameMenuDiv).not.toBeNull();

    // Créer un locator pour le bouton qui a le texte "Les Capitales"
    const lesCapitalesButton = page.locator('button >> text="Les Capitales"');

    // Attendre que le bouton soit chargé
    await lesCapitalesButton.waitFor();

    // Effectuer un clic sur le bouton
    await lesCapitalesButton.click();

    // Attendre que l'élément app-game-page soit potentiellement chargé
    await page.waitForSelector('app-game-page');

    // Vérifier si la balise app-game-page existe
    for (let i = 1; i <= 8; i++) {
      const appGamePageElement = await page.$('app-game-page');
      if (appGamePageElement) {
        console.log('La balise app-game-page existe.');

        // Répéter le processus 8 fois

        // Attendre que le premier élément app-game-answer soit chargé
        await page.waitForSelector('app-game-answer');

        // Vérifier si l'élément app-game-answer existe
        const appGameAnswerElement = await page.$('app-game-answer');
        if (appGameAnswerElement) {
          console.log(`L'élément app-game-answer existe. (itération ${i})`);

          // Cliquer sur le premier élément app-game-answer
          await page.click('app-game-answer');

          console.log(`Clic effectué sur le premier élément app-game-answer. (itération ${i})`);
        } else {
          console.log(`L'élément app-game-answer n'existe pas. (itération ${i})`);
        }
      } else {
        console.log('La balise app-game-page n\'existe pas.');
      }
    }
    const lretour = page.locator('button >> text="Retour à la page de Connexion"');

    // Attendre que le bouton soit chargé
    await lretour.waitFor();

    // Effectuer un clic sur le bouton
    await lretour.click();
  });
});

test.describe('Jeu et prise en compte du calibrage', () => {
  test('Calibrage jamais effectué', async ({ page }) => {
    await page.goto(testUrl);

    //creation des fixtures
    const connexionFixture = new ConnexionFixture(page);
    const calibrageFixture = new CalibrageFixture(page);


    await page.waitForSelector('.profil-liste .profil-item span');

    // Cliquer sur le div qui contient "Durcit Pierre"
    await connexionFixture.clickOnProfile("Durcit Pierre");

    // Attendre que l'élément profil-selectionne soit visible
    await page.waitForSelector('.profil-selectionne');

    // Cliquer sur le div profil-selectionne
    await connexionFixture.clickOnSelectedProfile();

    // Cliquer sur le bouton calibrage niveau 5
    await calibrageFixture.clickBoutonCalibrage(5);
    await page.waitForTimeout(30);

    // Cliquer sur le bouton calibrage niveau 4
    await calibrageFixture.clickBoutonCalibrage(4);
    await page.waitForTimeout(30);

    // Cliquer sur le bouton calibrage niveau 3
    await calibrageFixture.clickBoutonCalibrage(3);
    await page.waitForTimeout(30);

    // Cliquer sur le bouton calibrage niveau 2
    await calibrageFixture.clickBoutonCalibrage(2);
    await page.waitForTimeout(30);

    // Cliquer en dehors du bouton niveau 1
    await page.getByText('Test de Calibrage niveau 1Faites un clic dans les boutons pour faire le test de ').click();
    await page.getByRole('button', { name: 'Devine la bonne langue' }).click();

    // Vérifier si la balise app-game-page existe
    for (let i = 1; i <= 4; i++) {
      const appGamePageElement = await page.$('app-game-page');
      if (appGamePageElement) {
        console.log('La balise app-game-page existe.');

        // Vérifier si l'élément app-game-answer existe
        const appGameAnswerElement = await page.$('app-game-answer');
        if (appGameAnswerElement) {
          console.log(`L'élément app-game-answer existe. (itération ${i})`);

          // Cliquer sur le premier élément app-game-answer
          await page.click('app-game-answer');

          console.log(`Clic effectué sur le premier élément app-game-answer. (itération ${i})`);
        } else {
          console.log(`L'élément app-game-answer n'existe pas. (itération ${i})`);
        }
      } else {
        console.log('La balise app-game-page n\'existe pas.');
      }
    }
    //const lretour = page.locator('button >> text="Retour à la page de Connexion"');

    // Attendre que le bouton soit chargé

    // Effectuer un clic sur le bouton
    //await lretour.click();

  });
});
