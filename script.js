//LIBRARY PROJECT

function Books (title, author, numPages, haveRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
    /*this.info= function (){
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.haveRead}`;
    }*/
}

let myLibrary = [];

let theHobbit = new Books("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
let theLOTR = new Books("The Lord Of The Rings", "J.R.R Tolkien", 350, "read");
let GOT = new Books("Game of Thrones", "G.R.R Martin", 134, "read");
let sombra = new Books("La Sombra del Viento", "Carlos Ruiz Zafon", 320, "read");
let sophia = new Books("Sophie's World", "Jostein Gaarder", 500, "read");

myLibrary.push(theHobbit, theLOTR, GOT, sombra, sophia);
console.table(myLibrary);
