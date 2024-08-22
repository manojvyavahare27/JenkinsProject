class AddDetails
{
    constructor(page)
    {
        this.page=page
        this.dropdownMaritalStatus=page.locator("xpath=//div[@id='mui-component-select-patMaritalStatus']")
        this.dropdownNationality=page.locator("xpath=//div[@id='mui-component-select-patNationality']")
        this.txtNotes=page.locator("xpath=//textarea[@aria-label='Notes']")
        this.dropdown_ethnicity=page.locator("xpath=//div[@id='mui-component-select-patEthnicityText']")
        this.dropdown_occupation=page.locator("xpath=//div[@id='mui-component-select-patOccupation']")
        this.dropdown_religion=page.locator("xpath=//div[@id='mui-component-select-patReligion']")
        this.buttonNext=page.locator("xpath=//button[@aria-label='Next']")

    }

    async selectMaritalStatus()
    {
        await this.dropdownMaritalStatus.click()
        await this.page.getByRole('option', { name: 'Single' }).click()
    }

    async selectNationality()
    {
        await this.dropdownNationality.click()
        await this.page.getByRole('option', { name: 'Indian' }).click()
    }
    async enterNotes()
    {
        await this.txtNotes.fill("Add Notes")
    }

    async selectEthnicity()
    {
        await this.dropdown_ethnicity.click()
        //await this.page.getByRole('option', { name: 'Indian' }).click()
        await this.page.getByRole('option', { name: 'Indian', exact: true }).click()
    }
    async selectOccupation()
    {
        await this.dropdown_occupation.click()
        await this.page.getByRole('option', { name: 'Trainer', exact: true }).click()
    }
    async SelectReligion()
    {
        await this.dropdown_religion.click()
        await this.page.getByRole('option', { name: 'Hindu', exact: true }).click()
    }

    async clickOnNextButton()
    {
        await this.buttonNext.click()
    }
}
module.exports=AddDetails