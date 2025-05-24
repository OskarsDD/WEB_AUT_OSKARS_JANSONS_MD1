import { SelectablePage } from "../pageObjects/SelectablePage";
import { SelectableResultsPage } from "../pageObjects/SelectableResultsPage";
describe("Selectable Grid Interaction", () => {
  context("Grid mode selection", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("should highlight even numbers and leave odd numbers unselected", () => {
      SelectablePage.gridTab().click();

      // Uzspiež uz pāra skaitļiem
      SelectablePage.gridItems("Two").click();
      SelectablePage.gridItems("Four").click();
      SelectablePage.gridItems("Six").click();
      SelectablePage.gridItems("Eight").click();

      // Pārbauda vai pāra skaitļi IR aktīvi
      SelectableResultsPage.gridItemIsActive("Two");
      SelectableResultsPage.gridItemIsActive("Four");
      SelectableResultsPage.gridItemIsActive("Six");
      SelectableResultsPage.gridItemIsActive("Eight");

      // Pārbauda vai nepāra skaitļi NAV aktīvi
      SelectableResultsPage.gridItemIsNotActive("One");
      SelectableResultsPage.gridItemIsNotActive("Three");
      SelectableResultsPage.gridItemIsNotActive("Five");
      SelectableResultsPage.gridItemIsNotActive("Seven");
      SelectableResultsPage.gridItemIsNotActive("Nine");
    });
  });
});
