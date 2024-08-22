    class FindPatient{
        constructor(page)
        {
            this.txtBoxgivenName=page.locator("xpath=//input[@id='Given Name']")
            this.txtBoxfamilyName=page.locator("xpath=//input[@id='Family Name']")
            this.dropdownSex=page.locator("xpath=//div[@data-testid='Sex']")
            this.txtBoxborn=page.locator("xpath=//input[@id='Born']")
            this.buttonSearch=page.locator("xpath=//button[@aria-label='Search']")
            this.buttonAddPatient=page.locator("xpath=//div[contains(text(),'Add Patient')]")
        }
        async enterGivenName(PatientGivenName)
        {
            await this.txtBoxgivenName.fill(PatientGivenName)
        }
        async enterFamilyName(PatientFamilyName)
        {
            await this.txtBoxfamilyName.fill(PatientFamilyName)
        }

        async selectSex()
        {
            await this.dropdownSex.click()     
            await this.page.getByRole('option', { name: 'Female' }).click()      
            
        }
        async enterBirthDate(BornDate)
        {
            await this.txtBoxborn.fill(BornDate)
        }
        async clickOnSearch()
        {
            await this.buttonSearch.click()
        }
        async clickOnAddPatientButton()
        {
            await this.buttonAddPatient.click()
        }
    }
    module.exports=FindPatient