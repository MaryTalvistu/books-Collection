describe("Check initial state", () => {
  it("Goes to page, checks for list of books", () => {
    cy.visit("http://localhost:3000/").wait(1000);

    //Table columns exist on home page
    cy.get("#title").should("be.visible");
    cy.get("#author").should("be.visible");
    cy.get("#category").should("be.visible");
    cy.get("#price").should("be.visible");
    cy.get("#actions").should("be.visible");

    //A book excists in the table
    cy.contains("Memories").parent("#book");
    cy.contains("Abraka Dabra").parent("#book");
    cy.contains("Fantasy").parent("#book");
    cy.contains("29").parent("#book");
  });
});
