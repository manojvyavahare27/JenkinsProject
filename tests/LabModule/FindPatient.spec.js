import { test, expect } from '@playwright/test';

test('Lab Module', async ({ page }) => {

  //open url
  await page.goto('https://cellma4testing.riomed.com/cellmaUser/login'); 
  
  //Login page
  await page.locator("xpath=//input[@id='userNameLogin']").fill("manoj.auto")
  await page.locator("xpath=//input[@id='Password']").fill("Manoj@2023")
  await page.locator("xpath=//button[@aria-label='Login']").click()

// Home page
  await page.locator("xpath=//div[@aria-label='Home']").click()

  //CellmaHomePage
  await page.getByTestId('Patients').nth(1).click()
  await page.pause()
  
  //Patient Search page
  await page.locator("xpath=//input[@id='Given Name']").fill("Manoj")
  await page.locator("xpath=//input[@id='Family Name']").type("Riomedtest")
  await page.locator("xpath=//button[@aria-label='Search']").click()
  await page.pause()
  

});