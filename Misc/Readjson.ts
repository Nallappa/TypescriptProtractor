//1.Reading Json file

import { browser, element, by, ExpectedConditions, protractor} from 'protractor'
import { Alert, WebElement } from 'selenium-webdriver';
describe('Protractor Typescript Demo', function() {
	const fs = require('fs');
	let sampleMap = new Map();
	browser.ignoreSynchronization = true; // for non-angular websites
	it('Javascript executions', function() {
		// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);
		// navigate to the url
		browser.get("https://google.com");

		const fs = require('fs');
		// read the file into raw data
		let rawdata = fs.readFileSync('D:\\Protractor Demo\\cherchertech.json');

		// parse the raw data into meaningful JSON format
		let web = JSON.parse(rawdata);

		let author = web["author"]
		browser.sleep(1).then(function(){
			console.log("\n\n###### Author value ########\n")
			console.log(author)
		})

		let website = author["website"]
		browser.sleep(1).then(function(){
			console.log("\n\n****** Website value ******\n")
			console.log(website)
		})

		let taglineBySteps = website["tagline"]
		browser.sleep(1).then(function(){
			console.log("\n\n@@@@@@ tagline value @@@@@\n")
			console.log(taglineBySteps)
        })
        
		let taglineDirect = web["author"]["website"]["tagline"]
		browser.sleep(1).then(function(){
			console.log("\n\n^^^^^^^ tagline value  Direct^^^^^^\n")
			console.log(taglineDirect)
		})
		element(by.name("q")).sendKeys(taglineBySteps);
	});
});