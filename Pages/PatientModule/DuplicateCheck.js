class DuplicateCheck
{
    constructor(page)
    {
        this.page=page
        this.txtPatIdentifier=page.locator("xpath=//input[@id='Identifier']")
        this.dropdownUniqueIdentification=page.locator("xpath=//input[@id='uniqueIdentification']")
        this.txtUniqueIdentificationID=page.locator("xpath=//input[@id='Unique Identification ID']")
        this.dropdownPhotoIdentification=page.locator("xpath=//input[@name='photoIdentification']")
        this.txtPhotoIdentificationID=page.locator("xpath=//input[@id='Photo Identification ID']")
        this.dropdownTitle=page.locator("xpath=//div[@id='mui-component-select-title']")
        this.txtMiddleName=page.locator("xpath=//input[@id='Middle Name(s)']")
        this.txtBornDate=page.locator("xpath=//input[@id='Born']")
        this.dropdownSex=page.locator("xpath=//div[@id='mui-component-select-sex']")
        this.buttonDuplicateCheck=page.locator("xpath=//div[contains(text(),'Duplicate Check')]")
        this.buttonCreatePatient=page.locator("xpath=//button[@aria-label='Create Patient']")
    }

    async enterPatIdentifier(PatIdentifier)
    {
        await this.txtPatIdentifier.fill(PatIdentifier)
    }

    async selectDropdownUniqueIdentification(UniqueIdentification)
    {
        await this.dropdownUniqueIdentification.click()
        await this.page.getByRole('option', { name: UniqueIdentification }).click()

    }
    async enterUniqueIdentificationID(UniqueIdentificationID)
    {
        await this.txtUniqueIdentificationID.fill(UniqueIdentificationID)
    }
    async selectPhotoIdentification(PhotoIdentfication)
    {
        await this.dropdownPhotoIdentification.click()
        await this.page.getByRole('option', { name: PhotoIdentfication }).click()
    }
    async enterPhotoIdentificationID(PhotoIdentficationID)
    {
        await this.txtPhotoIdentificationID.fill(PhotoIdentficationID)
    }
    async selectTitle(TitleM)
    {
        await this.dropdownTitle.click()
        await this.page.getByRole('option', { name: TitleM }).click()
    }

    async enterMiddleName(MiddleName)
    {
        await this.txtMiddleName.fill(MiddleName)
    }

    async enterBornDate(BornDate)
    {
        await this.txtBornDate.fill(BornDate)
    }
    async selectSex()
    {
        await this.dropdownSex.click()
        await this.page.locator("xpath=//div/ul/li[contains(text(),'Female')]").click()

    }

    async clickOnDuplicateCheckButton()
    {
        await this.buttonDuplicateCheck.click()
    }

    async clickOnCreatePatientButton()
    {
        await this.buttonCreatePatient.click()
    }


}
module.exports=DuplicateCheck