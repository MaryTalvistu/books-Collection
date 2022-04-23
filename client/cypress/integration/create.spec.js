describe("Add a new book to the table", () => {
  it("Goes to page, adds a new book", () => {
    cy.visit("http://localhost:3000/").wait(1000);

    //Click "+Add Book"
    cy.get("#add_book").click();
    cy.url().should("contains", "http://localhost:3000/add");

    //Fill the form
    cy.get("form")
      .contains("label", "Book Title")
      .parent()
      .find("input")
      .type("Memories");

    cy.get("form")
      .contains("label", "Author")
      .parent()
      .find("input")
      .type("Abraka Dabra");

    cy.get("form").contains("label", "Price").parent().find("input").type("29");

    cy.get("select").select("Fantasy");

    //Submit
    cy.get("button[type=submit]").click();

    //Check
    cy.visit("http://localhost:3000/");
    cy.get("tbody tr")
      .last()
      .within(() => {
        cy.get("td").first().contains("Memories");
      });
  });
});
