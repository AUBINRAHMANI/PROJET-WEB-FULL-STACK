import { test, expect } from '@playwright/test';
import {testUrl} from '../e2e.config';
import {ConnexionFixture} from "../../src/app/connexion/connexion.fixture";


test.describe('Présence de calibrage', () => {
  test('Calibrage jamais effectué', async ({ page }) => {
    await page.goto(testUrl);

    //creation des fixtures
    const connexionFixture = new ConnexionFixture(page);

    await page.waitForSelector('.profil-liste .profil-item span');

    // Cliquer sur le div qui contient "Durcit Pierre"
    await page.click('.profil-liste .profil-item >> text="Durcit Pierre"');

    // Attendre que l'élément profil-selectionne soit visible
    await page.waitForSelector('.profil-selectionne');

    // Cliquer sur le div profil-selectionne
    await page.click('.profil-selectionne .profil-item');;

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
    await page.click('.profil-liste .profil-item >> text="Perry Sandra"');

    // Attendre que l'élément profil-selectionne soit visible
    await page.waitForSelector('.profil-selectionne');

    // Cliquer sur le div profil-selectionne
    await page.click('.profil-selectionne .profil-item');

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

    await page.waitForSelector('.profil-liste .profil-item span');

    // Cliquer sur le div qui contient "Durcit Pierre"
    await page.click('.profil-liste .profil-item >> text="Durcit Pierre"');

    // Attendre que l'élément profil-selectionne soit visible
    await page.waitForSelector('.profil-selectionne');

    // Cliquer sur le div profil-selectionne
    await page.click('.profil-selectionne .profil-item');;

    // Cliquer sur le bouton "Calibrer"
    await page.click('.calibrage-bouton');

    // Attendre que l'élément app-calibrage soit visible
    await page.waitForSelector('app-calibrage');



  });
});
