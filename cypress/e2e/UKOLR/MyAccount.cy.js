/// <reference types="cypress" />

describe('My Account login and dashboard Test', () => {

  it('myaccount login and dashboard test', () => {
    // Visit the URL
    cy.visit('https://www.myaccount.uat.test.athome.domgentest.cloud/');
    cy.wait(5000); 

    cy.get('#onetrust-accept-btn-handler', { timeout: 30000 }) 
    .should('exist') 
    .click();

    // Input value into the email input field
    cy.get('input[data-cy="text"][type="email"]', { timeout: 30000 })
    .should('exist')
    .type('dngtest2386+0115032023@gmail.com');

    // Decode the Base64 encoded password and input it into the password field
    const encodedPassword = 'VGVzdDEyMzQ='; 
    const decodedPassword = atob(encodedPassword);

    cy.get('input[data-cy="text"][type="password"]', { timeout: 30000 })
    .should('exist')
    .type(decodedPassword, { force: true });
  
    // Click on the "Log in to My Account" button
    cy.get('button.button--primary[type="submit"]', { timeout: 30000 })
      .should('exist')
      .click({ force: true });
        
    // Wait for the "Add appliances" button for a maximum of 60 seconds
    cy.get('a.button--primary-inverted.button--fill.button--icon', { timeout: 60000 })
    .should('exist');

    // Click on the "Your details" link
    cy.get('a[dgxtesthook="header-navigation__list-item-link"]', { timeout: 30000 })
    .contains('Your details')
    .should('exist')
    .click();

    // Wait for the "Password" title for a maximum of 30 seconds
    cy.get('h4.title', { timeout: 30000 })
    .contains('Password')
    .should('exist');
      
    // Click on the "Log out" element
    cy.get('div[dgxtesthook="header-navigation__list-item-link"]', { timeout: 30000 })
    .should('exist')
    .click();

    // Wait for the "Log In" button for a maximum of 30 seconds
    cy.get('button.btn--secondary.upsell-btn[data-automation="Log In"]', { timeout: 30000 })
    .should('exist');


  });
  

});