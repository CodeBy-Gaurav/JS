// TYPES OF DATATYPES

//primitive (call by value )
//copy of value is called no change in address

// 7 types :String, Number,Boolean, NUll, Undefined, Symbol, BigInt


//non-Primitive (call by reference)
//dirent change ini address

// 3 types : Array, Objects, Functions

//declaration of datatypes
const score = 30
const marks = 35.5

const isLoggedIn = true
const temp = null
let emailId;

const id = Symbol('987')
const anotherId = Symbol('987')

console.log(id === anotherId) 
// value is same but they are differt as Symbol datatype gives unique values


const heros = ["Saktiman", "perman","chota bheem"]
console.log( heros)


let myObj = {

    name : 'gaurav',
    age : 20,
}
console.log(myObj)

let myFunction = function(){
    console.log("hello web")
}

console.log(myFunction)

//stydy material
// https://262.ecma-international.org/5.1/#sec-11.4.3