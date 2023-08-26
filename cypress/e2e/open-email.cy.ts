describe("Email Button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard"); // Put the URL of your app here
    cy.viewport(1920, 955);
  });

  it("should contain correct mailto link", () => {
    // cy.get("nav").contains("Support").should("be.visible").click()
    cy.get("nav")
      .contains("Support")
      .should("have.attr", "href")
      .and("equal", "mailto:support@prolog-app.com?subject=Support%20Request:");
  });

  // it("should open default mail application when clicked", () => {
  //   cy.get("nav").contains("Support").click();
  //   cy.contains("Support")
  //     .should("have.attr", "href")
  //     .and("equal", "mailto:test@email.com");
  // });
});
