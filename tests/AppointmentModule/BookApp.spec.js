import { test, expect } from '@playwright/test';

import Environment from "../../Pages/Setup/Environment";
import Login from "../../Pages/Login/LoginPage"
import userDetails from "../../Pages/CommanPages/userDetails"
import HomePage from '../../Pages/CommanPages/HomePage';


const logininfo = JSON.parse(JSON.stringify(require("../../TestData/Login.json")))

import { log } from 'console';

test('Book Appointment', async ({ page }) => { 
  
const environment= new Environment(page)
const login=new Login(page)
const userdetails=new userDetails(page)
const homePage=new HomePage(page)

await page.goto(environment.PreReleaseServerUrl)
await page.pause()
await login.enterUsername(logininfo.userName)
await login.enterPassword(logininfo.passWord)
await login.clickOnLoginButton()
await userdetails.clickOnHomeIcon()
await homePage.clickOnAppointmentModule()

await page.pause()


});
