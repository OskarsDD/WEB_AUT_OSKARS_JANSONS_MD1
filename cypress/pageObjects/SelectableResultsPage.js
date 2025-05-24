export class SelectableResultsPage {
  static gridItemIsActive(num) {
    return cy
      .get("#gridContainer li")
      .contains(num)
      .should("have.class", "active");
  }

  static gridItemIsNotActive(num) {
    return cy
      .get("#gridContainer li")
      .contains(num)
      .should("not.have.class", "active");
  }
}
