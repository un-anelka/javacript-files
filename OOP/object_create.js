//Object of Protos

const   bookProtos={
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },


getAge:function(){
    const years= new Date().getFullYear()-this.year;
    return `${this.title} was written back in ${this.year} and it is now ${years} years old`;
}
}

//Create Object

// const book1=Object.create(bookProtos)
// book1.title="Book One";
// book1.author="John Doe";
// book1.year="2013";


// Another way
const book1=Object.create(bookProtos,{
    title:{value:"Book two"},
    author:{value:"John Peter"},
    year:{value:"2011"},
})
console.log(book1)

console.log(book1.getSummary())
console.log(book1.getAge());

console.log(new Date().getFullYear())