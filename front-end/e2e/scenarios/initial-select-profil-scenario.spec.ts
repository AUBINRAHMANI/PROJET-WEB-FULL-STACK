import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';

test.describe('Select Profil test display', () => {
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
  });
});
