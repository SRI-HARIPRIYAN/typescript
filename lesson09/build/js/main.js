"use strict";
//utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const stu1 = (args, updates) => {
    return Object.assign(Object.assign({}, args), updates);
};
const data = { id: 123, name: "number", address: "salem" };
console.log(stu1(data, { address: "bangalore" }));
//Required and readonly
const sendToDB = (data) => {
    return data;
};
const assignUser = Object.assign(Object.assign({}, data), { isVerified: true });
const student1 = {
    john: "A",
    Jim: "B",
};
const marks = {
    john: { sub1: 78, sub2: 89 },
    Jim: { sub1: 90, sub2: 87 },
};
const promotedEmployers = {
    id: 23,
    name: "sri",
};
const transferredEmployers = {
    name: "sri",
    address: "bangalore",
};
//ReturnType
const createAssign = (title, points) => {
    return { title, points };
};
console.log(createAssign("Student test results average: ", 400));
const params = ["ram", 100];
const assign1 = createAssign(...params);
console.log(assign1);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
