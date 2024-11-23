"use strict";
//classes
class User {
    constructor(userName, age, role, designation = "backend" //we can also set default parameters or just default values inside the constructor
    ) {
        this.userName = userName;
        this.age = age;
        this.role = role;
        this.designation = designation;
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
    constructor(department, userName, age, role) {
        super(userName, age, role);
        this.department = department;
        this.department = department; //optional line
    }
    getLang() {
        return this.designation;
    }
}
console.log(new Student("cse", "hari", 4, "frontend").getLang());
class Period {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    teach(className) {
        return ` ${this.name} teaches ${this.subject} for class ${className}`;
    }
}
const teacher1 = new Period("Sir", "cs");
console.log(teacher1.teach("1st standard"));
//static class members
class College {
    static getCount() {
        return College.students;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++College.students;
    }
}
College.students = 0;
const std1 = new College("sri");
const std2 = new College("hari");
console.log(College.getCount());
console.log(std1.id);
console.log(std2.id);
//getters and setters
class Books {
    constructor() {
        this.books = [];
    }
    get data() {
        return this.books;
    }
    set data(values) {
        if (Array.isArray(values) &&
            values.every((val) => typeof val === "string")) {
            this.books = values;
        }
        else {
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
