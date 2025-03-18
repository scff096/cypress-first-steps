class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            selectArrows: ".oxd-select-text--arrow",
            nationalitySelected: ".oxd-select-dropdown > :nth-child(110)",
            martialStatusSelected: ".oxd-select-dropdown > :nth-child(4)",
            genderRadioSelector: ".oxd-radio-wrapper",
            saveButton: "[type='submit']",
            saveCloseButton: ".oxd-toast-close"
        }

        return selectors
    }

    typeFieldsTest() {
        cy.get(this.selectorsList().firstNameField).clear().type('FirstNameTest')
        cy.get(this.selectorsList().lastNameField).clear().type('LastNameTest')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('EmplooyeId')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('OtherIdTest')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('DriversLicenseTest')
        cy.get(this.selectorsList().genericField).eq(6).clear().type('2026-03-17')
        
    }

    clickFieldsTest() {
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().selectArrows).eq(0).click()
        cy.get(this.selectorsList().nationalitySelected).click()
        cy.get(this.selectorsList().selectArrows).eq(1).click()
        cy.get(this.selectorsList().martialStatusSelected).click()
        cy.get(this.selectorsList().genderRadioSelector).eq(0).click()
        cy.get(this.selectorsList().saveButton).eq(0).click()

    }

    saveInfoCheck() {
        cy.get(this.selectorsList().saveCloseButton)
    }
}

export default MyInfoPage