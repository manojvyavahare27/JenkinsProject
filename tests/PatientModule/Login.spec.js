import { test, expect } from '@playwright/test';

import Environment from "../../Pages/Setup/Environment";
import Login from "../../Pages/Login/LoginPage"
import userDetails from "../../Pages/CommanPages/userDetails"
import HomePage  from '../../Pages/CommanPages/HomePage';


import { log } from 'console';

test('test', async ({ page }) => { 
  
const environment= new Environment(page)
const login=new Login(page)
const userdetails=new userDetails(page)
const homePage=new HomePage(page)

await page.goto(environment.ReleaseServerUrl)
await login.enterUsername()
await login.enterPassword()
await login.clickOnLoginButton()
await userdetails.clickOnHomeIcon()
await homePage.clickOnPatientModule()

await page.pause()


});
