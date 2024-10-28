import homePage from "../../pages/homePage"
import loginPage from "../../pages/loginPage"
import testUsers from "../../fixtures/users.json"
import properties from "../../fixtures/propertydata.json"

describe('As a registered user, I can add a new property', () => {
  before('Log into TurboTenant QA website', () => {
    cy.visit('https://qa-app.dev.turbotenant.com');
    loginPage.login(testUsers.user1);
  })
  
  it('Verify Registered User can Add a Property', () => {

    // should be on home page now - w/ Add Property button
    cy.wait(2000);
    cy.get('span').should('contain', 'Welcome, fake@email.com!');
    cy.get(homePage.elements.addPropBtn2).should('contain', 'Add Property');

    // Open New Property Form
    homePage.clickOnAddPropBtn();

    // fill in property form w/ fake data - 
    // submit New Property Info form w/ property2 data
    homePage.submitNewProperty(properties.property2);
  
    // verify new proerty card
    // verify correct title, description, and rent
    cy.get('.dataInput').should(($dataInputs) => {
      expect($dataInputs.last()).to.contain(properties.property2.title)
      expect($dataInputs.last()).to.contain(properties.property2.desc)
      expect($dataInputs.last()).to.contain('Rent: $' + properties.property2.rent)
    });

    // delete property
    homePage.deleteNewProperty();
    cy.get(homePage.elements.message).should('contain', 'Property deleted successfully!');
  })
})