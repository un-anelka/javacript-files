//constructor

function Book(title, author, year){
    this.title=title;
    this.writter=author;
    this.time=year;
    this.getSummary1= function(){
        return `${this.title} was written by ${this.writter} in ${this.time}`}
    this.number=34
//   console.log(`${this.writter} is not my type`)

}
//Instantiate an Object 
const book1= new Book( 'kigali is better', 'UN', '1995')

console.log(book1)
