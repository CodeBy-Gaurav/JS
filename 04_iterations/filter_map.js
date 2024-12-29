const myarr = [2,3,4,5,6,7,89]

const one = myarr.filter((num) => { 
    return num>=4})

console.log(one)

const newArr =[]
myarr.forEach((num)=>{
    if(num<=4){
        newArr.push(num)
    }
})

console.log(newArr)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const mybooks = books.filter((book)=>{
    return book.genre == 'Science' && book.edition >1996
  })

  console.log(mybooks)

  const mynums = myarr.map((num) => num*10)
  console.log(mynums)

const two = myarr.map((twist)=> {
    return twist > 6;  //return boolean output
})
console.log(two)


const num = myarr
                .map((num)=> num+10)
                .map((num)=>num*2)  //the value of num is output of upper map
                .filter((num)=>num>=20)//the value of num is output of upper map

console.log(num)

