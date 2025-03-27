import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('OrangeHRM Login Test', () => {

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.dashboardPageCheck()
    
  })
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.errorAlertCheck()

  })
})