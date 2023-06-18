import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  reporter: [
    ['html', { open: 'always' }],
    ['json', { outputFile: 'test-results/report.json' }],
  ],
  use: {
    headless: true,
    viewport: { width: 1200, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retry-with-video',
    screenshot: 'only-on-failure',
    launchOptions: {
      slowMo: 1000,
    }
  },
  timeout: 120000 // Ajout d'un délai d'attente de 60 secondes
};

export default config;
