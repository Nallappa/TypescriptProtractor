/**
 * Created by Nalli on 27-08-2018.
 */
import {browser, element, by,WebElement} from 'protractor';
import { webelementset } from "../util/webelementset";
import { webelementutil } from "../util/webelementutil";
import { webelementclick } from "../util/webelementclick";
// import { selectwrapper } from "../util/dropdownutil";
import data from "../locators/homepagelocators";


// let dropdown = new selectwrapper();

export class webButton extends webelementclick {
    
    private webelement;
    constructor(selector){
        super(selector)
        this.webelement = selector;
    }

    public buttonwebelement() : any {
        return  this.webelement;
    }


}
export class WebInput extends webelementset {}

let webutil = new webelementutil();

export class Mainflow  {
    public BankManagerlogin(): void {
    //  let bankmanager =  new webelementclick(webutil.Webelementreturn(data.BankManagerbutton));
    webutil.Webelementreturn(data.BankManagerbutton).click;
     new webButton(webutil.Webelementreturn(data.BankManagerbutton)).clickwebelement;
    } 

    public Customerlogin(): void {
        webutil.Webelementreturn(data.Customerbutton).click
    } 


}


















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
