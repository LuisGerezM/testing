describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Should display the title", () => {
    cy.get("h1").contains("Testing with Jest + Testing Library + Vite");
  });

  it("Check exist button", () => {
    cy.get("button");

    cy.get("button").contains("Increment");
  });
});
