//Date

let myDate = new Date(); //Declare a date object

console.log(myDate.toString()); //we use toString method to write date in more readable format
console.log(myDate.toLocaleString());
console.log(typeof myDate);  //Object

let currentDate = new Date(2023, 0 , 24) 
//we can give more deatils while deckaring date 
//in date first month strated from 0 if given as array(except in case of string)

console.log(currentDate)

let updatedDate = new Date("10-02-2023") // to declare dte in DD-MM-YYYY format
console.log(updatedDate.toString())

let myTimeStamp = Date.now() // Give the time in miisecons from 1 jan 1970 to now

console.log(myTimeStamp)
console.log(Math.round(myTimeStamp/1000)) // Give the timestamp in seconds

//other functon of date 

console.log(myDate.getDay())
console.log(myDate.getMonth())
console.log(myDate.getDate())

//other uses of toLocaleString
myDate.toLocaleString('default', {
    weekday: "long",
    month: "short"
})