/**
 * Created by Nalli on 27-08-2018.
 */
import {browser, element, by,WebElement,ElementFinder} from 'protractor';
// import { webelementset } from "../util/webelementset";
import { webelementutil } from "../util/webelementutil";
 import { waitutil } from "../util/waitutil";
import data from "../locators/homepagelocators";

let webutil = new webelementutil();
let wait = new waitutil();

export class Mainflow  {

    public static Customerloginbutton = webutil.Webelementreturn(data.Customerbutton)
    public static Managerloginbutton = webutil.Webelementreturn(data.BankManagerbutton)

    public Customerlogin(): void {
        wait.WaitForElement(Mainflow.Customerloginbutton);
        Mainflow.Customerloginbutton.click();
    } 

    public BankManagerlogin(): void {
        wait.WaitForElement(Mainflow.Managerloginbutton);
        Mainflow.Managerloginbutton.click();
    } 
}


// export class webButton extends webelementclick {
    
//     private webelement;
//     constructor(selector){
//         super(selector)
//         this.webelement = selector;
//     }

//     public buttonwebelement() : any {
//         return  this.webelement;
//     }


// }
// export class WebInput extends webelementset {}















// import {browser, element, by} from 'protractor';
// // import { objHomepage } from "../objects/objHomepage";
// import { Mainflow } from "../objects/objHomePage";

// let mainflow = new Mainflow();
// // var waitutil = new waitutil();
// // var Home = new objHomepage();

// export class Homepage {

//         public loginAsBankManager() : void {
//             // waitutil.WaitForElement(Home.Bankmanager())
//             // objHomepage.Bankmanager();
//             mainflow.BankManagerlogin();
//             browser.sleep(2000);
//             // LoginasBankManager.submit();
//     };

// }





















//
// var HomePage = function(){
//
//
//     this.loginAsCustomer = function(){
//         //
//         // if(Generic.VerifyWebelement(element(by.partialButtonText("Customer")))){
//         //
//         //     element(by.partialButtonText("Customer")).click();
//         // }else {
//         //     console.log("loginAscustomerbutton is Not displayed");
//         // }
//
//         element(by.partialButtonText("Customer")).click();
//
//     };
//
//     this.loginAsBankManager = function(){
//
//         element(by.ngClick("manager()")).click();
//
//         // if(Generic.VerifyWebelement( element(by.ngClick("manager()")))){
//         //
//         //     element(by.ngClick("manager()")).click();
//         // } else {
//         //     console.log("loginAsBankManager button is Not displayed");
//         // }
//
//         // return require('../AddCustomerDetails.js');
//
//     };
//
// };
// module.exports = new HomePage();
