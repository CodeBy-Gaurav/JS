//Immediately Involked Fuction Expressions (IIFE)
//it helps to immeditely run fucntion as program runs
//for IIFE we have to put fucntion parenthesis() and ends with another ()
(function database(){
    console.log('databse connected')

})();

((name) => {
    console.log(`DB is connected to DB ${name}`)
})("Gaurav")
