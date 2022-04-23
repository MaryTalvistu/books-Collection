describe("AEdit a book from the table", () => {
  it("Goes to page, edits the book", () => {
    cy.visit("http://localhost:3000/").wait(1000);

    //Click "Edit"
    cy.get("tbody tr")
      .last()
      .within(() => {
        cy.get("td").eq(4).get("a").click();
      });

    // Get unedited name and change it
    cy.get("form")
      .contains("label", "Book Title")
      .parent()
      .find("input")
      .clear()
      .type("Typologies");

    cy.get("button[type=submit]").click();
  });
});
