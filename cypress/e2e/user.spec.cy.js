import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('OrangeHRM Login Test', () => {

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.dashboardPageCheck()

    menuPage.accessMyInfoMenu()

    myInfoPage.fillpersonalDetails('FirstNameTest', 'LastNameTest')
    myInfoPage.fillemployeeDetails('EmplooyeId', 'OtherIdTest', 'DriversLicenseTest', '2026-17-03')
    myInfoPage.fillemployeeStatus('1996-11-02')
    myInfoPage.sendForm()
     
  })
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.errorAlertCheck()

  })
})