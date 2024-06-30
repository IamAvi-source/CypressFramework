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
// Cypress.Commands.add('login', (email, password) => { ... })
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

const { should } = require("chai")


// Author: Avinash Bhalerao
 // Date  : 09/06/2024
Cypress.Commands.add('login', (emailField,email,passwordField,password,submitButton) => {

   
        cy.get(emailField).clear().type(email)
        cy.get(passwordField).clear().type(password)
        cy.get(submitButton).click()
        

 })

 // Author: Avinash Bhalerao
 // Date  : 09/06/2024
 Cypress.Commands.add('getFrame',(iframe,element)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body').find(element)
    .should('be.visible')
    .then(cy.wrap)

 })

 // Author: Avinash Bhalerao
 // Date  : 09/06/2024
 Cypress.Commands.add('ClickElement',(element)=>{

    cy.get(element).should('be.visible').click();

 })

 // Author: Avinash Bhalerao
 // Date  : 09/06/2024
 Cypress.Commands.add('TypeInside',(element,text)=>{

   cy.get(element).type(text)

})

// Author: Avinash Bhalerao
 // Date  : 09/06/2024
 Cypress.Commands.add('launchUrl',(url)=>{

   cy.visit(url);

})

Cypress.Commands.add('isVisible',(selector)=>{

   cy.get(selector),should('be.visible');
})



