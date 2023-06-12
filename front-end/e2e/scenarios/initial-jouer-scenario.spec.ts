import { test, expect } from '@playwright/test';
import {testUrl, testUrlGameInstance} from 'e2e/e2e.config';

test.describe('Select Quiz and play', () => {
  test('Basic test', async ({ page }) => {
    await page.goto(testUrlGameInstance);

    await page.waitForSelector('.quiz-item');

    await page.click('.quiz-button >> text="Les capitales"');
    // Cliquer sur le div profil-selectionne
    //await page.click('.profil-selectionne .profil-item');

    await page.waitForNavigation();


    const gameInfo = await page.$('.game-page');
    expect(gameInfo).not.toBeNull();
  });
});
