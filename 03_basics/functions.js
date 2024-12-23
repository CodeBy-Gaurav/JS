//how to declare functions

function userName(name = "John"){  //Giving a value to the parameter will work only if no value is assign to it while it being called
    if(!name){
        console.log("enter a valid username")
        return  //function do not see or wrok after return keyword
    }
    return `${name} is your username`
}   


const user1 = userName('Gaurav')
console.log(user1)


//*******REST and SPREAD OPERATOR */
/*'...num' this is called rest operator it will store many values in an array 
 =>we use this operator wehn no. of parameters are unknown*/

function calculatePrice(...num){  
    return num
}

console.log(calculatePrice(100,200,400,500))
