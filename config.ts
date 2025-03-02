import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const config = {
  applicationUrl: process.env.APPLICATION_URL || 'https://viewpoint.glasslewis.com/WD/?siteId=DemoClient',
  browser: process.env.BROWSER || 'chromium', 
  headless: process.env.HEADLESS === 'true',
};