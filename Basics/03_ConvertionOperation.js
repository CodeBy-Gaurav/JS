let score = "44"

let isLoggedIn = Number(score);
console.log(typeof isLoggedIn);
console.log(isLoggedIn)

//type convertion details (string to number)

// "33" => 33
//"123abc" => NaN(not a number)
// true => 1; false => 0
//null => 0
//undefined => NaN

let user = "gaurav"

let command = Boolean(user)
console.log(typeof command);
console.log(command);

// if user = ''(empty) or 0 => false 
//else => true

let str1 = 44

let covStr = String(str1)
console.log(typeof covStr);
console.log(covStr);

//**********************************Operations************************* 

let value = 6 
let negvalue = -value
console.log(negvalue);

let name = "gaurav"
let surName = "tiwari"
console.log(name + surName)


// adding string to number
console.log("1"+2) // output => 12
console.log("1"+2+2) //output => 122
console.log(2+2+"1")//output => 41

console.log(5+3 * 5%8) 
console.log((5+3)*(5%8)) 
//try to write complex equations into brackets its made the readbility and processing more easy

let gamecounter = 100
gamecounter++
console.log(gamecounter);

//link to study
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript