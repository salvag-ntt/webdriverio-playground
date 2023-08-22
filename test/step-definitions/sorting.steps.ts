import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $, $$, browser } from "@wdio/globals";
import targetUrl from "../data/targetUrls.json";

const creds = "consumer-electronics:vfji349qjrcIKD67oefv";

Given(
  "I am on the EE Marketplace - {string} category page",
  async (category) => {
    console.log(`Targeting staging url: ${JSON.stringify(targetUrl)}`);
    console.log(`Targeting staging url: ${targetUrl["local"]}`);
    await browser.url(targetUrl["local"] + "/smart-tech/smart-tech");
    const categoryEl = await $(
      "//*[@data-testid='SubCategoryNavLink-smart-tech']",
    );
    await expect(categoryEl).toExist();
  },
);

const sortingDirectionMap = {
  "high to low": (p1: number, p2: number) => {
    expect(p1).toBeGreaterThanOrEqual(p2);
  },
  "low to high": (p1: number, p2: number) => {
    expect(p1).toBeLessThanOrEqual(p2);
  },
};

let selectedDirection: string;

When("I sort products by price, {}", async (sortingDirection) => {
  selectedDirection = sortingDirection;
  const dropdownControl = await $(".lxp-Dropdown__indicators");

  const dropdownDefault = await (
    await $(".lxp-Dropdown__single-value")
  ).getText();
  console.log("Dropdown default " + dropdownDefault);
  if (dropdownDefault !== "" && dropdownDefault.includes(sortingDirection)) {
    await dropdownControl.click();
    console.log(`//*[contains(text(), '${sortingDirection}')]`);

    const dropdownSortingSelection = await $$(
      `//*[contains(text(), '${sortingDirection}')]`,
    );

    await dropdownSortingSelection.click();
  }
});

Then("I can see products are sorted correctly", async () => {
  const productCardTextContent = await $$(
    '//div[contains(@data-testid,"plp_grid_product")]',
  ).map((el) => {
    return el.getText();
  });

  let prices: number[] = [];
  for (const el of productCardTextContent) {
    const tokens = el.split("£");
    const description = tokens[0].split("\n");
    const price: string = tokens[1].replaceAll("\n", "");
    console.log(`Price = ${price}`);
    prices.push(parseFloat(price));
  }

  for (let i = 1; i < prices.length; i++) {
    console.log(`prices[i-1] >= prices[i]`);
    // await expect(prices[i - 1]).toBeGreaterThanOrEqual(prices[i]);
    sortingDirectionMap[selectedDirection](prices[i - 1], prices[i]);
  }

  //   console.log(productCards)

  //   for (const productCard of productCards) {
  //     const productPrice = await productCard.$(
  //       '//div[contains(@data-testid, "plp_grid_price")]'
  //     );
  //     const price = await productPrice.getText();
  //     console.log(`Product price = ${price}`);
  //   }
  // //   await productCards.forEach(async (productCard) => {
  // //     //console.log(JSON.stringify(productCard, null, 4));
  // //     const productPrice = await productCard.$(
  // //       '//div[contains(@data-testid, "plp_grid_price")]'
  // //     );
  // //     const price = await productPrice.getText();
  // //     console.log(`Product price = ${price}`);
  // //   });

  const categoryEl = await $(
    "//*[@data-testid='SubCategoryNavLink-smart-tech']",
  );
  await expect(categoryEl).toExist();
});
