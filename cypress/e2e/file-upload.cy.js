/// <reference types="cypress" />

import FileUploadPage from "../pages/FileUploadPage";
import LeftSideMenuPage from "../pages/LeftSideMenuPage";

describe('file upload test suite', () => {
    beforeEach(()=>{
        cy.visit('https://qa-practice.netlify.app/');
    });
    
        it('file upload test',()=>{
            const fileName = "logo.png";
            LeftSideMenuPage.getFileUpload().click();
            // cy.get('#file-upload-item').click();
            FileUploadPage.getChooseFile().selectFile('cypress/fixtures/'+fileName);
            // cy.get('input[type=file]').selectFile('cypress/fixtures/'+fileName);
            // cy.get('button').contains('Submit').click();
            FileUploadPage.getSubmitBtn().click();
            cy.contains(`You have successfully uploaded "${fileName}"`).should('be.visible');
        });
    });