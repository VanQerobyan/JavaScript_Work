class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }

    getInfo() {
        return `Title is: ${this.title}\nAuthor is: ${this.author}\nYear is: ${this.year}`;
    }

    borrowBook(){
        if (this.isAvailable) {
            this.isAvailable = false;
        } else {
            return `Book is already unavailable`;
        }
    }

    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
        } else if (this.isAvailable) {
            return `Book is already available`;
        }
    }

    matchesAuthor(authorName) {
        if (this.author.toLowerCase() === authorName.toLowerCase()) {
            return true;
        }
        return false;
    }

    matchesTitle(word) {
        if (this.title.includes(word)) {
            return true;
        }
        return false;
    }

}


class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        let elem = (element) => element.title === title;
        let index = this.books.findIndex(elem);
        this.books.splice(index, 1);
    }

    findBookByTitle(title) {
        let res = this.books.find(elem => elem.title === title);
        if (res) {
            return res;
        } else {
            return null;
        }
    }

    findBooksByAuthor(authorName) {
        let res = this.books.filter(element => element.author == authorName);
        return res;
    }

    getAvailableBooks() {
        let availableBooks = this.books.filter(element => element.isAvailable);
        return availableBooks;
    }

    borrowBook(title) {
        let res = this.books.find(element => element.title === title);
        if (res) {
            res.borrowBook();
        } else {
            return `Not found`;
        }
    }

    returnBook(title) {
        let res = this.books.find(element => element.title === title);
        if (res) {
            res.returnBook();
        } else {
            return 'Not Found';
        }
    }

    showAllBooks() {
        this.books.forEach((elem, index, arr) => {
        console.log("Book: " + index);
        console.log(arr[index]);
        });
    }


    countBooks() {
        let count = 0;
        for (let i = 0; i < this.books.length; ++i) {
            if (typeof this.books[i] === "object") {
                count++;
            }
        }
        return count;
    }


    countAvailableBooks() {
        let availableBook = this.getAvailableBooks().length;
        return availableBook;
    }

    searchBooks(word) {
        let res = this.books.filter(element => element.title.includes(word));
        return res;
    }


    getOldestBook() {

        if (this.books.length === 0) return null;

        let old = this.books[0].year;
        for (let i = 1; i < this.books.length; ++i) {
            if (this.books[i].year < old) {
                old = this.books[i].year;
            }
        }
        return old;

    }
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