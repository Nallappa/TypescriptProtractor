
import {browser, element, by, protractor,ElementFinder,WebElement} from 'protractor';
// import {protractor} from "protractor/built/ptor";


export class waitutil {

    public ElementFinder;
//     //constructor  accepts dropdown as element
//     constructor(webelement:ElementFinder) {
//        this.ElementFinder = webelement;
//     }

    public AngularWait() : void {
        browser.waitForAngular();
    }

    public WaitForElement(wem :ElementFinder ) : void  {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(wem), 60000);
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
