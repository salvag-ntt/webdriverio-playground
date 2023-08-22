import Page from "./page";
import { browser } from "@wdio/globals";

export class ProductCataloguePage extends Page {
  public open(path: string) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }
}

export class ProductCatalogueScreen extends Page {
  public open(path: string) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }
}
