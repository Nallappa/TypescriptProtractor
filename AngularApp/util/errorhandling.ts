import { browser, element, by } from "protractor";
describe("Errors in Protractor",function(){

  browser.ignoreSynchronization = true; // for non-angular websites
  it("Error handling in protractor",function(){

    browser.get("https://google.com")
    let flag = true
    element(by.name("btnIii")).getAttribute("aria-label")
    .then(null, function(err){
      flag = false
      console.log("The error occured is : "+ err.name)
    })
    .then(function(aria){
      if(flag){
        console.log("****")
        console.log(aria)
      }//end of flag if block
    })
  });
})