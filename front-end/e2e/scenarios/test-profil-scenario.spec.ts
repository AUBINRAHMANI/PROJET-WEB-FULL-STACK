import { test, expect } from '@playwright/test';
import { testUrl } from '../e2e.config';
import {UserManagementFixture} from "../../src/app/user-management/user-management.fixture";
import {ConnexionFixture} from "../../src/app/connexion/connexion.fixture";
import {AccueilPFixtureil} from "../../src/app/accueil-p/acceuil-p.fixture";


test.describe('Create a new user', () => {
  test('Remplir les champs et cliquer sur Créer', async ({ page }) => {
    await page.goto(testUrl);

    //creation des fixtures
    const userManagementFixture = new UserManagementFixture(page);
    const connexionFixture = new ConnexionFixture(page);
    const accueilPFixture = new AccueilPFixtureil(page);


    //constantes
    const boutonGestion = connexionFixture.getBoutonGestion();
    const verifyContentPage = userManagementFixture.VerifyContentPage();
    const formuser = userManagementFixture.getForm();
    const createBoutton = userManagementFixture.CreateBoutton();
    const profilExist = connexionFixture.verifyProfilExist('Psychomotricien');
    const prolfilSelected = connexionFixture.getProfileSelected('Psychomotricien');
    const profilSelectionneImage = connexionFixture.getProfileSelectedImage('Psychomotricien');
    const clickProfil = connexionFixture.getProfil();
    const BoutonGestion = accueilPFixture.BoutonGestion();
    let mybutton = await page.getByRole('heading', { name: 'Nom : LE BARBARE Prenom : HUZOG Calibrage : Niveau -1 Supprimer' }).getByTestId('supprimer');


      //SELECTIONNER L'ERGOTHERAPEUTE
    await expect(profilExist).toBeVisible();
    await profilExist.click();

    //await expect(boutonGestion).toBeVisible(); //on test si le bouton existe
    //await boutonGestion.click();

    await expect(prolfilSelected).toBeVisible();
    await expect(profilSelectionneImage).toBeVisible();
    await profilSelectionneImage.click();


    //Cliquer sur le bouton Gestion
    await expect(BoutonGestion).toBeVisible();
    await BoutonGestion.click();

    // Attendre 1 seconde
    await page.waitForTimeout(10);

    // Vérifier si la page de gestion des utilisateurs est affichée
    //await expect(page).toHaveURL("http://localhost:8080/user-management");

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
    await page.waitForTimeout(20);

    // Vérifier si la page de gestion des utilisateurs est affichée
    await expect(userManagementFixture.VerifyUserExist('HUZOG')).toBeVisible();

  });

  test('Delete User', async ({ page }) => {

    //creation des fixtures
    const userManagementFixture = new UserManagementFixture(page);
    const connexionFixture = new ConnexionFixture(page);
    const accueilPFixture = new AccueilPFixtureil(page);

    //constantes
    const boutonGestion = connexionFixture.getBoutonGestion();
    const getUserList = await userManagementFixture.getUserList();
    const formuser = userManagementFixture.getForm();
    const createBoutton = userManagementFixture.CreateBoutton();
    const tableauUser = await userManagementFixture.TableauUser();
    const lastButtonDelete = userManagementFixture.LastButtonDelete();
    const profilExist = connexionFixture.verifyProfilExist('Psychomotricien');
    const prolfilSelected = connexionFixture.getProfileSelected('Psychomotricien');
    const profilSelectionneImage = connexionFixture.getProfileSelectedImage('Psychomotricien');
    const clickProfil = connexionFixture.getProfil();
    const BoutonGestion = accueilPFixture.BoutonGestion();


    await page.goto(testUrl);
    //SELECTIONNER L'ERGOTHERAPEUTE
    await expect(profilExist).toBeVisible();
    await profilExist.click();

    //await expect(boutonGestion).toBeVisible(); //on test si le bouton existe
    //await boutonGestion.click();

    await expect(prolfilSelected).toBeVisible();
    await expect(profilSelectionneImage).toBeVisible();
    await profilSelectionneImage.click();

    //On veut atterir sur la gestion Ergo
    //await expect(page).toHaveURL("http://localhost:4200/accueilP");

    //Cliquer sur le bouton Gestion
    await expect(BoutonGestion).toBeVisible();
    await BoutonGestion.click();


    //creation utilisateur
    await userManagementFixture.inputNom('Jean');
    await userManagementFixture.inputPrenom('Rene');
    await expect(createBoutton).toBeVisible();
    await createBoutton.click();

    // Attendre 2 secondes
    await page.waitForTimeout(20);

    //suppression utilisateur

    const utilisateurs = tableauUser;
    console.log('Nombre de utilisateurs:', utilisateurs.length);  // ON VERIFIE SI LE TABLEAU EST VIDE

    if (utilisateurs.length >= 0) {
      const colonnesBefore = await userManagementFixture.getUserList(); // ON RECUPERE LE NOMBRE DE COLONNES AVANT LA SUPPRESSION
      // @ts-ignore
      console.log('Nombre de colonnes:', colonnesBefore.length);

      console.log(lastButtonDelete);
      await lastButtonDelete.click(); // ON CLIQUE SUR LE DERNIER BOUTON DELETE

      const colonnesAfter = await userManagementFixture.getUserList(); // ON RECUPERE LE NOMBRE DE COLONNES APRES LA SUPPRESSION
      // @ts-ignore
      console.log('Nombre de colonnes:', colonnesAfter.length);

      // @ts-ignore
      expect((colonnesAfter.length)).toBe(colonnesBefore.length - 1); // ON VERIFIE LE NOMBRE DE COLONNES APRES LA SUPPRESSION
    }


  });
});
