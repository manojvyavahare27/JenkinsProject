class AddAddress
{
    constructor(page)
    {
        this.page=page
        this.btn_save=page.getByTestId('Save')

        // Permanent Address Locators
        this.txtbox_numberandroad=page.locator('input[name="numberRoad"]')
        this.txtbox_town=page.locator('input[name="town"]')
        this.txtbox_district=page.locator('input[name="district"]')
        this.txtbox_county=page.locator('input[name="county"]')
        this.txtbox_postcode=page.locator('input[name="postcode"]')
        this.btn_FindPostcode=page.getByTestId('Find Postcode').first()
        this.btn_FindPostcode2=page.getByTestId('Find Postcode').nth(1)
        this.txtbox_PopupCountry=page.getByTestId('CommonCellmaPopup').getByTestId('Country')
        this.btn_PopupSave=page.getByTestId('CommonCellmaPopup').getByTestId('Save')
        this.txtbox_permISOCountryCode=page.locator('input[name="iSOCountryCode"]')
        this.dropdown_Country=page.locator('#mui-component-select-country')
        this.txtbox_permICAOCountryCode=page.locator('input[name="iCAOCountryCode"]')         
        this.txtbox_permPhone=page.locator('input[name="phone"]')
        this.txtbox_permEmail=page.locator('input[name="email"]')
        this.txtbox_PerMobileNumber=page.getByTestId('Mobile').first()
        this.txtbox_permWorkPhone=page.locator('input[name="workPhone"]')
        this.txtbox_permFax=page.locator('input[name="fax"]')
        this.dropdown_permHealthRegion=page.locator('#mui-component-select-healthRegion')
        this.dropdown_permLocationZone=page.locator('#mui-component-select-locationZone')
         this.btn_PermAddressAddView=page.getByTestId('Add/View Notes').first()
         this.txtbox_PermAddressNotes=page.getByTestId('Notes')
         //this.txtbox_TempAddressNotes=page.getByTestId('Notes')
        this.btn_ClosePermAddressNotesPopup=page.getByTestId('CancelIcon').locator('path')

        



        //Temporary Address Locators
        this.txtbox_tempNumberandRoad=page.locator('input[name="tempNumberRoad"]')
        this.txtbox_temptown=page.locator('input[name="tempTown"]')
        this.txtbox_tempDistrict=page.locator('input[name="tempDistrict"]')
        this.txtbox_tempCounty=page.locator('input[name="tempCounty"]')
        this.txtbox_PostCode=page.locator('input[name="tempPostcode"]')
        this.dropdown_TempCountry=page.locator('#mui-component-select-tempCountry')
        this.txtbox_tempISOCountryCode=page.locator('input[name="tempISOCountryCode"]')
        this.txtbox_tempICAOCountryCode=page.locator('input[name="tempICAOCountryCode"]')
        this.txtbox_tempPhone=page.locator('input[name="tempPhone"]')
        this.txtbox_tempEmail=page.locator('input[name="tempEmail"]')
        this.txtbox_TempMobileNumber=page.locator('#temporaryMobileNumber')
        this.txtbox_tempWorkPhone=page.locator('input[name="tempWorkPhone"]')
        this.txtbox_tempFax=page.locator('input[name="tempFax"]')
        this.dropdown_tempHealthRegion=page.locator('#mui-component-select-tempHealthRegion')
        this.dropdown_tempLocationZone=page.locator('#mui-component-select-tempLocationZone')
        this.btn_tempAddressAddView=page.getByTestId('Add/View Notes').nth(1)
        this.txtbox_TempAddressNotes=page.getByTestId('Notes')
        this.btn_CloseTempAddressNotesPopup=page.getByTestId('CancelIcon')

        //Billing Corrospondance
        this.radiobtn_billingCorr=page.getByTestId('TA Billing Correspondence').getByRole('radio', { name: 'A' })
        this.calender_StartDate=page.getByTestId('Start Date').getByPlaceholder('dd/mm/yyyy')
        this.calender_EndDate=page.getByTestId('End Date').getByPlaceholder('dd/mm/yyyy')

        //Save Address button
        this.btn_SaveForAddress=page.getByTestId('Save')

    }
    async clickOnSaveButton()
    {
        await this.btn_save.click()
    }
    async enterNumberAndRoad()
    {
        await this.txtbox_numberandroad.fill("")
        await this.txtbox_numberandroad.type("15 Number")
        //await this.txtbox_postcode.type(name)
    }
    async enterTownInAddress()
    {
        await this.txtbox_town.fill("Kharadi")
    }
    async enterDestrict()
    {
        await this.txtbox_district.fill("Pune")
    }
    async enterCounty()
    {
        await this.txtbox_county.fill("Maharashtra")
    }
    async enterPostCode()
    {
        await this.txtbox_postcode.fill("400123")
    }
    async clickOnFindPostCode()
    {
        await this.btn_FindPostcode.click()
    }
    async clickOnFindPostCode2()
    {
        await this.btn_FindPostcode2.click()
    }
    async enterCountryonPopup()
    {
        await this.txtbox_PopupCountry.fill()
    }
    async clickOnSaveButtonOnPopup()
    {
        await this.btn_PopupSave.click()
    }
    //Temp Address functions

    async enterTempNumberandRoad()
    {
        await this.txtbox_tempNumberandRoad.type("15 Number")
    }
    async enterTempTown()
    {
        await this.txtbox_temptown.type("Kharadi")
    }
    async enterTempDistrict()
    {
        await this.txtbox_tempDistrict.type("Pune")
    }
    async enterTempCounty()
    {
        await this.txtbox_tempCounty.type("Maharashtra")
    }
    async enterTempPostcode()
    {
        await this.txtbox_PostCode.type("400123")
    }

   async selectTempCountry()
   {
    await this.dropdown_TempCountry.click()
    await this.page.getByRole('option', { name: 'India', exact: true }).click()
   }
    async enterTempISOCountryCode()
    {
        await this.txtbox_tempISOCountryCode.type("91")
    }
    async enterTempICAOCountryCode()
    {
        await this.txtbox_tempICAOCountryCode.type("100")
    }
    async enterTempPhone()
    {
        await this.txtbox_tempPhone.type("9890098900")
    }

    async enterTempEmail()
    {
        await this.txtbox_tempEmail.type("Manoj.vyavahare@gmail.com")
    }
    
    async enterTempMobileNumber()
    {
        await this.txtbox_TempMobileNumber.fill("9762713710")
    }
    async enterTempWorkPhone()
    {
        await this.txtbox_tempWorkPhone.type("0206991525")
    }
    async enterTempFax()
    {
        await this.txtbox_tempFax.type("020124587")
    }
    async selectTempHealthRegion()
    {
        await this.dropdown_tempHealthRegion.click()
        await this.page.getByRole('option', { name: 'London' }).click()
    }
    async selectTempLocationZone()
    {
        await this.dropdown_tempLocationZone.click()
        await this.page.getByRole('option', { name: 'Zone 1' }).click()
    }
    async clickOnTempAddressAddViewBnt()
    {
        await this.btn_tempAddressAddView.click()
    }
    async enterTempAddresNotes()
    {
        await this.txtbox_TempAddressNotes.type("dding Notes")
        await this.page.getByTestId('CommonCellmaPopup').getByTestId('Save').click()
    }
    async closeTempAddressNotesPopup()
    {
       await this.btn_CloseTempAddressNotesPopup.click()
    }

    //Permanent Address functions
    async enterPermISOCountryCode()
    {
        await this.txtbox_permISOCountryCode.type("95")
    }
    async enterPermICAOCode()
    { 
        await this.txtbox_permICAOCountryCode.type("105")
    }
    async selectCountry()
    {
        await this.dropdown_Country.click()
        await this.page.getByRole('option', { name: 'India', exact: true }).click()
    }
    async enterPremPhone()
    {
        await this.txtbox_permPhone.type("2025454")
    }
    async enterPermEmail()
    {
        await this.txtbox_permEmail.fill('')
        await this.txtbox_permEmail.type("Manoj.vyavahare@gmail.com")
    }
    async enterPerMobileNumber()
    {
        await this.txtbox_PerMobileNumber.fill('')
        await this.txtbox_PerMobileNumber.type("9762713710")
    }
    async enterPermWorkPhone()
    {
        await this.txtbox_permWorkPhone.type("02054875")
    }
    async enterPermFax()
    {
        await this.txtbox_permFax.type("02054154")
    }
    async selectPermHealthRegion()
    {
        await this.dropdown_permHealthRegion.click()
        await this.page.getByRole('option', { name: 'London' }).click()
    }
    async selectPermLocationZone()
    {
        await this.dropdown_permLocationZone.click()
        await this.page.getByRole('option', { name: 'Zone 1' }).click()
    }
    async clickOnPermAddressAddViewBnt()
    {
        await this.btn_PermAddressAddView.click()
    }
    async enterPermAddresNotes()
    {
        await this.txtbox_PermAddressNotes.type("Adding Notes")
        await this.page.getByTestId('CommonCellmaPopup').getByTestId('Save').click()
    }
    async closePermAddressNotesPopup()
    {
        await this.btn_ClosePermAddressNotesPopup.click()
    }

    //Billing Corrospondance

    async CheckRadiobtnBilllingCorrespondence()
    {
        await this.radiobtn_billingCorr.click()
    }
    async SelectStartEndDate()
    {
        await this.calender_StartDate.type("01/04/2023")
        await this.calender_EndDate.type("30/04/2023")
    }

    //Save Address
    async clickOnSaveAddress()
    {
        await this.btn_SaveForAddress.click()
    }
}
module.exports=AddAddress