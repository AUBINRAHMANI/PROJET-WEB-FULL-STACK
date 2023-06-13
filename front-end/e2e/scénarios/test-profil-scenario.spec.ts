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

    //creation des fixtures
    const userManagementFixture = new UserManagementFixture(page);
    const connexionFixture = new ConnexionFixture(page);

    //constantes
    const boutonGestion = connexionFixture.getBoutonGestion();
    const getUserList = userManagementFixture.getUserList();
    const verifyContentPage = userManagementFixture.VerifyContentPage();
    const formuser = userManagementFixture.getForm();
    const createBoutton = userManagementFixture.CreateBoutton();
    const tableauUser = userManagementFixture.TableauUser();
    const buttonDelete = userManagementFixture.ButtonDelete();
    const lastButtonDelete = userManagementFixture.LastButtonDelete();

    await page.goto(testUrl);
    //const boutonGestion = await page.$('.boutonGestion');
    await expect(boutonGestion).toBeVisible(); //on test si le bouton existe
    await boutonGestion.click();

    //creation utilisateur
    await userManagementFixture.inputNom('Jean');
    await userManagementFixture.inputPrenom('Rene');
    await expect(createBoutton).toBeVisible();
    await createBoutton.click();

    // Attendre 2 secondes
    await page.waitForTimeout(2000);

    //suppression utilisateur

    const utilisateurs = await tableauUser;
    console.log('Nombre de utilisateurs:', utilisateurs.length);  // ON VERIFIE SI LE TABLEAU EST VIDE

    if (utilisateurs.length > 0) {
      const colonnesBefore = await getUserList; // ON RECUPERE LE NOMBRE DE COLONNES AVANT LA SUPPRESSION
      console.log('Nombre de colonnes:', colonnesBefore.length);

      console.log(lastButtonDelete);
      await lastButtonDelete.click(); // ON CLIQUE SUR LE DERNIER BOUTON DELETE

      const colonnesAfter = await getUserList; // ON RECUPERE LE NOMBRE DE COLONNES APRES LA SUPPRESSION
      console.log('Nombre de colonnes:', colonnesAfter.length);

      expect((colonnesAfter.length)).toBe(colonnesBefore.length - 1); // ON VERIFIE LE NOMBRE DE COLONNES APRES LA SUPPRESSION
    }


  });
});
