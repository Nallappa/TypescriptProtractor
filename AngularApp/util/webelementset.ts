import {browser, element, by, WebElement} from 'protractor';
 import { waitutil } from "../util/waitutil";

export class webelementset extends waitutil {

    private WebElement;

    constructor(selector) {
        super(selector);
        this.WebElement = selector;
    }
    
    public settext (text : string) : void {
         this.WebElement.sendkeys(text);
    }
    

}