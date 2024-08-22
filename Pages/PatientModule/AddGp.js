class AddGP
{
    constructor(page)
    {
        this.page=page
        this.btnSearchGP=page.getByRole('button', { name: 'Search' })
        this.btnAddGP=page.getByTestId('Add GP')
        //Add GP Page
        this.txtbox_GPTitle=page.getByTestId('Title')
        this.txtbox_GPInitials=page.getByTestId('Initial')
        this.txtbox_GPGivenName=page.getByTestId('Given Name') 
        this.txtbox_GPFamilyName=page.getByTestId('Family Name') 
        this.txtbox_GPCode=page.getByTestId('GP Code')
        this.txtbox_GPPracticeCode=page.getByTestId('Practice Code')
        this.txtbox_GPGMCCode=page.getByTestId('GMC Code')
        this.btnShowGP=page.getByText('Show')
        this.dropdown_UnknownPostcode=page.locator("xpath=//div[@aria-labelledby='mui-component-select-unknownNoFixedAbodeorOverseasVisitor']")
        //GP Contact Details
        this.txtbox_GPPhone=page.getByTestId('GP Phone')
        this.txtbox_GPFax=page.getByTestId('Fax')
        this.txtbox_GPWorkPhone=page.getByTestId('Work Phone')
        this.txtbox_GPMobile=page.getByTestId('Mobile')
        this.txtbox_GPEmail=page.getByTestId('Email')
        this.btnSaveGP=page.getByTestId('Save')

        //Gp Address Details
        this.txtPostcodeSearch=page.locator("xpath=//input[@name='postcodeSearch']")
        this.postcodeValue=page.getByRole('option', { name: 'Gondhalenagar Post Office,' })
        this.txtbox_GPNumberandRoad=page.getByTestId('Number & Road')
        this.txtbox_District=page.getByTestId('District')
        this.txtbox_GPTown=page.getByTestId('Town')
        this.txtbox_GPCounty=page.getByTestId('County')
        this.txtbox_GpAddressPostCode=page.getByTestId('Postcode')



        //Add GP To Patient
        this.txtbox_GPFullName=page.locator("xpath=//input[@id='Search']")
        //this.btn_PersonAdd=page.getByRole('button', { name: 'personAdd' })
       // this.btn_PersonAdd=page.getByRole('row', { name: '113 Mr R tiya India India tiya R GP010 - ZZ99 3VZ personAdd edit' }).getByLabel('personAdd')
       this.btn_PersonAdd=page.getByLabel('personAdd')
       
                                
        this.btnNextonSearchGP=page.getByTestId('Next')
   
        //Search GP
        this.txtbox_SearchGP=page.getByRole('textbox', { name: 'Search' })

    }
    async enterGpSearch()
    {
        await this.txtbox_SearchGP.type('sharon')
    }
    async enterAppGpSearch()
    {
        await this.txtbox_SearchGP.type("BATES")
    }
 
    async clickOnNextButtonOnSearchGp()
    {
        await this.btnNextonSearchGP.click()
    }

    async clickOnPersonAddButton()
    {
        await this.btn_PersonAdd.click()
    }

    async enterGPFullName()
    {
        await this.txtbox_GPFullName.type("Patil")
    }
    async clickOnSaveGPButton()
    {
        await this.btnSaveGP.click()
    }
    async enterGPEmail()
    {
        await this.txtbox_GPEmail.type("Manisha123@gmail.com")
    }
    async enterGPMobile()
    {
        await this.txtbox_GPMobile.type("9890124587")
    }
    async enterGPWorkPhone()
    {
        await this.txtbox_GPWorkPhone.type("020215421")
    }
    async enterGPFax()
    {
        await this.txtbox_GPFax.type("02021545")
    }
    async enterGPPhone()
    {
        await this.txtbox_GPPhone.type("0202665845")
    }
    async selectUnknownPostCode()
    {
        await this.dropdown_UnknownPostcode.click()
        await this.page.getByRole('option', { name: 'Asked, but not given' }).click()
        await this.dropdown_UnknownPostcode.click()
        await this.page.getByRole('option', { name: 'Please Select' }).click()
    }
    async clickOnShowbnt()
    {
        await this.btnShowGP.click()
        await this.btnShowGP.click()

    }
    async enterGPGMCCode()
    {
        await this.txtbox_GPGMCCode.type("005")
    }
    async enterGPPracticeCode()
    {
        await this.txtbox_GPPracticeCode.type("003")
    }
    async enterGPCode()
    {
        await this.txtbox_GPCode.type("007")
    }
    async enterGPFamilyName()
    {
        await this.txtbox_GPFamilyName.type("Patil")
    }
    async enterGPGivenName()
    {
        await this.txtbox_GPGivenName.type("Manisha")
    }
    async enterGPInitials()
    {
        await this.txtbox_GPInitials.type("Mr")
    }
    async enterGPTitle()
    {
        await this.txtbox_GPTitle.type("Mr")
    }
    async clickOnAddGPBtn()
    {
        await this.btnAddGP.click()
    }
    async clickOnSearchGPBtn()
    {
        await this.btnSearchGP.click()
    }
    //Add Address details of GP
    async enterLocalGPPostcode()
    {        // // Interact with the dropdown
        await this.txtPostcodeSearch.fill('GONDHALENAGAR POST')
        await this.postcodeValue.click();
    }
    async enterGpAddressNumberAndRoad(add_address1)
    {
        await this.txtbox_GPNumberandRoad.fill("")
        await this.txtbox_GPNumberandRoad.fill(add_address1)
    }
    async enterGpAddressDistrict(add_address3)
    {
        await this.txtbox_District.fill(add_address3)
    }
    async enterGpAddressTown(add_address2)
    {
        await this.txtbox_GPTown.fill(add_address2)
    }
    async enterGpAddressCounty(add_address4)
    {
        await this.txtbox_GPCounty.fill(add_address4)
    }
    async enterGPAddressPostCode(add_address5)
    {
        await this.txtbox_GpAddressPostCode.fill(add_address5)
    }
}
module.exports=AddGP