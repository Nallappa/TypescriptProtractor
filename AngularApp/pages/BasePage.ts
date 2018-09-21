/**
 * Created by Nalli
 */

import {browser, element, by, WebElement} from 'protractor';
    
let text : string = '';

export class BasePage {

  public navigateToURL(url) : void{
        browser.get(url);
    }

   public getPageTitle() : string {
   let text : string;
    browser.getTitle().then(function(text){
        return text;
        console.log(text);
     });
     console.log(text);
return text;
//        let text : string ;
//         browser.getTitle().then(
//             function(text : string){
//             return text;
//             console.log(text)
//             },
//             function (error) {
//                 text = "The title of the page is not captured";
//                 return text ;
//         });
//    return text;
    }

   public closebrowser() : void {
        browser.quit();
    }

}
