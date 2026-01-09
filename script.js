// const fruits = require("../Sample");

// import { sum } from "./math";

// Writing Some Code
let str1 = "Antarikshya Mitra";
console.log(`Author: ${str1}`);
console.log(`Working and Understanding Backend Engineering`);

//  PROCESS OBJECT

// console.log(process.argv);
// for(let i=2;i<process.argv.length;i++)
// {
//     console.log(`Hello User: ` + process.argv[i]);
// }

// MODULE EXPORT 

// const someValue = require("./math");
// console.log(someValue);
// console.log(someValue.sum(2,4));

// MODULAR PROGRAMMING
// const fruit = require("C:/Users/ANTARIKSHYA/OneDrive/Desktop/Web Dev/Sample");
// console.log(`Apple Info:  ${fruit[0].Color}`);
// console.log(`Orange Info:  ${fruit[1].Color}`);
// console.log(`Mango Info: ${fruit[2].Color}`);


// USING PACKAGES FROM NPM
// const figlet = require('figlet'); or // import figlet from 'figlet';
// figlet("Antarikshya Mitra",function(err,data) {
//     if(err) {
//         console.log("Something Went Wrong");
//         console.log(dir);
//         return;
//     }
//     console.log(data);
// });

// Package.JSON

// Contains INformation and Meta-Data about Dependencies, Sub Dependencies
// Also Imports Necessary Package.json for installing sub-dependencies and required packages


// Import Export

import {sum,PI,mul} from "./math.js";
console.log(PI,sum(2,5));