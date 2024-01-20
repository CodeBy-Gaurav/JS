const num = 100
console.log(num)

const number = new Number(200) //Number defonded as a function
console.log(number)

//NUMBER ATTRIBUTES
console.log(num.toString().length) // by first convertiing the number to string and then using string method to get length of the number

console.log(num.toFixed(2)) // toFixed give the presion after point => 100.00

const balance = 4.73479
console.log(balance.toPrecision(4)) 

const Current_Balance = 100000000
console.log(Current_Balance.toLocaleString('en-IN')) // puts comma according to indian standards


//+++++++++++++++MATH++++++++++++++++++

//MATH is an inibuilt library of javascript

console.log(Math)
console.log(Math.abs(-8))   
console.log(Math.round(4.86))   

console.log(Math.random())
console.log((Math.random()*10)+1)

//To get a number from any range 

const max = 20
const min = 40 

console.log(Math.random()* (max - min +1) + min )
console.log(Math.round(Math.random()* (max - min +1) + min ))