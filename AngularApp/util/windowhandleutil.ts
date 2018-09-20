
import {browser, element, by, WebElement} from 'protractor';

export class windowhandleutil {

    public Getwindowhandles() : void {
        let handlePromise = browser.driver.getAllWindowHandles();
        handlePromise.then(function (handles) {
            let  parentHandle = handles[0];
            let popUpHandle = handles[1];
            // Change to new handle
            browser.driver.switchTo().window(popUpHandle);
        });
    }
}
