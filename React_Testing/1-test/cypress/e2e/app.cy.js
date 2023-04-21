// cypress NECESITA que la APP esté corriendo

describe("App", () => {
  // beforeEach hace referencia a que ejecutar antes de CADA prueba.
  // definimos que queremos visitar la página home
  beforeEach(() => {
    // si NO entiende la ruta raiz, le añadimos nosotros la de localhost (como estamos trabajando en desarrollo)
    cy.visit("http://localhost:5173");
  });

  // cypress usa it NO USA test
  it("Should display the title", () => {
    // esto se PARECE a JQUERY
    cy.get("h1").contains("Testing with Jest + Testing Library + Vite");
  });

  it("Check exist button", () => {
    cy.get("button");

    cy.get("button").contains("Increment");
  });
});
