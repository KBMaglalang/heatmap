import { Cookie } from "next-auth/core/lib/cookie";

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

xdescribe("Navigate to User Pages", () => {
  before(() => {
    cy.visit("/api/auth/signin");

    const username = Cypress.env("GOOGLE_USER");
    const password = Cypress.env("GOOGLE_PW");
    const loginUrl = Cypress.env("SITE_NAME");
    const cookieName = Cypress.env("COOKIE_NAME");

    const socialLoginOptions = {
      username,
      password,
      loginUrl,
      headless: false,
      logs: false,
      isPopup: true,
      loginSelector: `[data-test="sign-in-button"]`,
      postLoginSelector: `[data-test="sign-out-button"]`,
    };

    cy.task("GoogleSocialLogin", socialLoginOptions).then(({ cookies }) => {
      cy.clearCookies();

      const cookie = cookies
        .filter((cookie: Cookie) => cookie.name === cookieName)
        .pop();
      if (cookie) {
        cy.setCookie(cookie.name, cookie.value, {
          domain: cookie.domain,
          expiry: cookie.expires,
          httpOnly: cookie.httpOnly,
          path: cookie.path,
          secure: cookie.secure,
        });

        Cypress.Cookies.defaults({
          preserve: cookieName,
        });
      }
    });

    // Wait for the redirect to complete and the new page to load
    cy.visit("/user");
    cy.url().should("include", "/user"); // Replace with the actual URL you expect
  });

  it("user page", () => {
    cy.visit("/user");
    cy.get('[data-test="sign-out-button"]').should("exist");
    cy.url().should("include", "/user");
  });
});
