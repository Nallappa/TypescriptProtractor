import {browser, element, by, WebElement} from 'protractor';
 import { waitutil } from "../util/waitutil";

export class webelementclick extends waitutil {

    private WebElement;
    constructor(selector)  {
        // this.WebElement = selector;
        super(selector);
        this.WebElement = selector;
    }
    public clickwebelement () : void {
        this.WebElement.click();
    }
    
}