describe("Delete a book from the table", () => {
  it("Goes to page, deletes a book", () => {
    cy.visit("http://localhost:3000/").wait(1000);

    // Get original table length
    cy.get("tbody")
      .find("tr")
      .then((elements) => {
        cy.wrap(elements.length).as("oldLength");
      });
    // Delete row from the table
    cy.get("tbody tr")
      .last()
      .within(() => {
        cy.get("td").last().click();
      });
    // Get new table length
    cy.get("tbody")
      .find("tr")
      .then((elements) => {
        cy.wrap(elements.length).as("newLength");
      });
    // Compare old table length to the new one
    cy.get("@oldLength").then((oldLength) => {
      cy.get("@newLength").then((newLength) => {
        expect(newLength).to.be.lessThan(oldLength);
      });
    });
  });
});
