//Generic types
//We dont know what type we gonna pass

const fun = (arg: string): string => arg; //function that takes a string arg and return the arg again

//Generic typs
const generalFunction = <T>(args: T): T => {
	return args;
};

const isObj = <T>(args: T) => {
	return typeof args === "object" && !Array.isArray(args) && args !== null;
};

console.log(isObj("shri"));
console.log(isObj(45));
console.log(isObj([46, 7, 8]));
console.log(isObj({ name: "sri" }));
console.log(isObj(null));
console.log(isObj(undefined));

const isTrue = <T>(args: T): { args: T; is: boolean } => {
	if (Array.isArray(args) && !args.length) {
		return { args, is: false };
	}
	if (isObj(args) && !Object.keys(args as keyof T).length) {
		return { args, is: false };
	}
	return { args, is: !!args };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

interface isTrueResult<T> {
	value: T;
	is: boolean;
}
const isTrueCheck = <T>(args: T): isTrueResult<T> => {
	if (Array.isArray(args) && !args.length) {
		return { value: args, is: false };
	}
	if (isObj(args) && !Object.keys(args as keyof T).length) {
		return { value: args, is: false };
	}
	return { value: args, is: !!args };
};

interface hasId {
	id: number;
}

const loggedUser = <T extends hasId>(user: T): boolean => {
	return Number.isInteger(user.id);
};

console.log(loggedUser({ id: 34, name: "sri" }));

const filterUsers = <T extends hasId, K extends keyof T>(
	users: T[],
	key: K
): T[K][] => {
	return users.map((user) => user[key]);
};

let userData = [
	{
		userId: 1,
		id: 1,
		title: "delectus aut aut78965413312em",
		completed: false,
	},
	{
		userId: 2,
		id: 2,
		title: "delectu6871578s aut+ autem",
		completed: false,
	},
	{
		userId: 3,
		id: 3,
		title: "delectus auslfhjt autem",
		completed: false,
	},
	{
		userId: 4,
		id: 4,
		title: "deledgdkjhsfctus aut autem",
		completed: false,
	},
];

console.log(filterUsers(userData, "title"));

class Student<T> {
	private id: T;
	constructor(val: T) {
		this.id = val;
	}
	public get data(): T {
		return this.id;
	}

	public set data(val: T) {
		this.id = val;
	}
}

/* const st1 = new Student("shree");
console.log(st1.data);
st1.data = "hari";
console.log(st1.data); */
// st1.data = 12 //no //as ts infered the type with 1st value assigned

const st2 = new Student<(String | number | boolean)[]>(["shree"]);
console.log(st2.data);
st2.data = [1, 2, 3];
console.log(st2.data);
