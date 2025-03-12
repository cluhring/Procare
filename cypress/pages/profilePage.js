class profilePage {
    
    elements = {
        profileNameInput : () => cy.get("#name"),
        profilePhoneInput : () => cy.get("#phone"),
        profileEmailInput : () => cy.get("#email"),
        saveProfileBtn : () => cy.get("button.buttonv2"),
        saveMessage : () => cy.get("div.flash span"),
    }

    updateUserProfile(testUsers){
        this.elements.profileNameInput().clear();
        this.elements.profileNameInput().type(testUsers.name);
        this.elements.profilePhoneInput().clear();
        this.elements.profilePhoneInput().type(testUsers.phone);
        this.elements.saveProfileBtn().click();
        this.elements.saveMessage().should('be.visible');
        this.elements.saveMessage().should('have.text', 'Profile saved')
    }
}  
module.exports = new profilePage();
