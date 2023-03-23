describe("Post Resource", () => {
  it("Creating a New Post", () => {
    cy.visit("https://www.example.com/posts/new"); // 1.

    cy.get("input.post-title") // 2.
      .type("My First Post"); // 3.

    cy.get("input.post-body") // 4.
      .type("Hello, world!"); // 5.

    cy.contains("Submit") // 6.
      .click(); // 7.

    cy.get("h1") // 8.
      .should("contain", "My First Post");
  });
});
