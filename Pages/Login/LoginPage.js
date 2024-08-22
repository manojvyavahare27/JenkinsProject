class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.userName=page.locator("xpath=//input[@id='userNameLogin']")
        this.passWord=page.locator("xpath=//input[@id='Password']")
        this.loginButton=page.locator("xpath=//div[@class='MuiGrid-root MuiGrid-item css-1wxaqej']")
    }

    async enterUsername(userName)
    {
        await this.userName.fill(userName)
    }

    async enterPassword(passWord)
    {
        await this.passWord.fill(passWord)
    }
    async clickOnLoginButton()
    {
        await this.loginButton.click()
    }

}
module.exports=LoginPage