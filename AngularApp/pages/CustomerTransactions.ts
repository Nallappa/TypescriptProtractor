/**
 * Created by Nalli
 */
import { browser, element, by, ExpectedConditions, protractor,ElementFinder} from 'protractor'
import { webelementutil } from "../util/webelementutil";
import { alerthandleutil } from "../util/alerthandleutil";
import { dropdownutil } from "../util/dropdownutil";
import { waitutil } from "../util/waitutil";
import locator from "../locators/customertransactionslocators";
import data from "../data/CustomerTransactionsdata";

let webutil = new webelementutil();
let wait = new waitutil();
let dropdown = new dropdownutil();

export class CustomerTransactions {

    public static Loginbutton = webutil.Webelementreturn(locator.Loginbtn);
    public static Depositamountinp = webutil.Webelementreturn(locator.Depositamountinp);
    public static Depositamountlbl = webutil.Webelementreturn(locator.Depositamountinplbl);
    public static Depositbtn = webutil.Webelementreturn(locator.Depositbtn);
    public static Withdrawbtn = webutil.Webelementreturn(locator.Withdrawbtn);
    public static Depositbtnins = webutil.Webelementreturn(locator.Depositbtnins);

    public Selectcustomer() : void {
        dropdown.Selectbytext("#userSelect option",data.Customername);
        CustomerTransactions.Loginbutton.click();
     };

     public ValidateDesposits() : void {
        wait.WaitForElement(CustomerTransactions.Depositbtn);
        CustomerTransactions.Depositbtn.click();
        browser.sleep(1000);
        wait.WaitForElement(CustomerTransactions.Depositamountinp);
        CustomerTransactions.Depositamountinp.sendKeys(data.Depositamount);
        CustomerTransactions.Depositbtnins.click();
        browser.sleep(1000);
        // CustomerTransactions.Depositamountlbl.getText().then(function(Depositamountmessage){
        //     console.log(Depositamountmessage);
        //     expect(Depositamountmessage).toEqual(data.Depositmessage);
        // });
        element(by.binding("message")).getText().then(function(text){
            console.log(text);
            expect(text).toEqual(data.Depositmessage);
        });
     };

     public ValidateWithDrawl() : void {
        wait.WaitForElement(CustomerTransactions.Withdrawbtn);
        CustomerTransactions.Withdrawbtn.click();
        browser.sleep(1000);
        wait.WaitForElement(CustomerTransactions.Depositamountinp);
        CustomerTransactions.Depositamountinp.sendKeys(data.Depositamount);
        CustomerTransactions.Depositbtnins.click();
        browser.sleep(3000);
        // CustomerTransactions.Depositamountlbl.getText().then(function(Transactionsuccess){
        element(by.binding("message")).getText().then(function(Transactionsuccess){
        console.log(Transactionsuccess);
        expect(Transactionsuccess).toEqual(data.Transactionessage);
        });
     }

}


