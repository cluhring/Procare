class homePage {
    
    elements = {
        addPropBtn2 : () => cy.get(".button"),
        addPropBtn : () => cy.xpath("//*[@id='root']/div/div/div[1]/button[1]"),
        titleInput : () => cy.xpath("//*[@id='root']/div/div/div[2]/input[1]"),
        descriptionInput : () => cy.xpath("//*[@id='root']/div/div/div[2]/input[2]"),
        rentInput : () => cy.xpath("//*[@id='root']/div/div/div[2]/input[3]"),
        submitNewPropBtn : () => cy.xpath("//*[@id='root']/div/div/div[2]/button[1]"),
        cancelNewPropBtn : () => cy.xpath("//*[@id='root']/div/div/div[2]/button[2]"),
        addPropForm : () => cy.xpath("//*[@id='root']/div/div/div[2]"),
        savedPropertyInput : () => cy.xpath("//*[@id='root']/div/div/div/div/div[1]"),
        deletePropertyButtons : () => cy.xpath("//*[@id='root']/div/div/div/div/div[2]/button[2]"),
        loginBtn : () => cy.xpath("//*[@id='root']/div/div/form/div[3]/button"),
        message : () => cy.get(".message-success"),
    }
    
    clickOnAddPropBtn(){
        this.elements.addPropBtn2().first().click();
    }

    submitNewProperty(properties){
        this.elements.titleInput().type(properties.title);
        this.elements.descriptionInput().type(properties.desc);
        this.elements.rentInput().type(properties.rent);
        this.elements.submitNewPropBtn().click();
        this.elements.message().should('contain', 'Property added successfully!')
    }

    deleteNewProperty(){
        this.elements.deletePropertyButtons().last().click()
        this.elements.message().should('contain', 'Property deleted successfully!')
    }

    clickOnCancelNewPropBtn(){
        this.elements.cancelNewPropBtn().click()
    }

    // async getNewlySavedElement(){
    //     return this.elements.savedPropertyInput();
    // }
}
    
module.exports = new homePage();
require('@cypress/xpath');