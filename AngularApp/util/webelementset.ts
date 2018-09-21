import {browser, element, by, ElementFinder} from 'protractor';
 import { waitutil } from "../util/waitutil";

export class webelementset extends waitutil {

    public ElementFinder;
    
    public settext (wem : ElementFinder,text : string) : void {
         wem.sendkeys(text);
    }
    

}