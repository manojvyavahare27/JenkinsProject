import { test, expect } from '@playwright/test';

// JS file for pages imported
import Environment from "../../Pages/Setup/Environment";
import Login from "../../Pages/Login/LoginPage"
import userDetails from "../../Pages/CommanPages/userDetails"
import HomePage from '../../Pages/CommanPages/HomePage';
import FindPatient from '../../Pages/PatientModule/FindPatient';
import DuplicateCheck from '../../Pages/PatientModule/DuplicateCheck';
import AddDetails from '../../Pages/PatientModule/AddDetails';
import AddAddress from '../../Pages/PatientModule/AddAddress';
import AddPIP from '../../Pages/PatientModule/AddPIP';
import AddGP from '../../Pages/PatientModule/AddGp';
import ViewPIP from '../../Pages/PatientModule/ViewPip';


//Json file imported
const logininfo = JSON.parse(JSON.stringify(require("../../TestData/Login.json")))
const PatientData= JSON.parse(JSON.stringify(require("../../TestData/PatientData/PatientDetails.json")))

import { log } from 'console';
import exp from 'constants';

test('Add Patient', async ({ page }) => { 
  
const environment= new Environment(page)
const login=new Login(page)
const userdetails=new userDetails(page)
const homePage=new HomePage(page)
const findPatient=new FindPatient(page)
const duplicateCheck=new DuplicateCheck(page)
const addDetails=new AddDetails(page)
const addaddress=new AddAddress(page)
const addpip=new AddPIP(page)
const addgp=new AddGP(page)
const viewpip=new ViewPIP(page)


await page.goto(environment.PreReleaseServerUrl)
await login.enterUsername(logininfo.NuserName)
await login.enterPassword(logininfo.passWord)
await login.clickOnLoginButton()

await page.waitForTimeout(1000)
//Assert
await login.enterUsername(logininfo.userName)
await login.enterPassword(logininfo.passWord)

await login.clickOnLoginButton()
await page.waitForTimeout(1000)
await expect(page.getByText('Login success')).toHaveText('Login success')



await userdetails.clickOnHomeIcon()
await homePage.clickOnPatientModule()
await findPatient.clickOnSearch()
await page.waitForTimeout(2000)
await expect(page.getByText('At least one search field should be set for a search.')).toHaveText('At least one search field should be set for a search.')
await page.pause()
//Find Patient Page
await findPatient.enterGivenName(PatientData.PatientGivenName)
await findPatient.enterFamilyName(PatientData.PatientFamilyName)
//await findPatient.selectSex()
await findPatient.enterBirthDate(PatientData.BornDate)
await findPatient.clickOnSearch()
await findPatient.clickOnAddPatientButton()
//Adding data on duplicate check page
await duplicateCheck.clickOnDuplicateCheckButton()

await expect(page.getByText('Photo Identification required')).toHaveText('Photo Identification required')
await expect(page.getByText('Photo Identification ID required')).toHaveText('Photo Identification ID required')
await expect(page.getByText('Middle name(s) is required')).toHaveText('Middle name(s) is required')
await expect(page.getByText('Sex required')).toHaveText('Sex required')
await page.pause()
await duplicateCheck.enterPatIdentifier(PatientData.PatIdentifier)
await duplicateCheck.selectDropdownUniqueIdentification(PatientData.UniqueIdentification)
await duplicateCheck.enterUniqueIdentificationID(PatientData.UniqueIdentificationID)

await duplicateCheck.selectPhotoIdentification(PatientData.PhotoIdentfication)
await duplicateCheck.enterPhotoIdentificationID(PatientData.PhotoIdentficationID)
await duplicateCheck.selectTitle(PatientData.TitleM)
await duplicateCheck.enterMiddleName(PatientData.MiddleName)
await duplicateCheck.enterBornDate(PatientData.BornDate)
await duplicateCheck.selectSex(PatientData.SexM)
await duplicateCheck.clickOnDuplicateCheckButton()
await duplicateCheck.clickOnCreatePatientButton()
await page.pause()



//Add Details Page

await addDetails.selectMaritalStatus()
await addDetails.selectNationality()
await addDetails.selectEthnicity()
await addDetails.selectOccupation()
await addDetails.selectNationality()
await addDetails.SelectReligion()
await addDetails.enterNotes()
await page.pause()
await addDetails.clickOnNextButton()
await page.waitForTimeout(2000)
//Add Address
await addaddress.enterNumberAndRoad()
await addaddress.enterTownInAddress()
await addaddress.enterDestrict()
await addaddress.enterCounty()
await addaddress.enterPostCode()
await addaddress.selectCountry()
await addaddress.enterPermISOCountryCode()
await addaddress.enterPermICAOCode()
await addaddress.enterPremPhone()
await addaddress.enterPermEmail()
await addaddress.enterPerMobileNumber()
await addaddress.enterPermWorkPhone()
await addaddress.enterPermFax()
await addaddress.selectPermHealthRegion()
await addaddress.selectPermLocationZone()



//Temporary Address
  // await page.pause()
  await addaddress.enterTempNumberandRoad()
  await addaddress.enterTempTown()
  await addaddress.enterTempDistrict()
  await addaddress.enterTempCounty()
  await addaddress.enterTempPostcode()
  await addaddress.enterTempISOCountryCode()
  await addaddress.enterTempICAOCountryCode()
  //await page.pause()
  await addaddress.enterTempPhone()
  await addaddress.enterTempEmail()
  await addaddress.enterTempWorkPhone()
  await addaddress.enterTempFax()
  await addaddress.selectTempHealthRegion()
  await addaddress.selectTempLocationZone()
  await addaddress.clickOnTempAddressAddViewBnt()
  await addaddress.enterTempAddresNotes()
  await addaddress.clickOnTempAddressAddViewBnt()
  await addaddress.closeTempAddressNotesPopup()

  //Billing Corrospondance
  await addaddress.CheckRadiobtnBilllingCorrespondence()
  await addaddress.SelectStartEndDate()

  await addaddress.clickOnSaveAddress()
  await page.waitForTimeout(1000)
  await expect(page.getByText('Patient address added successfully')).toHaveText('Patient address added successfully')

  //Add PIP
    //await page.pause()
    await addpip.selectPIPTitle()
    await addpip.enterPIPFamilyName()
    await addpip.enterPIPGivenName()
    await addpip.enterPIPMiddleName()
    await addpip.selectPIPBornDate()
    //await page.pause()
    await addpip.selecrPIPEthnicity()
    await addpip.selectPIPOccupation()
    await addpip.enterPIPMobileNumber()
    await addpip.enterPIPEmailId()
    await addpip.selectPIPRelation()
    await addpip.selectPIPNextOfKin()
    await addpip.SelectPIPFamilyAwareOfIllness()
    await addpip.enterProfessionalTitle()
    await addpip.selectPIPReceivePatientLetter()
    await addpip.selectPIPReceiveAppointmentLetter()
    await addpip.selectPIPPartnerDetailsOnRegForm()
    await addpip.checkSendPatientTextEmail()
    await addpip.checkIsReferrer()
    await addpip.enterPIPNotes()
    //await page.pause()
    await addpip.checkcAssistingInPartner()
    await addpip.checkHelpingPatients()
    await addpip.checkBeingPhotographed()
    await addpip.checkGeneralPublicity()
    await addpip.ClickOnSavePIP()
    await expect(page.getByText('Patient interested party details added successfully')).toHaveText('Patient interested party details added successfully')  

  //View PIP
  //await page.pause()
//   await viewpip.clickOnViewPIPLink()
//   await viewpip.clickOnCloseViewPopup()
await page.pause()
  await viewpip.clickOnNextbntViewPIP()

  //Search GP
  await addgp.clickOnSearchGPBtn()
  await addgp.enterGpSearch()
  await page.pause()
  //await expect(page.getByText('Local GP found')).toHaveText('Local GP found')

  await addgp.clickOnAddGPBtn()

  // Add GP
  await addgp.enterGPTitle()
  await addgp.enterGPInitials()
  await addgp.enterGPGivenName()
  await addgp.enterGPFamilyName()
  await addgp.enterGPCode()
  await addgp.enterGPPracticeCode()
  await addgp.enterGPGMCCode()
  await addgp.clickOnShowbnt()
  await addgp.selectUnknownPostCode()
  await addgp.enterGPPhone()
  await addgp.enterGPFax()
  await addgp.enterGPWorkPhone()
  await addgp.enterGPMobile()
  await addgp.enterGPEmail()
  await addgp.clickOnSaveGPButton()
  await expect(page.getByText('GP Added Successfully')).toHaveText('GP Added Successfully')

  await page.pause()
  // Add GP To Patient     
  
  await addgp.enterAppGpSearch()
  await addgp.clickOnPersonAddButton()
  await addgp.clickOnNextButtonOnSearchGp()
  await page.waitForTimeout(3000)

  // Print Id Card    
  // Get the upload input element
  const fileInput = await page.$('input[type=file]');
  // Set the file to upload
  const filePath = '../Cellma4Automation/UploadPics/Patient.png';
  // Upload the file
  await fileInput.setInputFiles(filePath);
  await page.getByTestId('Upload').click()
  //await expect(page.getByText('Patient photo uploaded successfully')).toHaveText('Patient photo uploaded successfully')
  await printidcard.clickOnSavebtn()
  await page.waitForTimeout(2000)




await page.pause()




});
