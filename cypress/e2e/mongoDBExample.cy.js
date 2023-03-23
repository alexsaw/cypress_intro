describe("Post Resource", () => {
  it("Creating a New Post", () => {
    cy.visit("https://www.example.com/posts/new");

    cy.get("input.post_title")
      .find("p.post_body")
      .invoke("text")
      .then((post_text) => {
        // insert record object to your MongoDB collection
        let record = { post: post_text };

        cy.insertOne(record, {
          database: "some_database",
          collection: "some_collection",
        }).then((response) => {
          cy.log(response);
        });
      });
  });
});
