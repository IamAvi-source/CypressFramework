class loginPageModule{
    

    emailField(selector,text)
    {

        cy.TypeInside(selector,text);
    }

    passwordField(selector,text)
    {
        cy.TypeInside(selector,text);
    }

    submitButton(selector)
    {
        cy.ClickElement(selector);
    }

    verifyLogin(selector)
    {
        cy.get(selector).should('be.visible');
    }

}
export default loginPageModule;