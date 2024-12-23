const myobj = new Object() //SIngleton object

const mysyb = Symbol("dingdong")

const obj2 = {
    name : "Aman",
    age: 52,
    title: "teacher",
    [mysyb]: "dhinkichika",
    skills: {
        python:"basics",
        score: 2,
        java: "intermediate",
        c:"masterd"

    },
    scorecard:[2,4,5,6,7,8]
};

console.log(obj2.age) //not a proper way 
console.log(obj2["name"]) //proper way
console.log(`my skills are ${obj2.skills}`)

obj2.age = 42
Object.freeze(obj2) //can not make changes in object
obj2.age = 68

console.log(obj2.age)

//const women = new Object()

const women = {
    name : 'olivia',
    age : 22,
    maritial_status : 'commited'
}

console.log(women.name,women.maritial_status)