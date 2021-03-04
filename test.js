// mocha test  example 
///////////

" use strict";

const assert = require("assert");
const fun = require('./script.js');


describe("checkprime", function() {
            it(" 83 is prime ", function() {
                assert.strictEqual(fun.checkprime(83), true);
            });



            checkprime(83);
            //b. Now write a program that prompts user to input a number and calls the function
            //checkPrime to see if the entered number is a prime number or not.