class RegisterPage{
    getFirstName(){
        return cy.get('#firstName');
    }

    getLastName(){
        return cy.get('#lastName');
    }

    getPhone(){
        return cy.get('#phone');
    }

    getSelectCountry(countryName){
        return cy.get("select").select(countryName);
    }

    getEmail(){
        return cy.get("input[type='email']");
    }

    getPassword(){
        return cy.get("#password");
    }

    getTermsAndConsCheckbox(){
        return cy.get("#exampleCheck1");
    }

    getRegisterBtn(){
        return cy.get('#registerBtn');
    }
}

export default new RegisterPage();
