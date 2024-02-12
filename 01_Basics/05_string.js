//DECLARATION
let str = "defined"

const str2 = new String("undefined") //Declared as an obeject 

console.log("types of declaration" + str + str2) // wrong way to print statements

console.log(`Types of declaration ${str} and ${str2}`) //Strng Interolation

// STRING METHODS
 
// you can read different string methods through MDN or console

let str3 = str2.substring(0,6)
console.log(str3)

let gamemode = str2.slice(-8,6) //c slice can be used to print reverse of string or in any form
console.log(gamemode)

console.log(str2.length)


let username ="    Gaurav    "
console.log(username)
console.log(username.trim()) // trim used to remove blank spaces


let url ="http://google.com/gaurav%20tiwari%20kumar"
let url2 = url.replace("%20", "-")

console.log(url)
console.log(url2)

console.log(url.includes("tiwari"))

console.log(url2.split("-")) // slits the value where '-' founds