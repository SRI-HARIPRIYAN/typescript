//Type aliases

type StringorNumber = string | number;

type StringorNumberArray = (string | number)[];

type userId = StringorNumber;

type userDetails = {
	name: string;
	age: number;
	isAdmin: boolean;
};

//Literal types

let userName: "John" | "Dave" | "Lolly";

userName = "Dave";

//functions

//arrow functions
const add = (a: number, b: number): number => {
	return a + b;
};

const clog = (message: any): void => {
	console.log(message);
};

clog(add(10, 20));
clog("Hello there");

const subtract = (a: number, b: number): number => {
	return a + b;
};

// type mathFunction = (a: number,b: number)=>number;
//type interfaces

interface mathFunction {
	(a: number, b: number): number;
}

const multiply: mathFunction = (a, b) => {
	return a * b;
};
clog(multiply(10, 30));

//optional parameter

const addAll = (a: number, b: number, c?: number): number => {
	if (typeof c !== "undefined") {
		return a + b + c;
	}
	return a + b;
};
console.log(addAll(2, 3));

//default parameters
const sumAll = (a: number = 100, b: number, c: number = 10): number => {
	return a + b + c;
};

console.log(sumAll(10, 20, 30));
console.log(sumAll(10, 20));
console.log(sumAll(undefined, 10, 40));

//rest parameters

const total = (a: number, ...nums: number[]): number => {
	return a + nums.reduce((prev, curr) => prev + curr);
};

console.log(total(1, 2, 3, 4, 5));

//never type -- can happen and may not happen

const createError = (errMsg: string) => {
	throw new Error(errMsg);
};

const infinte = () => {
	//return never as it runs infinitely
	let i = 1;
	while (true) {
		i++;
		if (i == 100) break; //added break so it returns void
	}
};

const checkType = (num: string | number): string => {
	//no return statement
	if (typeof num === "string") return "string";
	if (typeof num === "number") return "number";
	return createError("Never type returns");
};

//custom type gurards
const isNumber = (value: any): boolean => {
	return typeof value === "number" ? true : false;
};

const checktype = (num: string | number): string => {
	//no return statement
	if (typeof num === "string") return "string";
	if (isNumber(num)) return "number";
	return createError("Never type returns");
};
