//constructor

function Book(title, author, year){
    this.title=title;
    this.writter=author;
    this.time=year;

}
//Creating prototype (Get summary)
Book.prototype.getSummary1=function(){
    return `${this.title} was written by ${this.writter} in ${this.time}`}

//Magazine constructor

function magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month=month;

}
//Inherit Prototype

magazine.prototype=Object.create(Book.prototype)

//Instantiate Magazine Object
const mag1=new magazine("Mag one","John Doe","2021", "June")
console.log(mag1)

//Use magazine construct instead of Book constructor
magazine.prototype.constructor=magazine;
console.log(mag1.getSummary1());