// How to create a new object

// Method 1: Liternal syntax
// const person = {
//     name: "Brian",
//     age: "24",
// }
// console.log(person)


// Method 2: Constuctor Function
function Book(name, author, page, read){
    this.name = name;
    this.author = author;
    this.page = page;
    this.read = read;
}

// Add book info method into the Book prototype 
Book.prototype.info = function() {
    return `${this.name} by ${this.author} has ${this.page}. Status: ${this.read} `
}

// Create an instance of the book
const hamlet = new Book("Hamlet", "William Shakespeare", "142", "Not Read")

// Print the info
console.log(hamlet.info());

