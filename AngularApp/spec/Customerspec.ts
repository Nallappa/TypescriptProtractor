// /**
//  * Created by Nalli on 27-08-2018.
//  */
import { browser, element, by, ExpectedConditions, protractor} from 'protractor'
import  commondata  from "../data/commondata";
import { BasePage }  from "../pages/BasePage";
import { CustomerTransactions }  from "../pages/CustomerTransactions";
import  { Mainflow } from "..//pages/HomePage";

import { webelementutil } from "../util/webelementutil";
import { alerthandleutil } from "../util/alerthandleutil";
import { dropdownutil } from "../util/dropdownutil";
import { waitutil } from "../util/waitutil";
import locator from "../locators/customertransactionslocators";
import data from "../data/CustomerTransactionsdata";

let wait = new waitutil();
let Base = new BasePage();
let Home = new Mainflow();
let Customertrans = new CustomerTransactions();

let webutil = new webelementutil();
let dropdown = new dropdownutil();

describe('Customer Transaction verification', function() {
    beforeAll(function () {
        Base.navigateToURL(commondata.testsiteurl);
        wait.AngularWait;
        browser.getTitle().then(function(text){
        console.log(text);
        expect(commondata.urlname).toBe(text);
        });
    });

    it('Select Customer Test', function() {
        Home.Customerlogin();
        dropdown.Selectbytext("#userSelect option",data.Customername);
        CustomerTransactions.Loginbutton.click();
    });

    it('ValidateDesposits Test', function() {
        wait.WaitForElement(CustomerTransactions.Depositbtn);
        CustomerTransactions.Depositbtn.click();
        browser.sleep(1000);
        wait.WaitForElement(CustomerTransactions.Depositamountinp);
        CustomerTransactions.Depositamountinp.sendKeys(data.Depositamount);
        CustomerTransactions.Depositbtnins.click();
        browser.sleep(1000);
        element(by.binding("message")).getText().then(function(text){
        console.log(text);
        expect(text).toEqual(data.Depositmessage);
        });
    });

    it('ValidateWithDrawl Test', function() {
        wait.WaitForElement(CustomerTransactions.Withdrawbtn);
        CustomerTransactions.Withdrawbtn.click();
        browser.sleep(1000);
        wait.WaitForElement(CustomerTransactions.Depositamountinp);
        CustomerTransactions.Depositamountinp.sendKeys(data.Depositamount);
        CustomerTransactions.Depositbtnins.click();
        browser.sleep(3000);
        element(by.binding("message")).getText().then(function(Transactionsuccess){
        console.log(Transactionsuccess);
        expect(Transactionsuccess).toEqual(data.Transactionessage);
        });
    });
});

 // CustomerTransactions.Depositamountlbl.getText().then(function(Depositamountmessage){
        //     console.log(Depositamountmessage);
        //     expect(Depositamountmessage).toEqual(data.Depositmessage);
        // });
       // Home.Customerlogin();
        // Customertrans.Selectcustomer();
        // Customertrans.ValidateDesposits();
        // Customertrans.ValidateWithDrawl();
       


































