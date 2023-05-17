class LeftSideMenuPage{
    getForm(){
        return cy.get('#forms');
    }

    getTables(){
        return cy.get('a[href="#tables"]');
    }

    getFileUpload(){
        return cy.get('#file-upload-item');
    }

    getLoginFormLink(){
        return cy.get('a[href="login.html"]');
    }

    getRegisterFormLink(){
        return cy.get('#register');
    }
}

export default new LeftSideMenuPage();
