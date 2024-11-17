describe('End-to-End Integration Test', () => {
    it('should load the Main page and navigate to Login', () => {
        cy.visit('http://localhost:5004/');
        cy.contains('help.Ukraine');

        cy.contains('Log in').click();
        cy.url().should('include', 'http://localhost:5004/login');
        cy.contains('Authorize');
    });

    it('should perform a successful login', () => {
        cy.visit('http://localhost:5004/login');
        cy.get('input[placeholder="Nickname"]').type('testuser');
        cy.get('input[placeholder="Password"]').type('testuser');

        cy.contains('Log in').click();

        cy.url().should('eq', 'http://localhost:5004/');
        cy.contains('help.Ukraine');
    });

    it('should perform donation form submission', () => {
        cy.visit('http://localhost:5004/donation/3');

        cy.contains('Bank Transfer').should('be.visible');
        cy.contains('UPI').should('be.visible');

        cy.contains('Account Number').should('be.visible');
        cy.contains('IFSC Code').should('be.visible');
    });
});
