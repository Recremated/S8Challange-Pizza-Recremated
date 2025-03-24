describe("Order Pizza Page", () => {
  beforeEach(() => {
    // Visit the order pizza page (assuming it's running on localhost:3000)
    cy.visit("http://localhost:5173/OrderPizza");
  });

  it("should load the pizza order page correctly", () => {
    // Check if the title is rendered
    cy.contains("Position Absolute Acı Pizza").should("exist");

    // Check if the default price is shown
    cy.contains("85.50₺").should("exist");
  });
});
