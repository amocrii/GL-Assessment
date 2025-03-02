import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber"
import { chromium, Browser, Page, BrowserContext } from "@playwright/test" 

let page: Page;
let browser: Browser;
let context: BrowserContext;

Before(async function () {
    context = await browser.newContext();
    page = await browser.newPage();
})

BeforeAll(async function () {
    browser = await chromium.launch({headless:false});
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