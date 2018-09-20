

import {browser,protractor,element, by} from 'protractor';


export class alerthandleutil {
    public EC ;
    public alertDialog ;

    constructor() {
        this.EC = protractor.ExpectedConditions;
        this.alertDialog = browser.switchTo().alert();
    }

      public acceptalert() : void  {
        browser.wait(this.EC.alertIsPresent(), 5000);
        this.alertDialog.accept();
    }

    public dismissalert() : void {
        browser.wait(this.EC.alertIsPresent(), 5000);
        this.alertDialog.dismiss();
    }

    public alerttext() : void {
        browser.wait(this.EC.alertIsPresent(), 5000);
       this.alertDialog.getText().then(function (text) {
            return text;
        })
    }

    public alertsettext(text : string) {
        browser.wait(this.EC.alertIsPresent(), 5000);
        this.alertDialog.sendKeys(text);
    }

}
