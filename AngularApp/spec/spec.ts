// // /**
// //  * Created by Nalli on 27-08-2018.
// //  */


// import {browser, element, by} from 'protractor';
// import { default as data } from "../json/OR";
// import { BasePage } from "../pages/BasePage";
// import { HomePage } from "../pages/HomePage";
// import { AddCustomerDetails } from "..//pages/AddCustomerDetails";
// import { SelectWrapper } from "../util/select-wrapper";
// let myselect = new SelectWrapper();
// const word = (<any>data).name;


// let Base = new BasePage();
// let Home = new HomePage();
// let Customer = new AddCustomerDetails();

// describe('Bank Manager Login Test', function() {

//     it('Login as Bank Manager', function() {
//         Base.navigateToURL(data.testsiteurl);
//         browser.waitForAngular();
//         Home.loginAsBankManager();
//     });

//     it("Add Customer",function(){
//         Customer.gotoAddCustomer();
//         Customer.AddCustomer(data.locators.addcustomerdetailspage.testdata.fName,data.locators.addcustomerdetailspage.testdata.lName,data.locators.addcustomerdetailspage.testdata.pCode);
//     }) ;

//     it("Open Account",function(){
//         Customer.gotoOpenAccount();
//         Customer.openAccount(data.locators.addcustomerdetailspage.testdata.FullName,data.locators.addcustomerdetailspage.testdata.currency);
//         Customer.gotoSearchCustomer();
//         // Customer.validateCustomerRecords();
//     }) ;

// });









































// // var base = require('./pages/BasePage.js');
// //
// // describe("BankManager Login Test",function(){
// //
// //     var OR = require('./json/OR.json');
// //     var home_page = require('./pages/HomePage.js');
// //
// //    it("Login as Bank Manager",function(){
// //
// //        base.navigateToURL(OR.testsiteurl);
// //        var customer = home_page.loginAsBankManager();
// //        customer.gotoAddCustomer().addCustomerInfo(OR.locators.addcustomerdetailspage.fName,OR.locators.addcustomerdetailspage.lName,OR.locators.addcustomerdetailspage.pCode);
// //        var title = base.getPageTitle();
// //        expect(title).toBe("Protractor practice website - Banking App");
// //        browser.sleep(3000);
// //
// //    }) ;
// //
// //
// // });
