function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
}

Book.prototype.getInfo = function() {
    return `Title is: ${this.title}\nAuthor is: ${this.author}\nYear is: ${this.year}`;
}

Book.prototype.borrowBook = function() {
    if (this.isAvailable) {
        this.isAvailable = false;
        return `Successfully borrowed`;
    } else {
        return `Book is already unavailable`;
    }
}

Book.prototype.returnBook = function() {
    if (!this.isAvailable) {
        this.isAvailable = true;
         return `Successfully returned`;
    } else {
       return `Book is already available`; 
    }
}

Book.prototype.matchesAuthor = function(authorName) {
    if (this.author.toLowerCase() === authorName.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

Book.prototype.matchesTitle = function(word) {
    if (this.title.includes(word)) {
        return true;
    } else {
        return false;
    }
}

function Library() {
    this.books = [];
}

Library.prototype.addBook = function(book) {
    this.books.push(book);
}

Library.prototype.removeBook = function(title) {
    let elem = (element => element.title === title);
    let index = this.books.findIndex(elem);
    if (index === -1) {
        throw new Error("Book not found:Index -1");
    }
    
    this.books.splice(index, 1);
}

Library.prototype.findBookByTitle = function(title) {
    let res = this.books.find(element => element.title === title);
        if (res) {
            return res;
        } else {
            return null;
        }
}

Library.prototype.findBooksByAuthor = function(authorName) {
    let res = this.books.filter(element => element.author.toLowerCase() === authorName.toLowerCase());
          return res;        
}

Library.prototype.getAvailableBooks = function() {
    let availableBooks = this.books.filter(element => element.isAvailable);
    return availableBooks;
}

Library.prototype.borrowBook = function(title) {
  let res = this.books.find(element => element.title === title);
        if (res) {
            return res.borrowBook();
        } else {
            return `Not found`;
        }
}

Library.prototype.returnBook =  function(title) {
     let res = this.books.find(element => element.title === title);
        if (res) {
           return  res.returnBook();
        } else {
            return 'Not Found';
        }
}



Library.prototype.showAllBooks = function() {
    for (let i = 0; i < this.books.length; ++i) {
        console.log(this.books[i].getInfo());
    }
}

Library.prototype.countBooks = function() {
    let count = 0;
    for (let i = 0; i < this.books.length; ++i) {
        if (typeof this.books[i] === "object") {
            ++count;
        }
    }
    return count;
}

Library.prototype.countAvailableBooks = function() {
    let res = this.getAvailableBooks().length;
    return res;
}

Library.prototype.searchBooks = function(word) {
    let res = this.books.filter(element => element.matchesTitle(word));
    return res;
}


Library.prototype.getOldestBook = function() {
    if (this.books.length === 0) return null;

    let old = this.books[0].year;
    for (let i = 1; i < this.books.length; ++i) {
        if (this.books[i].year < old) {
            old = this.books[i];
        }
     }
     return old;
}


const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);


console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
library.showAllBooks();



