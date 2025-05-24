import { BasePage } from "./basePage";
export class SelectablePage extends BasePage {
  static gridTab() {
    return cy.get("#demo-tab-grid");
  }
  static gridItems(num) {
    return cy.get("#gridContainer li").contains(num);
  }
}
// #demo-tabpane-grid
