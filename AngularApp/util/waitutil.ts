
import {browser, element, by, protractor} from 'protractor';
// import {protractor} from "protractor/built/ptor";


export class waitutil {

    private Webelement ;
    constructor(selector) {
        this.Webelement = selector;
    }

    public AngularWait() : void {
        browser.waitForAngular();
    }

    public WaitForElement() : void  {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(this.Webelement), 30000);
    }

    // public FluentWait(Webelement) : any {
    //     browser.manage().timeouts().implicitlyWait(0);
    //     browser.wait(function () {
    //         browser.sleep(2000);
    //         return  Webelement.isDisplayed()
    //             .then(
    //                 function (isDisplayed) {
    //                     return isDisplayed;
    //                 },
    //                 function (error) {
    //                     return false
    //                 });
    //     }, 20 * 1000);
    // }
    public verifywebelementexist () : boolean {
        return this.Webelement.isDisplayed();
        // expect(element.isDisplayed()).toBe(true);
    }
    // public gettext (Webelement) : string {
    //     return Webelement.gettext();
    //     // expect(element.isDisplayed()).toBe(true);
    // }
    
    // public hasClass (Webelement,cls) :string {
    //     return Webelement.getAttribute('class').then(function (classes) {
    //         return classes.split(' ').indexOf(cls) !== -1;
    //         // expect(hasClass(element(by.name('getoffer')), 'ngDirty')).toBe(true);
    //     });
    // };

}
