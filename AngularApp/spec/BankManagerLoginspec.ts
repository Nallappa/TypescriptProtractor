// /**
//  * Created by Nalli on 27-08-2018.
//  */


import { browser, element, by, ExpectedConditions, protractor} from 'protractor'
import  data  from "../data/commondata";
import { BasePage }  from "../pages/BasePage";
import { Addcustomerdetails }  from "../pages/Addcustomerdetails";
import  { Mainflow } from "..//pages/HomePage";
import { waitutil } from "../util/waitutil";

let wait = new waitutil();
let Base = new BasePage();
let Home = new Mainflow();
let Customer = new Addcustomerdetails();


describe('Bank Manager Login Test', function() {

    beforeAll(function () {
        Base.navigateToURL(data.testsiteurl);
        wait.AngularWait;
        browser.getTitle().then(function(text){
        console.log(text);
        let expected :string = "Protractor practice website - Banking App"
        expect(expected).toBe(text);
        });
    });

    it('Bank Manager Test', function() {
        Home.BankManagerlogin();
        Customer.gotoAddCustomer();
        Customer.addCustomerInfo();
        Customer.gotoOpenAccount();
        Customer.openAccount();
        Customer.gotoSearchCustomer();
        Customer.validateCustomerRecords();
    });
});

       




































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
