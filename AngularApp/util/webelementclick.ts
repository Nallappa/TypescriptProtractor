import {browser, element, by, WebElement,ElementFinder} from 'protractor';
 import { waitutil } from "../util/waitutil";

export class webelementclick extends waitutil {

    // private WebElement;
  public ElementFinder;
    //constructor  accepts dropdown as element
    // constructor(webelement:WebElement) {
    //     super(webelement)
    //    this.WebElement = webelement;
    // }

    // constructor(selector)  {
    //     // this.WebElement = selector;
    //     super(selector);
    //     this.WebElement = selector;
    // }
    public clickwebelement (wem : ElementFinder) : void {
        wem.click();
    }
    
}