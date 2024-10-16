/// <reference types="cypress" />

describe('Register Appliance Page Test', () => {

  it('Registration only for Beko OLR journey', () => {
    // Visit the URL
    cy.visit('/');
    cy.wait(5000); 

    cy.get('#onetrust-accept-btn-handler', { timeout: 30000 }) 
    .should('exist') 
    .click();

     // Click on the radio button
     cy.get('label[data-cy="radio-label__DW"]', { timeout: 30000 })
     .should('exist')
     .click();

     cy.wait(3000); 
    // Click on the radio button with data-cy="radio-label__DW"
    cy.get('label[data-cy="radio-label__DW"]', { timeout: 30000 })
      .should('exist')
      .first()
      .click();

    // Click on the radio button with data-cy="radio-label__true"
    cy.get('label[data-cy="radio-label__true"]')
    .should('exist')
    .click();

    // Click on the radio button with data-cy="radio-label__750"
    cy.get('label[data-cy="radio-label__750"]')
      .should('exist')
      .first() 
      .click();
      
    // Get today's date in the format YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];

    // Click on the button with today's date
    cy.get(`button[data-test-date="${today}"]`)
      .should('exist')
      .click();

      // Click on the button with the class "button button--auto button--fill" and text "Continue"
    cy.get('button.button.button--auto.button--fill')
    .contains('Continue')
    .should('exist')
    .click();

    // Select an option from the dropdown with data-cy="select"
cy.get('select[data-cy="select"]')
.should('exist')
.select('Currys');


// Click on the button with the class "button button--auto button--fill" and text "Continue"
cy.get('button.button.button--auto.button--fill')
  .contains('Continue')
  .should('exist')
  .click();

  cy.wait(3000); 

// Click on the button with the class "button button--auto button--fill" and text "Continue"
cy.get('button.button--auto.button--fill')
  .contains('Continue')
  .should('exist')
  .then(($btn) => {
    // Ensure the button is visible and enabled before clicking
    cy.wrap($btn).should('be.visible').and('not.be.disabled').click();
  });

  // Select the value "Mr" from the dropdown with data-cy="select"
cy.get('select[data-cy="select"]')
.should('exist')
.select('Mr');

// Input a value into the text input with data-cy="text" for first name
cy.get('input#firstName[data-cy="text"]')
  .should('exist')
  .type('UATPERFTESTER');

// Input a value into the text input with data-cy="text" for surname
cy.get('input#surname[data-cy="text"]')
  .should('exist')
  .type('UATPERFTESTING'); 

// Click on the button with the class "tab__pill" and text "Manual address"
cy.get('button.tab__pill')
  .contains('Manual address')
  .should('exist')
  .click();

  // Input a value into the text input with data-cy="text" for address line 1
cy.get('input#addressLine1[data-cy="text"]')
.should('exist')
.type('40 Bardsley close');

// Input a value into the text input with data-cy="text" for address line 3
cy.get('input#addressLine3[data-cy="text"]')
  .should('exist')
  .type('Croydon');


// Input a value into the text input with data-cy="text" for postal code
cy.get('input#postalCode[data-cy="text"]')
  .should('exist')
  .type('CR0 5PT');


  // Click on the SVG element with the class "checkbox__svg"
cy.get('svg.checkbox__svg')
.should('exist')
.click();

// Click on the span element with the class "button__label" and text "Continue"
cy.get('span.button__label')
  .contains('Continue')
  .should('exist')
  .click();

  // Wait for up to 15 seconds for the h1 element with the class "protection-details-page__title" and specific text
cy.get('h1.protection-details-page__title', { timeout: 80000 })
.should('exist')
.contains('Protect your dishwasher from unexpected repair bills');

// Click on the button with the class "button button--dg-primary-inverted button--fill" and text "Register only"
cy.get('button.button--dg-primary-inverted.button--fill')
  .contains('Register only')
  .should('exist')
  .click();

  // Input a value into the email input with data-cy="text" for email address
cy.get('input#emailAddress[data-cy="text"]')
.should('exist')
.type('dngtest2386+01123456@gmail.com'); 

// Click on the button with the class "button button--primary" and text "Confirm registration"
cy.get('button.button--primary')
  .contains('Confirm registration')
  .should('exist')
  .click();

// Check if the element with the class "hero-banner__title" and text "Registration confirmed" exists within 1 minute
cy.get('h1.hero-banner__title.ng-star-inserted', { timeout: 60000 })
  .should('exist')
  .contains('Registration confirmed');

  });

  
  it('Enhanced protection plan purchase for Beko OLR journey', () => {
    // Visit the URL
    cy.visit('/');
    cy.wait(5000);  

    cy.get('#onetrust-accept-btn-handler', { timeout: 30000 }) 
    .should('exist') 
    .click();

     // Click on the radio button
     cy.get('label[data-cy="radio-label__DW"]', { timeout: 30000 })
     .should('exist')
     .click();

     cy.wait(3000); 
    // Click on the radio button with data-cy="radio-label__DW"
    cy.get('label[data-cy="radio-label__DW"]', { timeout: 30000 })
      .should('exist')
      .first()
      .click();

    // Click on the radio button with data-cy="radio-label__true"
    cy.get('label[data-cy="radio-label__true"]')
    .should('exist')
    .click();

    // Click on the radio button with data-cy="radio-label__750"
    cy.get('label[data-cy="radio-label__750"]')
      .should('exist')
      .first() 
      .click();
      
    // Get today's date in the format YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];

    // Click on the button with today's date
    cy.get(`button[data-test-date="${today}"]`)
      .should('exist')
      .click();

      // Click on the button with the class "button button--auto button--fill" and text "Continue"
    cy.get('button.button.button--auto.button--fill')
    .contains('Continue')
    .should('exist')
    .click();

    // Select an option from the dropdown with data-cy="select"
  cy.get('select[data-cy="select"]')
  .should('exist')
  .select('Currys');


  // Click on the button with the class "button button--auto button--fill" and text "Continue"
  cy.get('button.button.button--auto.button--fill')
    .contains('Continue')
    .should('exist')
    .click();

  cy.wait(3000); 

  // Click on the button with the class "button button--auto button--fill" and text "Continue"
  cy.get('button.button--auto.button--fill')
    .contains('Continue')
    .should('exist')
    .then(($btn) => {
      // Ensure the button is visible and enabled before clicking
      cy.wrap($btn).should('be.visible').and('not.be.disabled').click();
    });

    // Select the value "Mr" from the dropdown with data-cy="select"
  cy.get('select[data-cy="select"]')
  .should('exist')
  .select('Mr');

  // Input a value into the text input with data-cy="text" for first name
  cy.get('input#firstName[data-cy="text"]')
    .should('exist')
    .type('UATPERFTESTER');

  // Input a value into the text input with data-cy="text" for surname
  cy.get('input#surname[data-cy="text"]')
    .should('exist')
    .type('UATPERFTESTING'); 

  // Click on the button with the class "tab__pill" and text "Manual address"
  cy.get('button.tab__pill')
    .contains('Manual address')
    .should('exist')
    .click();

    // Input a value into the text input with data-cy="text" for address line 1
  cy.get('input#addressLine1[data-cy="text"]')
  .should('exist')
  .type('40 Bardsley close');

  // Input a value into the text input with data-cy="text" for address line 3
  cy.get('input#addressLine3[data-cy="text"]')
    .should('exist')
    .type('Croydon');


  // Input a value into the text input with data-cy="text" for postal code
  cy.get('input#postalCode[data-cy="text"]')
    .should('exist')
    .type('CR0 5PT');


    // Click on the SVG element with the class "checkbox__svg"
  cy.get('svg.checkbox__svg')
  .should('exist')
  .click();

  // Click on the span element with the class "button__label" and text "Continue"
  cy.get('span.button__label')
    .contains('Continue')
    .should('exist')
    .click();

  // Wait for up to 15 seconds for the h1 element with the class "protection-details-page__title" and specific text
cy.get('h1.protection-details-page__title', { timeout: 80000 })
.should('exist')
.contains('Protect your dishwasher from unexpected repair bills');

// Click on the button with the class "button button--dg-primary button--fill" and nested span with text "Register with added cover"
cy.get('button.button--dg-primary.button--fill')
  .contains('Register with added cover')
  .should('exist')
  .click();

  // Input a value into the email input with data-cy="text" for email address
cy.get('input#emailAddress[data-cy="text"]')
.should('exist')
.type('dngtest2386+01123456@gmail.com'); 

  // Click on the button with the class "button button--primary" and text "Continue to payment"
  cy.get('button.button--primary')
    .contains('Continue to payment')
    .should('exist')
    .click();

    // Wait for up to 15 seconds for the h1 element with the class "direct-debit-title" and specific text "Direct Debit details"
  cy.get('h1.direct-debit-title', { timeout: 60000 })
  .should('exist')
  .contains('Direct Debit details');

  // Input a value into the text input with data-cy="text" for account name
  cy.get('input#accountName[data-cy="text"]')
    .should('exist')
    .type('TEST'); 

  // Ensure the readonly attribute is removed before typing
  cy.get('input#accountNumber[data-cy="number__display"]')
    .should('exist')
    .should('be.visible')
    .invoke('removeAttr', 'readonly')
    .type('88888888'); 


  // Input a value into the text input with data-cy="sort-code" for sort code
  cy.get('input#sortCode--one[data-cy="sort-code"]')
    .should('exist')
    .type('20'); 

  // Input a value into the text input with data-cy="sort-code" for the second part of the sort code
  cy.get('input#sortCode--two[data-cy="sort-code"]')
    .should('exist')
    .type('69');

  // Input a value into the text input with data-cy="sort-code" for the third part of the sort code
  cy.get('input#sortCode--three[data-cy="sort-code"]')
    .should('exist')
    .type('50');

  // Select the value "15" from the dropdown with data-cy="select" for payment date
  cy.get('select#paymentDate[data-cy="select"]')
    .should('exist')
    .select('28');

  // Click on the first two div elements with the class "checkbox__decorator"
  cy.get('div.checkbox__decorator')
    .should('have.length.at.least', 2) // Ensure there are at least two elements
    .each(($el, index) => {
      if (index < 2) {
        cy.wrap($el).click();
      }
    });

    // Click on the button with the class "button button--primary button--fill" and text "Confirm & Pay"
    cy.get('button.button--primary.button--fill')
      .contains('Confirm & Pay')
      .should('exist')
      .click();

    // Wait for up to 15 seconds for the h2 element with the class "my-6" and text "Confirmation"
    cy.get('h2.my-6', { timeout: 60000 })
    .should('exist')
    .contains('Confirmation');

  });


});