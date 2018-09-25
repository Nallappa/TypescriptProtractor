/**
 * Created by Nalli
 */

import {browser, element, by, WebElement} from 'protractor';
import  commondata  from "../data/commondata";
    
let text : string = '';

export class BasePage {

  public navigateToURL(url) : void{
        browser.get(url);
    }

   public getPageTitle() : void {
    let result;
    browser.wait(function () {
        return browser.getCurrentUrl().then(function (urltitle) {
            // if (url.indexOf("?") > -1) {
            //     url = url.split("?")[0]; // Strip the querystring.
            // }
            result = urltitle; 
        });
    }, 10000, "URL wasn't obtained");
    console.log(result);
    expect(commondata.urlname).toBe(result);
    // return result;
}

//    return browser.getTitle().then(function(text){
//         console.log("Inside the promise");
//         return text;
//      });
//      console.log("outside the promise");
//      return text;
    //    let text : string ;
    //    browser.getTitle().then(
    //         function(text){
    //         console.log(text)
    //         return text;
    //         },
        //     function (error) {
        //         text = "The title of the page is not captured";
        //         return text ;
        // });
//    return text;
    // }

   public closebrowser() : void {
        browser.quit();
    }

}
