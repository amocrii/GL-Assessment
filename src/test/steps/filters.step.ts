import { Given, When, Then } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import { config } from "../../../config"; 
import { filtersSelectors } from "../../page-objects/filter";

let page!: Page;

Given('The user is on the landing page for the WD site', async function () {
    await page.goto(config.applicationUrl)
})

Then('The Country filter is available', async function () {
    await page.locator(filtersSelectors.country_filters).isVisible()
})

When('The user selects {string} from the {string} filter list on the left panel', async function (filterName, filterType) {
    await page.check(`${filtersSelectors.filter_type(filterType)} ${filtersSelectors.filter_option(filterName)}`)
})

Then('Click on Update button for the {string} filter list', async function (filterType) {
    await page.click(`${filtersSelectors.filter_type(filterType)} ${filtersSelectors.update_button}`)
})

Then('The grid displays all meetings associated with the {string} {string}', async function (filterName, filterType) {
    const headerText = await page.locator(filtersSelectors.column_header).last().textContent()
    expect(headerText?.toLowerCase()).toBe(filterType)

    const cells = await page.locator(`${filtersSelectors.table_rows} td:last-child`).allTextContents()
    for(const cellText of cells) {
        expect(cellText.trim()).toBe(filterName)
    }
})

