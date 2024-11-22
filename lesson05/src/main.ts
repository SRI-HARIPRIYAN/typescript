//type assertions and casting

type One = string;
type Two = string | number;
type Three = "Hello";

//less specific types

let a: One = "Hai";
let b = a as One;
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
	a: number,
	b: number,
	c: "add" | "concat"
): number | string => {
	if (c === "add") return a + b;
	return "" + a + b;
};

let val: string = addOrConcat(3, 2, "concat") as string; //assertions --> as string : we r explicitly telling that it will return a string type as we know more about this code working

let nextVal: number = addOrConcat(3, 2, "concat") as number; //issue here is that it will return string but we explicity given string so ts believe us and ignore this error

// 10 as  string //no

//double casting
10 as unknown as string;

//DOM
//Specific: Element < HTMLElement < HTMLImageElement
const img = document.querySelector("img") as HTMLImageElement;
// const oneimg = document.getElementById("#img")!;   // ! is a non-null assertion
const oneimg = document.getElementById("#img") as HTMLImageElement; //DONT USE ! WITH ASSERTIONS

// img.src// no unless we give assertions that we know what it is
img.src;

oneimg.src; //it works with non-null assertion

const thenimg = <HTMLImageElement>document.getElementById("#img"); //cant be used in react
