import { Given, When, Then } from "@cucumber/cucumber";
import { expect, Page, Response } from "@playwright/test";
import { config } from "../../../config"; 
import { searchSelectors } from "../../page-objects/search";

let page: Page

When('The user searches for the company {string} in the top right search bar', async function (searchCriteria) {
    await this.page.click(searchSelectors.searchbox)
    await this.page.fill(searchSelectors.searchbox, searchCriteria)
});

When('The user clicks on the Company Name hyperlink from the search results', async function () {
    await this.page.click(searchSelectors.dropdown_list_option)
});

Then('The user lands on the {string} vote card page.', async function (searchCriteria) {
    const response = await this.page.waitForResponse((response: Response) => 
        response.url().includes('/GetLatestMeetingDetails')
    )

        const requestUrl = new URL(response.url())

        const capturedSecurityId = requestUrl.searchParams.get('securityId')

        const currentUrl = new URL(this.page.url())

        const securityIdInPageUrl = currentUrl.searchParams.get('securityId')

        expect(securityIdInPageUrl).toBe(capturedSecurityId)
});

Then('{string} should appear in the top banner.', async function (searchCriteria) {
    const banner_text = await this.page.locator(searchSelectors.top_banner_text).textContent()

    expect(banner_text?.trim()).toBe(searchCriteria)
});