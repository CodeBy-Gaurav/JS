//THIS KEYWORD
// this operator point the local variable
const object = {
    name : "Gaurav",
    password : 123,

    welcomeMessage: function (){
        console.log(`${this.name} welcome to the object`)
    
    }
}

object.welcomeMessage()
object.name = "Sam altman"
object.welcomeMessage()

// ARROW FUNCTION DECLARATION
const lassi = () => {
    const name = "pata nahi";
    console.log(this.name)
}

lassi()



const obj = {
    value: 10,
    arrowFunc: () => {
        console.log(this.value); // 'this' refers to the outer scope, not obj
    }
};
obj.arrowFunc(); // Output: undefined (or an error in strict mode)

// we cannot use this keyword in arrow function




const one = (num1, num2) => {
    return num1 +num2
} 
console.log(one(2,3))

const two =(num1,num2) => (num1+num2)//by using (...) its automaticaly retun the value
console.log(two(5,6))
