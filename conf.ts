

import {Config} from 'protractor';
export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },

  // suites:{
  //   smoke:'.spec.js',
  //   sanity:['./AngularApp/spec/spec1.js','./AngularApp/spec/spec2.js']
  // // protractor protractor.conf.js --suite smoke
  // },
  
    specs: [ 'spec.js' ],

  seleniumAddress: 'http://localhost:4444/wd/hub',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },

    onPrepare: () => {
        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    },
  noGlobals: true,
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






































































































