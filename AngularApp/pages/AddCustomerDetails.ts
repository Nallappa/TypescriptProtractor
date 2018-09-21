


import { webelementutil } from "../util/webelementutil";
import { alerthandleutil } from "../util/alerthandleutil";
import { dropdownutil } from "../util/dropdownutil";
 import { waitutil } from "../util/waitutil";
import locator from "../locators/addcustomerlocators";
import data from "../data/Addcustomerdata";

let webutil = new webelementutil();
let wait = new waitutil();
let dropdown = new dropdownutil();
let alertutil = new alerthandleutil();

 export class Addcustomerdetails {

    public static Addcustomerbutton = webutil.Webelementreturn(locator.addcustomer)
    public static Openaccountbutton = webutil.Webelementreturn(locator.openAccount)
    public static SearchCustomerbutton = webutil.Webelementreturn(locator.searchcustomer)
    public static Fnameinput = webutil.Webelementreturn(locator.searchcustomer)
    public static Lnameinput = webutil.Webelementreturn(locator.searchcustomer)
    public static Pcodeinput = webutil.Webelementreturn(locator.searchcustomer)
    public static Addcustomeripbutton = webutil.Webelementreturn(locator.searchcustomer)
    public static Customerdropdown = webutil.Webelementreturn(locator.customer)
    public static Currencydropdown = webutil.Webelementreturn(locator.currency)
    public static Processbutton = webutil.Webelementreturn(locator.processbutton)

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
    };

   public addCustomerInfo() : void {
        wait.WaitForElement(Addcustomerdetails.Fnameinput);
        Addcustomerdetails.Fnameinput.sendKeys(data.fName);
        Addcustomerdetails.Fnameinput.sendKeys(data.lName);
        Addcustomerdetails.Fnameinput.sendKeys(data.pCode);
        Addcustomerdetails.Addcustomeripbutton.click();
        alertutil.acceptalert();
    };

   public openAccount() : void {
        dropdown.Selectbytext("#userSelect option",data.FullName);
        dropdown.Selectbytext("#userSelect option",data.currency);
        Addcustomerdetails.Processbutton.click();
        alertutil.acceptalert();
    };

}