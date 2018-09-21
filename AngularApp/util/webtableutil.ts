 
 import { browser, element, by, ExpectedConditions, protractor,ElementFinder} from 'protractor'

 browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("7");
        element(by.id("gobutton")).click();
        element(by.model("first")).sendKeys("4");
        element(by.model("second")).sendKeys("6");
        element(by.id("gobutton")).click();
        console.log("Printing the Entire table data in new line")
        element.all(by.repeater("result in memory")).getText().then(function(rows){
            var noOfItems = rows.length;
            for(var i=0; i<noOfItems; i++){
               var table =  element(by.repeater("result in memory").row(i)).getText();
                table.then(function(text){
                   console.log(text);
                });
            }
        })

        // import {browser, by, ElementFinder } from "protractor";

        export class Select {
            // webtable
            webTable:ElementFinder;
            //constructor  accepts dropdown as element
            constructor(webTableElement:ElementFinder) {
               this.webTable = webTableElement;
            }
        
            // get the number of rows present
            public  getRowCount(){
                console.log("Fetching number rows")
                return this.webTable.all(by.css("tr")).count()
            }
        
            // get the number of columns present
            public getColumnCount(){
                return this.webTable.all(by.css("th")).count()
                // if you donot have header then above will not work
                // use this if no headre is there
                // return this.webTable.all(by.xpath("//tr[0]/td")).count()
            }
        
            // get the nuber of rows and columns and return it as Map
            public getTableSize(){
                return {row: this.webTable.all(by.css("tr")).count(),
                 columns: this.webTable.all(by.css("th")).count()}
            }
        
            // get row data and return it as list
            public rowData(rowNumber:number){
                if(rowNumber == 0){
                    throw new Error("Row number starts from 1");
                }
                rowNumber = rowNumber + 1;
                return this.webTable.all(by.xpath("//tr["+rowNumber+"]/td")).getText()
            }
        
            // get the column data and return as list
            public columnData(columnNumber:number){
                if(columnNumber == 0){
                    throw new Error("Column number starts from 1");
                }
                columnNumber = columnNumber + 1;
                return this.webTable.all(by.xpath("//tr/td["+columnNumber+"]")).getText()
            }
        
            // get all the data from the table
            public getAllData(){
                return this.webTable.all(by.xpath("td")).getText()
            }
        
            // verify presence of the text/data
            public presenceOfData(data:string){
                // verify the data by getting the size of the element matches based on the text/data passed
                return this.webTable.all(by.xpath("//td[normalize-space(text())='"+data+"']"))
                .size().then(function(dataSize){
                    if(dataSize > 0){
                        return true;
                    }
                    else{
                        return false
                    }
                })
            }
            // get the data from a specific cell
            public getCellData(rowNumber:number, columnNumber:number) {
                if(rowNumber == 0){
                    throw new Error("Row number starts from 1");
                }
                rowNumber = rowNumber+1;
                let cellData = this.webTable.element(by.xpath
                ("//tr["+rowNumber+"]/td["+columnNumber+"]")).getText();
                return cellData;
            }
            // click checkbox with protractor
            public clickCheckBox(data:string){
                this.webTable.element(by.xpath
                ("//td[normalize-space(text())='"+data+"']/..//input")).click()
            }
         }