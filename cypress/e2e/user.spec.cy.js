import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('OrangeHRM Tests', () => {

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.dashboardPageCheck()

    menuPage.accessMyInfoMenu()

    myInfoPage.fillpersonalDetails(chance.first({gender : "male"}), chance.last({gender : "male"}))//,chance.string()
    myInfoPage.fillemployeeDetails(chance.string({pool : '0123456789', length : 10}), chance.natural(), chance.string({casing : 'upper'}), '2026-17-03') 
    myInfoPage.fillemployeeStatus('1996-11-02')
    myInfoPage.sendForm()
     
  })
})