describe("Post Resource", () => {
  it("Creating a New Post", () => {
    cy.visit("https://www.example.com/posts/new");

    cy.get("input.post_title")
      .find("p.post_body")
      .invoke("text")
      .then((post_text) => {
        // locate a string with regex...
        if (post_text.includes("content:")) {
          let pattern = /content:.*/;
          let content = pattern.exec(post_text)[0].replace("content: ", "");
          // ...then append it to a file
          cy.writeFile("cypress/fixtures/content.json", content, {
            flag: "a+",
          });
        }
      });
  });
});
