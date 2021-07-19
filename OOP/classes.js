class Book{
    constructor(title, author, year){
        this.title=title;
        this.author=author;
        this.year=year;
    
    }
    getSummary(){
            return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge(){
        const years= new Date().getFullYear()-this.year;
    return `${this.title} was written back in ${this.year} and it is now ${years} years old and by ${this.author}`
    }

    static topBookStores(){
        return `Noble and Barnes`
    }

}

// const book1=new Book("THE TRIADS","UN", "2023")
// console.log(book1)
// console.log(book1.getAge())


console.log(Book.topBookStores());