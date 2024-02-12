//Arrays 

const myArr = [1,2,3,4,5]
const myHeroes= ["Perman","Batman", "Spiderman"]

console.table([myArr,myHeroes])

//Array Methods

myArr.push(8) //Add 8 in the last of array
myArr.pop() // remove last element of the array
console.log(myArr)

myArr.unshift(7) //adds the element to the front of array , not considered good for optimisation
myArr.shift() //removes first element of the array


console.log(myArr.includes(8))
console.log(myArr.indexOf(4))

const newdt = myArr.join() //converts the array into string
console.log(newdt)

let newArr = myArr.slice(2,4) // gives element from 2 to 3 index not till 4 index
console.log(newArr)

let newArr2 = myArr.splice(2,4) //cut and paste the elements from the gicven range and last range is considered
console.log(newArr2)
console.log(myArr)