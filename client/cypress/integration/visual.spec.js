/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Books List Tests", function () {
  it("Should not match image snapshot", function () {
    cy.visit("http://localhost:3000");
    cy.get("#book_table").matchImageSnapshot("bookTable");
  });
});
