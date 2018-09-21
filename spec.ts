// /**
//  * Created by Nalli on 27-08-2018.
//  */


import { browser, element, by, ExpectedConditions, protractor} from 'protractor'
import { Alert, WebElement } from 'selenium-webdriver';

// import {browser, element, by} from 'protractor';
import  data  from "./AngularApp/data/commondata";
import { BasePage }  from "./AngularApp/pages/BasePage";
import  { Mainflow } from "./AngularApp/pages/HomePage";
import  { dropdwonutil }   from "./AngularApp/util/dropdownutil";
import { waitutil } from "./AngularApp/util/waitutil";

let wait = new waitutil();
// import { Mainflow } from "./AngularApp/objects/objHomePage";

let Base = new BasePage();
let Home = new Mainflow();
let Drop = new dropdwonutil();

describe('Bank Manager Login Test', function() {

    it('Login as Bank Manager', function() {
        let Title : string;
        Base.navigateToURL(data.testsiteurl);
        wait.AngularWait;
       Title = Base.getPageTitle();
       console.log(Title);
       let expected :string = "The title is something"
       expect(expected).toBe(Title);
        Home.BankManagerlogin();
        // Home.Customerlogin();
        // browser.sleep(4000);
    });

    // it("Add Customer",function(){
    //     Customer.gotoAddCustomer();
    //     Customer.AddCustomer(data.locators.addcustomerdetailspage.testdata.fName,data.locators.addcustomerdetailspage.testdata.lName,data.locators.addcustomerdetailspage.testdata.pCode);
    // }) ;

    // it("Open Account",function(){
    //     Customer.gotoOpenAccount();
    //     Customer.openAccount(data.locators.addcustomerdetailspage.testdata.FullName,data.locators.addcustomerdetailspage.testdata.currency);
    //     Customer.gotoSearchCustomer();
    //     // Customer.validateCustomerRecords();
    // }) ;

});

        // browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        // element(by.model("first")).sendKeys("5");
        // element(by.model("second")).sendKeys("7");
        // element(by.id("gobutton")).click();
        // element(by.model("first")).sendKeys("4");
        // element(by.model("second")).sendKeys("6");
        // element(by.id("gobutton")).click();

        // console.log("Printing the Entire table data in new line")

        // element.all(by.repeater("result in memory")).getText().then(function(rows){

        //     var noOfItems = rows.length;
        //     for(var i=0; i<noOfItems; i++){
        //        var table =  element(by.repeater("result in memory").row(i)).getText();
        //         table.then(function(text){
        //            console.log(text);
        //         });
        //     }

        // })




































// var base = require('./pages/BasePage.js');
//
// describe("BankManager Login Test",function(){
//
//     var OR = require('./json/OR.json');
//     var home_page = require('./pages/HomePage.js');
//
//    it("Login as Bank Manager",function(){
//
//        base.navigateToURL(OR.testsiteurl);
//        var customer = home_page.loginAsBankManager();
//        customer.gotoAddCustomer().addCustomerInfo(OR.locators.addcustomerdetailspage.fName,OR.locators.addcustomerdetailspage.lName,OR.locators.addcustomerdetailspage.pCode);
//        var title = base.getPageTitle();
//        expect(title).toBe("Protractor practice website - Banking App");
//        browser.sleep(3000);
//
//    }) ;
//
//
// });
