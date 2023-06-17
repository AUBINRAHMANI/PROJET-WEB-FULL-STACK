import { test, expect } from '@playwright/test';
import {testUrl} from '../e2e.config';
import {ConnexionFixture} from "src/app/connexion/connexion.fixture";
import {CalibrageFixture} from "src/app/test_de_calibrage/calibrage/calibrage.fixture";


test.describe('Présence de calibrage', () => {
  test('Calibrage jamais effectué', async ({ page }) => {
    await page.goto(testUrl);

    //creation des fixtures
    const connexionFixture = new ConnexionFixture(page);

    await page.waitForSelector('.profil-liste .profil-item span');

    // Cliquer sur le div qui contient "Durcit Pierre"
    await connexionFixture.clickOnProfile("Durcit Pierre");

    // Attendre que l'élément profil-selectionne soit visible
    await page.waitForSelector('.profil-selectionne');

    // Cliquer sur le div profil-selectionne
    await connexionFixture.clickOnSelectedProfile();

    // Vérifier que la balise app-calibrage existe
    const appCalibrageElement = await page.$('app-calibrage');
    expect(appCalibrageElement).not.toBeNull();


  });

  test('Calibrage déjà effectué', async ({ page }) => {
    await page.goto(testUrl);

    //creation des fixtures
    const connexionFixture = new ConnexionFixture(page);

    await page.waitForSelector('.profil-liste .profil-item span');

    // Cliquer sur le div qui contient "Perry Sandra"
    await connexionFixture.clickOnProfile("Perry Sandra");

    // Attendre que l'élément profil-selectionne soit visible
    await page.waitForSelector('.profil-selectionne');

    // Cliquer sur le div profil-selectionne
    await connexionFixture.clickOnSelectedProfile();

    // Vérifier que la balise app-calibrage n'existe pas
    const appCalibrageElement = await page.$('app-calibrage');
    expect(appCalibrageElement).toBeNull();
  });
});

test.describe('Prise en compte du calibrage', () => {
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
    await page.waitForTimeout(30);

    await page.getByRole('button', { name: 'Les capitales' }).click();

  });
});
