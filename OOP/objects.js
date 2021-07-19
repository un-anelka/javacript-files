//Object literal

const book1={
    title: "book one",
    author:"John Doe",
    year:"2023",
    getSummary1: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`

    }

}

const book2={
    title: "Book 2",
    author:"John Peter",
    year:"2012",
    getSummary1: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`

    }

}
// console.log(book2.getSummary1())
console.log(Object.values(book2))
console.log(Object.keys(book2))
// const person={
//     firstName: "Laurent",
//     lastName:"Kabila",
//     age: 30,
//     hobbies:["music", 'movies', 'sports'],
//     address:{
//                 street:"50 main St",
//                 city: 'Boston',
//                 state:'MA',
//              }
// }

// console.log(person.firstName, person.lastName, person.address)
// console.log(person.hobbies.indexOf("movies"))
// console.log(person.hobbies[1])
// console.log(person.address.state)

//  const{firstName, lastName,address:{street, city}}=person;
// console.log(lastName, firstName)
// console.log(city, street)

// person.email="laurent@gmail.com"
//  console.log(person.email)
