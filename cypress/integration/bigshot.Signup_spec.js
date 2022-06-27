/// <reference types="Cypress" />

describe("SignUp form validation", ()=>{
    it('displays errors when the form is empty', ()=>{
        cy.visit('http://web-dev.bigshot.ng/')
        cy.contains('Sign Up').click();
        cy.contains("Sign Up").click();

        cy.get('.main_error_message').should('have.text','required');

        // cy.get('#username').should('have.class', 'error');
        // cy.get('_username_labal .error_message').should('have.text', 'enter a username');


        // cy.get('#password').should('have.class', 'error');
        // cy.gert('_password_labal .error_message').should('have.text', 'must be at least 10 characters');
    });
    it('displays no error when the form is valid', ()=>{
        cy.visit('http://web-dev.bigshot.ng/')
        cy.contains('signUp').click();

        // cy.get('#username').type('johnOliver');
        // cy.get('#password').type('Password123@');
        // cy.get('form')
        // .get('input[type="submit"]')
        // .click();

        // cy.get('.error').should('not.exist');
        // cy.get('.error_message').should('not.exist')

    })
})