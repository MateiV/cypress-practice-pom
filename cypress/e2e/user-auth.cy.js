/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("user auth test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app/");
  });

  it("login with valid credentials", () => {
    // cy.get("#forms").click();
    // cy.get('a[href="login.html"]').click();
    // cy.get("#email").type("admin@admin.com");
    // cy.get("#password").type("admin123");
    // cy.get("#submitLoginBtn").click();
    cy.login('admin@admin.com','admin123');
    cy.get("#message").should("be.visible");
    cy.get("#message").should(
      "contain",
      "admin@admin.com, you have successfully logged in!"
    ); // comanda 1

    cy.contains("admin@admin.com, you have successfully logged in!").should(
      "be.visible"
    ); // asta este o varianta la comanda 1
  });

  it("login with invalid credentials", () => {
    // cy.get("#forms").click();
    // cy.get('a[href="login.html"]').click();
    // cy.get("#email").type("admin@admin.com");
    // cy.get("#password").type("admin1233!!");
    // cy.get("#submitLoginBtn").click();
    cy.login('admin@admin.com','parolagresita');
    cy.get("#message").should("be.visible");
    cy.get("#message").should("contain", "Bad credentials!"); // comanda 1

    cy.contains(
      "Bad credentials! Please try again! Make sure that you've registered."
    ).should("be.visible"); // asta este o varianta la comanda 1
  });

  it("register user", () => {
    const randomLastName = faker.person.lastName();

    cy.get("#forms").click();
    cy.get("#register").click();
    cy.get("#firstName").type(faker.person.firstName());
    cy.get("#lastName").type(randomLastName);
    cy.get("#phone").type("0722000123");
    cy.get("#countries_dropdown_menu").select("Romania");
    cy.get("#emailAddress").type(
      faker.internet.email({ firstName: "matei", lastName: randomLastName })
    );
    cy.get("#password").type("test123");
    cy.get("#exampleCheck1").click();
    cy.get("#registerBtn").click();
    cy.get("#message").should(
      "contain",
      "The account has been successfully created!"
    );
  });
});
