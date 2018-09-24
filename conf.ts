

import {Config} from 'protractor';
import { browser, element, by, ExpectedConditions, protractor,ElementFinder} from 'protractor'

import {HtmlReporter} from 'protractor-beautiful-reporter';
const { SpecReporter } = require('jasmine-spec-reporter');
const jasmineReporters = require('jasmine-reporters');
const HTMLReport = require('protractor-html-reporter-2');
const fs = require('fs-extra');

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  getPageTimeout : 1000, //for page timeouts
    // specs: ['./AngularApp/spec/Customerspec.js'],
    specs: ['./AngularApp/spec/BankManagerLoginspec.js'],
    
  seleniumAddress: 'http://localhost:4444/wd/hub',
//   params: {
//     login: {
//         user: 'protractor-br',
//         password: '#ng123#'
//     }
// },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000, showColors: true,
        isVerbose: true,
        includeStackTrace: true
    },
//     suites: {
//       smoke: ['./smoke/!*.spec.js'],
//       regression: ['./regression/!*.spec.js'],
//       functional: ['./functional/!*.spec.js'],
//       all: ['./!*!/!*.spec.js'],
//       selected: ['./functional/addcustomer.spec.js','./regression/openaccount.spec.js'],
//   //    protractor protractor.conf.js --suite smoke //to run specific file
// },

onPrepare() {
  fs.emptyDir('AngularApp/Reports', (err) => { err && console.log(err); });
  const jasmineEnv = jasmine.getEnv();
  const specReporter = new SpecReporter({ spec: { displayStacktrace: true } });
  const xmlReporter = new jasmineReporters.JUnitXmlReporter({
    consolidateAll: true,
    savePath: './AngularApp/Reports',
    filePrefix: 'e2exmlresults'
  });
  const screenshotReporter = {
    specDone: function (result) {
      if (result.status === 'failed') {
        browser.getCapabilities().then(function (caps) {
          const browserName = caps.get('browserName');

          browser.takeScreenshot().then(function (png) {
            const stream = fs.createWriteStream('AngularApp/Reports/' + browserName + '-' + result.fullName + '.png');
            stream.write(new Buffer(png, 'base64'));
            stream.end();
          });
        });
      }
    }
  };
  jasmineEnv.addReporter(specReporter);
  jasmineEnv.addReporter(xmlReporter);
  jasmineEnv.addReporter(screenshotReporter);
},
onComplete: function() {
  let browserName, browserVersion, platform;
  const capsPromise = browser.getCapabilities();

  capsPromise.then(function (caps) {
    browserName = caps.get('browserName');
    browserVersion = caps.get('version');
    platform = caps.get('platform');
    const testConfig = {
      reportTitle: 'Protractor Test Report',
      outputPath: './AngularApp/Reports',
      outputFilename: 'ProtractorTestReport',
      screenshotPath: '.',
      testBrowser: browserName,
      browserVersion: browserVersion,
      modifiedSuiteName: false,
      screenshotsOnlyOnFailure: true,
      testPlatform: platform
    };
    new HTMLReport().from('AngularApp/Reports/e2exmlresults.xml', testConfig);
  });
}     
};




// console.log("Started");
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }

//     @enumerable(true)
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// function enumerable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         descriptor.enumerable = value;
//     };
// }

// let v = new Greeter("Yes its done");
// console.log(v.greet());

//
// let color: any = "blue";
// enum Response {
//     No = 0,
//     Yes = 1,
// }
//
//  class Nalli {
//      static  pa = "num"
//      // console.log(Response.No);
//      public val : string ="prot";
//
//      myAdd: (baseValue: string, increment: string) => string =  function(x, y) {
//         let val: string = color;
//         console.log(Nalli.pa);
//          console.log(Response.No);
//          return x+y;
//      }
//
// }
//
// class two extends Nalli {
//
//   function(val1:string,val2:string) : string {
//
//     return val1;
//   }
//
// }
//
// console.log(Response.No);
// let t = new two;
// let nalli = new Nalli();
//  console.log(nalli.val);
// console.log(nalli.myAdd("ss","ss") + color);



//
// class Grid {
//     // static origin = {x: 2, y: 3};
//      static x = 2;
//      static y = 3;
//     calculateDistanceFromOrigin(point: {x: number; y: number;}) {
//         let xDist = (point.x - Grid.x);
//         let yDist = (point.y - Grid.y);
//         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
//     constructor (public scale: number) { }
// }
//
// let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale
//
// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));






































































































