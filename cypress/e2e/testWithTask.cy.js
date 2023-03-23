describe("should demonstrate a task()", function () {
  it("Starts Sample Connector", () => {
    cy.wait(5000);
    cy.task("runSampleConnector");
  });
});
