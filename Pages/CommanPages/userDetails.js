class userDetails
{
    constructor(page)
    {
      this.iconHome=page.locator("xpath=//img[@alt='homeDashboard']")
      this.iconPatient=page.locator("xpath=//img[@alt='Patients Image Avatar']")

    }

    async clickOnHomeIcon()
    {
        await this.iconHome.click()
    }
    
    async clickOnPatientIcon()
    {
        await this.iconPatient.click()
    }
}
module.exports=userDetails