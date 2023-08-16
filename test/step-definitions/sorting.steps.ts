import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $, $$, browser } from "@wdio/globals";

Given("I am on the EE Marketplace - {string} category page", async (category) => {
    await browser.url("https://consumer-electronics:vfji349qjrcIKD67oefv@webaem-staging-integration.ps.intdigital.ee.co.uk/exp/consumer-electronics/smart-tech/smart-tech")
    const categoryEl = await $("//*[@data-testid='SubCategoryNavLink-smart-tech']");
    await expect(categoryEl).toExist();
});

When("I sort products by price, lower to higher", () => {

});

Then("I can see products are sorted correctly", () => {

});
