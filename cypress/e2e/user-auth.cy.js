/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import RegisterPage from "../pages/RegisterPage";

describe("user auth test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app/");
  });

  it("login with valid credentials", () => {
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
    cy.login('admin@admin.com','parolagresita');
    cy.get("#message").should("be.visible");
    cy.get("#message").should("contain", "Bad credentials!"); // comanda 1

    cy.contains(
      "Bad credentials! Please try again! Make sure that you've registered."
    ).should("be.visible"); // asta este o varianta la comanda 1
  });

  it("register user", () => {
    const randomLastName = faker.person.lastName();

    LeftSideMenuPage.getForm().click();
    LeftSideMenuPage.getRegisterFormLink().click();
    RegisterPage.getFirstName().type(faker.person.firstName());
    RegisterPage.getLastName().type(randomLastName);
    RegisterPage.getPhone().type("0722000123");
    RegisterPage.getSelectCountry('Australia');
    RegisterPage.getEmail().type(
      faker.internet.email({ firstName: "matei", lastName: randomLastName })
    );
    RegisterPage.getPassword().type("test123");
    RegisterPage.getTermsAndConsCheckbox().click();
    RegisterPage.getRegisterBtn().click();
    cy.get("#message").should(
      "contain",
      "The account has been successfully created!"
    );
  });
});
