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
let sophia = new Books("Sophie's World", "Jostein Gaarder", 500, "Yes");

function addBooktoLibrary(){
    myLibrary.push(sophia);
}

addBooktoLibrary();
console.log(myLibrary[0].title);
console.log(myLibrary[0].author);
console.log(myLibrary[0].numPages);
console.log(myLibrary[0].haveRead);

//GENERATING ONE CARD MANUALLY

let generator = document.getElementById("cards-container");
let creator = document.createElement("div");
creator.id = "card1";
creator.innerHTML = `<span>Title:</span><p>${myLibrary[0].title}</p><span>Author:</span><p>${myLibrary[0].author}</p><span>Volumes:</span><p>${myLibrary[0].numPages}</p><span>Have you read it?:</span><p>${myLibrary[0].haveRead}</p>`;
generator.appendChild(creator);




function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }