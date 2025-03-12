class dashboardPage {
    elements = {
        userAvatar : () => cy.get("div.avatar__picture"),
        userActionButton : () => cy.get("div.tooltip"),
        userTooltip : () => cy.get("div.tooltip-content"),
        userName : () => cy.get('li.topbar-menu__settings a'),
        userMenuLinks : () => cy.get('ul.topbar-menu li'),
        userTooltipName : () => cy.get('span.topbar-menu__settings--name'),
        userTooltipEmail : () => cy.get('span.topbar-menu__settings--email'),
        leftNavDashboardLink : () => cy.get('div.nav-block__header-icon svg path')
    }

    clickAvatarBtn(){
        this.elements.userAvatar().first().click()
    }
    
    clickOnUserProfileLink(){
        this.elements.userMenuLinks().first().click();
    }

    clickOnleftNavDashboardLink(){
        this.elements.leftNavDashboardLink().first().click()
    }

    clickOnLogOutLink(){
        this.elements.userMenuLinks().last().click();
    }
}  
module.exports = new dashboardPage();
