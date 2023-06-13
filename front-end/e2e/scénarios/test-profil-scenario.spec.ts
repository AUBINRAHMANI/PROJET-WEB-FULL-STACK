import { test, expect } from '@playwright/test';
import { testUrl } from '../e2e.config';
import {UserManagementFixture} from "../../src/app/user-management/user-management.fixture";
import {ConnexionFixture} from "../../src/app/connexion/connexion.fixture";



test.describe('Create a new user', () => {
  test('Remplir les champs et cliquer sur Créer', async ({ page }) => {
    await page.goto(testUrl);


    //creation des fixtures
    const userManagementFixture = new UserManagementFixture(page);
    const connexionFixture = new ConnexionFixture(page);




    //constantes
    const boutonGestion = connexionFixture.getBoutonGestion();
    const getUserList = userManagementFixture.getUserList();
    const verifyContentPage = userManagementFixture.VerifyContentPage();
    const formuser = userManagementFixture.getForm();
    const createBoutton = userManagementFixture.CreateBoutton();



    await expect(boutonGestion).toBeVisible(); //on test si le bouton existe
    await boutonGestion.click();


    await page.waitForTimeout(1000);

    // Vérifier si la page de gestion des utilisateurs est affichée
    await expect(page).toHaveURL("http://localhost:4200/user-management");

    //Verifier si le form est affiché
    await expect(formuser).toBeVisible();
    await expect(userManagementFixture.VerifyUserExist('LE BARBARE')).not.toBeVisible();

    // Remplir les champs
    await userManagementFixture.inputNom('LE BARBARE');
    await userManagementFixture.inputPrenom('HUZOG');

    // Cliquer sur le bouton Créer
    await expect(createBoutton).toBeVisible();
    await createBoutton.click();

    // Attendre 2 secondes
    await page.waitForTimeout(2000);

    // Vérifier si la page de gestion des utilisateurs est affichée
    await expect(userManagementFixture.VerifyUserExist('HUZOG')).toBeVisible();

  });

  test('Delete User', async ({ page }) => {

    //creation des fictures
    const userManagementFixture = new UserManagementFixture(page);

    //constantes
    const getUserList = userManagementFixture.getUserList;

    await page.goto(testUrl);
    //const boutonGestion = await page.$('.boutonGestion');
    const boutonGestion = await page.getByTestId('boutonGestion');
    await expect(boutonGestion).toBeVisible(); //on test si le bouton existe
    await boutonGestion.click();

    //creation utilisateur
    await page.fill('input[id="nom"]', 'Jean');
    await page.fill('input[id="prenom"]', 'Rene');
    const boutonCreer = await page.getByRole('button', { name: 'Créer' });
    await expect(boutonCreer).toBeVisible();
    await boutonCreer.click();

    // Attendre 2 secondes
    await page.waitForTimeout(2000);

    //suppression utilisateur
    /* const boutonSupprimer = await page.getByRole('button', { name: 'Supprimer' });
    await expect(boutonSupprimer).toBeVisible();
    await boutonSupprimer.click();

    await expect(page.getByText('Rene')).not.toBeVisible(); */

    const utilisateurs = await page.$$('.utilisateur');
    console.log('Nombre de utilisateurs:', utilisateurs.length);

    if (utilisateurs.length > 0) {
      const colonnesBefore = getUserList;
      console.log('Nombre de colonnes:', colonnesBefore.length);
      await page.locator('button.delete-user').last().click();
      const colonnesAfter = getUserList;
      console.log('Nombre de colonnes:', colonnesAfter.length);
      expect((colonnesAfter.length)).toBe(colonnesBefore.length - 1);
    }
    //QUESTION COMMENT VOIR MES LOGS ET PK CA MARCHE PAS MONN TRU C QUI COMPTE LES COLONNES


  });
});
