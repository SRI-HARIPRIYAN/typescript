"use strict";
//index signatures -- for accessing objects dynamically
let lib = {
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
let totalBooks = (books) => {
    let count = 0;
    for (const book in books) {
        count += books[book]; //it works after setting a signature
    }
    return count;
};
console.log(totalBooks(lib));
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
