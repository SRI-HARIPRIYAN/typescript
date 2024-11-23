//classes
class User {
	/* userName:string;
	age:number;
	role:string;
	designation:string; */ // no need of this if we specified the access specifers in constructor

	lang!: string; //can be used or not be  used

	constructor(
		public userName: string,
		private age: number,
		protected role: string,
		public designation: string = "backend" //we can also set default parameters or just default values inside the constructor
	) {
		/* this.userName = userName;
		this.age = age;
		this.role = role;
		this.designation = designation; */
		// we can remove this as it will create redundant assignments
	}

	getAge() {
		return this.age;
	}
}

const user = new User("shree", 23, "dev");

// console.log(user.age);//no
console.log(user.getAge());

//subclasses

class Student extends User {
	constructor(
		public department: string,
		userName: string,
		age: number,
		role: string
	) {
		super(userName, age, role);
		this.department = department; //optional line
	}

	getLang() {
		return this.designation;
	}
}

console.log(new Student("cse", "hari", 4, "frontend").getLang());

//interfaces
interface Teacher {
	name: string;
	subject: string;
	teach(className: string): string;
}

class Period implements Teacher {
	name: string;
	subject: string;
	constructor(name: string, subject: string) {
		this.name = name;
		this.subject = subject;
	}
	teach(className: string): string {
		return ` ${this.name} teaches ${this.subject} for class ${className}`;
	}
}

const teacher1 = new Period("Sir", "cs");
console.log(teacher1.teach("1st standard"));

//static class members

class College {
	static students: number = 0;
	static getCount(): number {
		return College.students;
	}
	public id: number;
	constructor(public name: string) {
		this.name = name;
		this.id = ++College.students;
	}
}

const std1 = new College("sri");
const std2 = new College("hari");
console.log(College.getCount());
console.log(std1.id);
console.log(std2.id);

//getters and setters
class Books {
	private books: string[];

	constructor() {
		this.books = [];
	}
	public get data(): string[] {
		return this.books;
	}
	public set data(values: string[]) {
		if (
			Array.isArray(values) &&
			values.every((val) => typeof val === "string")
		) {
			this.books = values;
		} else {
			throw new Error("Given data is not an array of strings");
		}
	}
}

const lib = new Books();
console.log(lib.data);
lib.data = ["23", "32", "446"];
console.log(lib.data);
lib.data = [...lib.data, "23", "32", "446"];
console.log(lib.data);

lib.data = "hello"; //throws error
