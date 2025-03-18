import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('OrangeHRM Login Test', () => {

    const selectorsList = {      

        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        dateField: "[placeholder='yyyy-dd-mm']",
        dateCloseButton: ".--close",
        saveButton: "[type='submit']",
        selectArrows: ".oxd-select-text--arrow",
        genderRadioSelector: ".oxd-radio-wrapper",
    }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.dashboardPageCheck()

    menuPage.accessMyInfoMenu()
    
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmplooyeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2026-03-17')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.selectArrows).eq(0).click()
    cy.get(':nth-child(36)').click()
    cy.get(selectorsList.selectArrows).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorsList.genderRadioSelector).eq(0).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('.oxd-toast-close')
   
  })
  it('Login - Fail', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})