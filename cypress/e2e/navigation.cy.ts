describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // render check
  it("should check the page loads", () => {
    cy.contains(/ConsistChart/i);
  });

  it("should check the navigation works", () => {
    // about page
    cy.get('[data-test="header-about"]').click();
    cy.get('[data-test="about-header"]').contains(/About ConsistChart/i);
    cy.url().should("include", "/about");

    // homepage through the logo
    cy.get('[data-test="header-logo"]').click();
    cy.get('[data-test="hero-title"]').contains(/Visualize Progress/i);
    cy.url().should("include", "/");

    // contact page
    cy.get('[data-test="header-contact"]').click();
    cy.get('[data-test="contact-header"]').contains(
      /Reach Out to ConsistChart/i
    );
    cy.url().should("include", "/contact");

    // homepage through home button
    cy.get('[data-test="header-home"]').click();
    cy.get('[data-test="hero-title"]').contains(/Visualize Progress/i);
    cy.url().should("include", "/");
  });

  it("should check hero learn more button works", () => {
    cy.get('[data-test="hero-learn-more"]').click();
    cy.get('[data-test="about-header"]').contains(/About ConsistChart/i);
    cy.url().should("include", "/about");
  });
});
