//utility types

//Partial

interface Employee {
	id: number;
	name: string;
	address: string;
	isVerified?: boolean;
}

const stu1 = (args: Employee, updates: Partial<Employee>): Employee => {
	return { ...args, ...updates };
};

const data = { id: 123, name: "number", address: "salem" };

console.log(stu1(data, { address: "bangalore" }));

//Required and readonly

const sendToDB = (data: Required<Employee>): Employee => {
	return data;
};

const assignUser: Readonly<Employee> = { ...data, isVerified: true };

// assignUser.name = "hari";//no

type Student = "john" | "Jim";

type LetterGrades = "A" | "B" | "C" | "D" | "U";

const student1: Record<Student, LetterGrades> = {
	john: "A",
	Jim: "B",
};

interface Subjects {
	sub1: number;
	sub2: number;
}

const marks: Record<Student, Subjects> = {
	john: { sub1: 78, sub2: 89 },
	Jim: { sub1: 90, sub2: 87 },
};

//Pick and Omit

type Promotion = Pick<Employee, "id" | "name">;

const promotedEmployers: Promotion = {
	id: 23,
	name: "sri",
};

type Transferred = Omit<Employee, "isVerified" | "id">;

const transferredEmployers: Transferred = {
	name: "sri",
	address: "bangalore",
};

//Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

//nonnullable

type PossibleGrades = string | null | undefined | number;

type NamesOnly = NonNullable<PossibleGrades>;

//ReturnType

const createAssign = (title: string, points: number) => {
	return { title, points };
};

type returnAssign = ReturnType<typeof createAssign>;

console.log(createAssign("Student test results average: ", 400));

//Parameters

type AssignParams = Parameters<typeof createAssign>;

const params: AssignParams = ["ram", 100];

const assign1: returnAssign = createAssign(...params);

console.log(assign1);

// Awaited -- assist with Return type of Promise

interface User {
	_id: number;
	username: String;
	email: string;
}
const fetchUsers = async (): Promise<User[]> => {
	const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			if (err instanceof Error) {
				console.log(err.message);
			}
		});
	return data;
};

// type FetchUserReturnType = ReturnType<typeof fetchUsers>//no
type FetchUserReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
