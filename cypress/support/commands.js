// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import LoginPage from "../pages/LoginPage";

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login',(email,password) => {
    LeftSideMenuPage.getForm().click();
    LeftSideMenuPage.getLoginFormLink().click();
    LoginPage.getEmail().type(email);
    LoginPage.getPassword().type(password);
    LoginPage.getSubmitBtn().click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })