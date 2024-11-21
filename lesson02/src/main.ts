let myName:string = "shree"
let album:number |string = "ravi";
let isAdmin:boolean | number; //union types

console.log(album)

const sum = (a:number,b:string)=>{
    return a+b;
}

console.log(sum(23,"hello"))

let useId:string|number ;
let regex:RegExp = /\w+/g