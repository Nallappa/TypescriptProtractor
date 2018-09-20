

// import {browser, element, by} from 'protractor';
import {browser, element, by} from 'protractor';

export class Newbrowser {

   public OpenNewBrowser(url) : void {
        let newBrowser = browser.forkNewDriverInstance();
        //Opens a URL in the 2nd browser instance
        newBrowser.get(url);
    }

}