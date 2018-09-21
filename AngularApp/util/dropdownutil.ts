/**
 * Created by Nalli on 27-08-2018.
 */

import {browser, element, by,WebElement,ElementFinder} from 'protractor';
import { isNull } from 'util';


export class dropdownutil {
    
    public : ElementFinder;
    public Selectbytext(locator: string,dropdownvalue : string) : void {
        // element.all(by.css("#userSelect option")).filter(function(elem, index) {
           element.all(by.css(locator)).filter(function(elem, index) {
            return elem.getText().then(function(text) {
              return text === dropdownvalue;
            //   return text === 'Nallappa';
            });
          }).first().click();
    }
        public Getdropdownvalues(locator: string) {
            // let acc;
            // element.all(by.css("#userSelect option")).each(function(elem, index) {
            //     element.all(by.css(locator)).reduce(function(elem, index) {
            //     return elem.getText().then(function(text) {
            //       return Allvalues + text + ' ';
            //     });
            //   })
              element.all(by.css(locator)).reduce(function(acc, elem) {
                return elem.getText().then(function(text) {
                  return acc + text + ' ';
                  console.log(acc);
                });
              }, '');
        }

        public Selectbyvalue(locator: string,value : string) : void {
          element.all(by.css(locator)).filter(function(elem, index) {
            return elem.getAttribute("value").then(function(text) {
              return text === value;
            });
          }).first().click();
        }
        
        public similarmethods() : void{
            element.all(by.css("#userSelect option")).then(function(text) {
                console.log("the values lenght is" +text.length)
                console.log("the values are " +text) 
                for(let i=1; i<text.length; i++) {
                    text[i].getText().then(function(dropdownvalue){
                        console.log("the values are " +dropdownvalue) 
                        if(dropdownvalue === "Harry Potter"){
                            text[i].click()
                        }
                    });
                }
                 console.log("the value attributes")
                for(let i=1; i<text.length; i++) {
                    text[i].getAttribute("value").then(function(dropdownvalue){
                        console.log("the attributes are " +dropdownvalue) 
                        if(dropdownvalue === '2'){
                            text[i].click()
                            browser.sleep(5000);
                        }
                    });
                }

                let value = 2;
                element(by.model("custId")).element(by.css("[value='"+ value +"']")).click()
                element(by.model("custId")).element(by.css("[value='"+ value +"']")).click()
                this.Webelement.all(by.css('option[value="' + value + '"]')).click();
            });

        }

     // let selector = "#userSelect option";
    // Drop.Getdropdownvalues(selector);
    // Drop.Selectbyvalue(selector,'3')
}
      