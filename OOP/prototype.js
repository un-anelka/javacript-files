//constructor

function Book(title, author, year){
    this.title=title;
    this.writter=author;
    this.time=year;
    // this.getSummary1= function(){
    //     return `${this.title} was written by ${this.writter} in ${this.time}`}
    
//   console.log(`${this.writter} is not my type`)

}
//Creating prototype (Get summary)
Book.prototype.getSummary1=function(){
    return `${this.title} was written by ${this.writter} in ${this.time}`}
    
Book.prototype.getAge=function(){
    const years= new Date().getFullYear()-this.time;
    return `${this.title} was written back in ${this.time} and it is now ${years} years old`;
}
//revise or change year
Book.prototype.revised1=function(newYear){
    this.time=newYear;
    this.revised=true;
}
//Instantiate an Object 
const book1= new Book( 'kigali is better', 'UN', '1995')

// console.log(book1.getAge())

console.log(book1)
book1.revised1(2010)
console.log(book1)
console.log(book1.getAge())