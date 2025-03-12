class loginPage {

    elements = {
        emailAddress : () => cy.get("#email"),
        password : () => cy.get("#password"),
        loginBtn : () => cy.get(".auth__submit-button"),
    }
    
    login(testUsers) {
        this.elements.emailAddress().click();
        this.elements.emailAddress().type(testUsers.email)
        this.elements.password().type(testUsers.password)
        this.elements.loginBtn().click();
    }
}
module.exports = new loginPage();
