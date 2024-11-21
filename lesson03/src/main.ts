//arrays

let arr1 = ["shree",22,true]
let stringArr = ['raj',"ram","siva"]

arr1 = stringArr; //possible
/* stringArr = arr1  //not assignable */

stringArr.push("paru")

arr1.push("names")

// stringArr.unshift(23)//no

//array declarations

let arr = [] //any type
let arr2 :string[] = [] //string[] type
let arr3 :string[]|number[] =[] //wrong decleration
// arr3 = ['one',1]//no
// arr3.push(34)

let newArr:(string|number)[] = []
newArr.push(45) 

let neverArr :[]=[] //type never
// neverArr.push("value")//no


// tuples of defined type

let myTuple :[string,boolean,number]=["string",true,1]
let likearr=["hi",false,2]

// myTuple = likearr//no as likearr may not contain types in specific positions
myTuple[2] = 2000;

//objects
let obj:object = {}

obj = []
obj = myTuple
obj ={}
console.log(typeof obj)
console.log(obj)

let data = {
    name:"sri",
    age:22
}

// data.age = "hari"//no

let copy = {
    name:"raj",
    address:24
}

// data =copy//no

type address ={
    door:number,
    city:string,
    isNRI?:boolean,//optional -->? boolean|undefined
    album:(string|boolean)[]
}

let myAddress:address={
    door:12,
    city:"salem",
    isNRI:false,
    album:["park","rajpark"]
}
let hisAddress:address={
    door:12,
    city:"salem",//we can ignore isNRI as it is also undefined
    album:["park","rajpark"]
}
//interface
interface newAddress{
    door:number,
    city?:string,
    isNRI:boolean,//optional -->? boolean|undefined
    album:(string|boolean)[]
}
let  address1:newAddress={
    door:23,
    // city:"chennai",
    isNRI:false,
    album:["no","yes"]
}

const greetMe = (data:newAddress)=>{
    if(data.city){

        return `Hello I'm from ${data.city?.toUpperCase()} `//optional chaining and checking
    }else return "Hello!"

}
console.log(greetMe(address1))

//enums

enum Grade {
    U =1,
    D,
    C,
    B,
    A
}

console.log(Grade.A) // U=1 is not assigned then index start from 0 and it print 4 for A

