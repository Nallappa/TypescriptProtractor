
// import { browser, element, by, ExpectedConditions, protractor,row,column} from 'protractor'
import { browser, element, by, ExpectedConditions, protractor,ElementFinder} from 'protractor'
import { webelementutil } from "../util/webelementutil";
import { alerthandleutil } from "../util/alerthandleutil";
import { dropdownutil } from "../util/dropdownutil";
import { waitutil } from "../util/waitutil";
import locator from "../locators/addcustomerlocators";
import data from "../data/Addcustomerdata";

let webutil = new webelementutil();
let wait = new waitutil();
let dropdown = new dropdownutil();

 export class Addcustomerdetails {
    public static Addcustomerbutton = webutil.Webelementreturn(locator.addcustomerbutton)
    public static Openaccountbutton = webutil.Webelementreturn(locator.openAccount)
    public static SearchCustomerbutton = webutil.Webelementreturn(locator.searchcustomer)
    public static Fnameinput = webutil.Webelementreturn(locator.fName)
    public static Lnameinput = webutil.Webelementreturn(locator.lName)
    public static Pcodeinput = webutil.Webelementreturn(locator.pCode)
    public static Addcustomeripbutton = webutil.Webelementreturn(locator.addcustomer)
    public static Customerdropdown = webutil.Webelementreturn(locator.customer)
    public static Currencydropdown = webutil.Webelementreturn(locator.currency)
    public static Processbutton = webutil.Webelementreturn(locator.processbutton)
    public static Searchcustomerinput = webutil.Webelementreturn(locator.searchcustomerinp)
    public static Cutomertable = webutil.Webelementreturn(locator.customertable)

    public gotoAddCustomer() : void {
       wait.WaitForElement(Addcustomerdetails.Addcustomerbutton);
        Addcustomerdetails.Addcustomerbutton.click();
    };

   public gotoOpenAccount() : void {
        wait.WaitForElement(Addcustomerdetails.Openaccountbutton);
        Addcustomerdetails.Openaccountbutton.click();
    };

   public gotoSearchCustomer() : void {
        wait.WaitForElement(Addcustomerdetails.SearchCustomerbutton);
        Addcustomerdetails.SearchCustomerbutton.click();
        browser.sleep(5000);
    };

   public addCustomerInfo() : void {
        wait.WaitForElement(Addcustomerdetails.Fnameinput);
        Addcustomerdetails.Fnameinput.sendKeys(data.fName);
        Addcustomerdetails.Lnameinput.sendKeys(data.lName);
        Addcustomerdetails.Pcodeinput.sendKeys(data.pCode);
        Addcustomerdetails.Addcustomeripbutton.click();
        let alertutil = new alerthandleutil();
        alertutil.acceptalert();
    };

   public openAccount() : void {
        wait.WaitForElement(Addcustomerdetails.Processbutton);
        dropdown.Selectbytext("#userSelect option",data.FullName);
        dropdown.Selectbytext("#currency option",data.currency);
        wait.WaitForElement(Addcustomerdetails.Processbutton);
        Addcustomerdetails.Processbutton.click();
        let alertutil = new alerthandleutil();
        alertutil.acceptalert();
    };

    public validateCustomerRecords() : void {
        wait.WaitForElement(Addcustomerdetails.Searchcustomerinput);
        Addcustomerdetails.Searchcustomerinput.sendKeys(data.fName);
        element.all(by.repeater("cust in Customers").column("cust.fName")).getText().then(function(text){
            // console.log(text.trim());
            expect(text).toEqual(data.fName);
        })
    };
}
