//index signatures -- for accessing objects dynamically

/* type Library = {
	novels: number;
	history: number;
}; */

//setting index signatures
type Library = {
	readonly [index: string]: number;
};

let lib: Library = {
	history: 30,
	novels: 60,
};

let bookName = "novels";
console.log(lib["novels"]);
// console.log(lib[bookName]);//no

/* let totalBooks = (books: Library): number => {
	let count: number = 0;
	for (const book in books) {
		count += books[book]; //no.
	}
	return count;
}; */
let totalBooks = (books: Library): number => {
	let count: number = 0;
	for (const book in books) {
		count += books[book]; //it works after setting a signature
	}
	return count;
};
console.log(totalBooks(lib));

// lib.novels = 50;//no

//accessing elements that doesn't exist
interface Student {
	//[key: string]: string | number | number[] | undefined
	name: string;
	GPA: number;
	classes?: number[];
}

const student: Student = {
	name: "Doug",
	GPA: 3.5,
	classes: [100, 200],
};

// console.log(student.test)

for (const key in student) {
	console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
	console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
	console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "name");

//Alternate for index signatures

// interface Incomes {
//     [key: string]: number
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
	salary: 500,
	bonus: 100,
	sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
	console.log(monthlyIncomes[revenue as keyof Incomes]);
}
