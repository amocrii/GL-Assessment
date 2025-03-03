import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber"
import { chromium, firefox, webkit, Browser, Page, BrowserContext } from "@playwright/test" 
import { config } from "../../config";

let page: Page;
let browser: Browser;
let context: BrowserContext;

Before(async function () {
    context = await browser.newContext();
    page = await browser.newPage();
})

BeforeAll(async function () {
    let browserLauncher;

    switch (config.browser) {
        case 'firefox':
          browserLauncher = firefox;
          break;
        case 'webkit':
          browserLauncher = webkit;
          break;
        case 'chromium':
        default:
          browserLauncher = chromium;
          break;
    }
    browser = await browserLauncher.launch({ headless: config.headless });
})

After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await page.screenshot({ path: `screenshots/${scenario.pickle.name}.png` });
        this.attach(screenshot, 'image/png');
    }

    await page.close();
    await context.close()
})

AfterAll(async function () {
    await browser.close();
})