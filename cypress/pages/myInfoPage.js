class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            nickNameFied: ".oxd-input--active",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            selectArrows: ".oxd-select-text--arrow",
            nationalitySelected: ".oxd-select-dropdown > :nth-child(110)",
            martialStatusSelected: ".oxd-select-dropdown > :nth-child(4)",
            genderRadioSelector: ".oxd-radio-wrapper",
            saveButton: "[type='submit']",
            saveCloseButton: ".oxd-toast-container--bottom"
        }

        return selectors
    }

    fillpersonalDetails(firstName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        // cy.get(this.selectorsList().nickNameFied).eq(3).clear().type(nickName)         
    }

    fillemployeeDetails(emplooyeId, otherId, driversLicense, ExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(emplooyeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(ExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillemployeeStatus(birthday) {
        cy.get(this.selectorsList().selectArrows).eq(0).click()
        cy.get(this.selectorsList().nationalitySelected).click()
        cy.get(this.selectorsList().selectArrows).eq(1).click()
        cy.get(this.selectorsList().martialStatusSelected).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(birthday)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genderRadioSelector).eq(0).click()
    }

    sendForm() {
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get(this.selectorsList().saveCloseButton)
    }
}

export default MyInfoPage