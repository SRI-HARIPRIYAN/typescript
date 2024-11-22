"use strict";
//type assertions and casting
//less specific types
let a = "Hai";
let b = a;
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let val = addOrConcat(3, 2, "concat"); //assertions --> as string : we r explicitly telling that it will return a string type as we know more about this code working
let nextVal = addOrConcat(3, 2, "concat"); //issue here is that it will return string but we explicity given string so ts believe us and ignore this error
// 10 as  string //no
//double casting
10;
//DOM
//Specific: Element < HTMLElement < HTMLImageElement
const img = document.querySelector("img");
// const oneimg = document.getElementById("#img")!;   // ! is a non-null assertion
const oneimg = document.getElementById("#img"); //DONT USE ! WITH ASSERTIONS
// img.src// no unless we give assertions that we know what it is
img.src;
oneimg.src; //it works with non-null assertion
const thenimg = document.getElementById("#img"); //cant be used in react
