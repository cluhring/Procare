class loginPage {

    elements = {
        username : () => cy.xpath("//*[@id='root']/div/div/form/div[1]/input"),
        password : () => cy.xpath("//*[@id='root']/div/div/form/div[2]/input"),
        loginBtn : () => cy.xpath("//*[@id='root']/div/div/form/div[3]/button"),
    }
    
    
    login(testUsers) {
        this.elements.username().type(testUsers.username)
        this.elements.password().type(testUsers.password)
        this.elements.loginBtn().click();
    }
}

module.exports = new loginPage();
require('@cypress/xpath');
