import { test, expect } from '@playwright/test';
import { testUrl } from '../e2e.config';

test.describe('Create a new user', () => {
  test('Remplir les champs et cliquer sur Créer', async ({ page }) => {
    await page.goto(testUrl);
    //const boutonGestion = await page.$('.boutonGestion');
    const boutonGestion = await page.getByTestId('boutonGestion');
    await expect(boutonGestion).toBeVisible(); //on test si le bouton existe
    await boutonGestion.click();


    await page.waitForTimeout(1000);

    // Vérifier si la page de gestion des utilisateurs est affichée
    const pageGestionUtilisateurs = await page.$('#Connexion');
    expect(pageGestionUtilisateurs).not.toBeNull();

    //Verifier si le form est affiché
   //const form = await page.getByRole('form', { name: 'form' });
    const form = await page.locator('css=form');
    await expect(form).toBeVisible();

    // Remplir les champs
    await page.fill('input[id="nom"]', 'Huzog');
    await page.fill('input[id="prenom"]', 'LE BARBARE');

    // Cliquer sur le bouton Créer
    const boutonCreer = await page.getByRole('button', { name: 'Créer' });
    await expect(boutonCreer).toBeVisible();
    await boutonCreer.click();

    // Attendre 2 secondes
    await page.waitForTimeout(2000);

    // Vérifier si la page de gestion des utilisateurs est affichée
    await expect(page.getByText('LE BARBARE')).toBeVisible();


  });

  test('Delete User', async ({ page }) => {
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
      const premiereUtilisateur = utilisateurs[0];
      const colonnes = await premiereUtilisateur.$$('profil')
      console.log('Nombre de colonnes:', colonnes.length);
      await page.locator('button.delete-user').last().click();
      expect((await premiereUtilisateur.$$('profil')).length).toBe(colonnes.length - 1);


      console.log('Nombre de colonnes:', colonnes.length);
    } else {
      console.log('Aucun utilisateur trouvé');
    }

    //QUESTION COMMENT VOIR MES LOGS ET PK CA MARCHE PAS MONN TRUC QUI COMPTE LES COLONNES





  });
});
