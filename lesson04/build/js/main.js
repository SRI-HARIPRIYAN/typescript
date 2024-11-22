"use strict";
//Type aliases
//Literal types
let userName;
userName = "Dave";
//functions
//arrow functions
const add = (a, b) => {
    return a + b;
};
const clog = (message) => {
    console.log(message);
};
clog(add(10, 20));
clog("Hello there");
const subtract = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    return a * b;
};
clog(multiply(10, 30));
//optional parameter
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
console.log(addAll(2, 3));
//default parameters
const sumAll = (a = 100, b, c = 10) => {
    return a + b + c;
};
console.log(sumAll(10, 20, 30));
console.log(sumAll(10, 20));
console.log(sumAll(undefined, 10, 40));
//rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3, 4, 5));
//never type -- can happen and may not happen
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinte = () => {
    //return never as it runs infinitely
    let i = 1;
    while (true) {
        i++;
        if (i == 100)
            break; //added break so it returns void
    }
};
const checkType = (num) => {
    //no return statement
    if (typeof num === "string")
        return "string";
    if (typeof num === "number")
        return "number";
    return createError("Never type returns");
};
//custom type gurards
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const checktype = (num) => {
    //no return statement
    if (typeof num === "string")
        return "string";
    if (isNumber(num))
        return "number";
    return createError("Never type returns");
};
