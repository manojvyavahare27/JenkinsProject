class HomePage {
  constructor(page) {

    this.page=page
    this.PatientModule=page.locator("xpath=//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-2.4 MuiGrid-grid-lg-2 css-db1h5m']//div[@aria-label='Patients']")
    this.AppoitnmentModule=page.locator("xpath=//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-2.4 MuiGrid-grid-lg-2 css-db1h5m']//div[@aria-label='Appointments']")
    
  }

  async clickOnPatientModule()
  {
    await this.PatientModule.click()
  }

  async clickOnAppointmentModule()
  {
    await this.AppoitnmentModule.click()
  }
}
module.exports=HomePage
