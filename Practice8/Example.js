class  Book {

    #title;
    #author;
    #year;
    #isAvailable;

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.իsAvailable = true;
    }
    get title() {
        return this.#title;
    }
    set title(value) {
        if (value === "") {
            throw new Error("Title can not be empty");
        }
        this.#title = value;
    }

    get author() {
        return this.#author;
    }
    set author(value) {
        if (value === "") {
            throw new Error("Author can not empty");
        }
        this.#author = value;
    }

    get year() {
        return this.#year;
    }
    set year(value) {
        if (value <= 0) {
            throw new Error("Year can not be negative");
        }
        this.#year = value;
    }

    get isAvailable() {
        return this.#isAvailable;
    }


    borrowBook() {
        if (this.#isAvailable) {
            this.#isAvailable = false;
        } else {
            return "Book is already unavailable";
        }
    }

    returnBook() {
        if (!this.#isAvailable) {
             this.#isAvailable = true;
        } else {
            return "Book is already available";
        }
    }


    matchesTitle(word) {
        return this.#title.includes(word);
    }

    getInfo() {
        return  `${this.#title}, ${this.#author}, ${this.#year}`;
    }
}


class Reader {

    #name;
    #borrowedBooks = [];

    constructor(name) {
        this.#name = name;
    }


    get name() {
        return this.#name;
    }

    set name(value) {
        if (value === "") {
            throw new Error("Name can not be empty");
        } else {
            this.#name = value;
        }
    }

    get borrowedBooks() {
        return this.#borrowedBooks;
    }

    get borrowedBooksCount() {
        let count = this.#borrowedBooks.length;
        return count;
    }

    takeBook(book) {
        if (book.isAvailable) {
            this.#borrowedBooks.push(book);
             book.borrowBook();
        }
    }

    giveBackBook(book) {

        if (!this.hasBook(book)) {
            return `${this.name} dont have book`;
        }
        let res = this.#borrowedBooks.filter(elem => elem !== book);
        this.#borrowedBooks = res;
        book.returnBook();
         return `${this.name} returned "${book.title}"`;
    }

    hasBook(book) {
        let res = this.#borrowedBooks.includes(book);
        if (res) {
            return true;
        } else {
            return false;
        }
    }

    showBorrowedBooks() {
        let res = this.#borrowedBooks.map(elem => elem.title); 
        return res;
    }

    getInfo() {
        return `${this.name} has ${this.borrowedBooksCount} books`; 
    }
}



class Library {

    #name;
    #books = [];
    #readers = [];

    constructor(name) {
        this.#name = name;
    }


    get name() {
        return this.#name;
    }

    set name(value) {
        if (value === "") {
            throw new Error("Name can not be empty");
        } else {
             this.#name = value;
        }
    }

    get books() {
        return this.#books;
    }

    get readers() {
        return this.#readers;
    }

    addBook(book) {
        this.#books.push(book);
    }

    registerReader(reader) {
        this.#readers.push(reader);
    }

    findBookByTitle(title) {
       let book = this.#books.find(elem => elem.title === title);
       return book ? book.getInfo() : null;
}

    findBooksByAuthor(authorName) {
        let res = this.#books.filter(elem => elem.author === authorName);
        return res.map(elem => elem.getInfo());
    }

    giveBookToReader(title, reader) {
        let res = this.#books.find(elem => elem.title === title);

        if (res === undefined) {
            console.log("Book not found");
            return;
        }


         if (!res.isAvailable) {
            console.log(`Book "${title}" is  not available.`);
            return;
        } else {
            reader.takeBook(res);
        }
    }

    acceptBookFromReader(title, reader) {
        let res = this.#books.find(elem => elem.title === title);
        if (res) {
            return reader.giveBackBook(res);
        } else {
            return "book not found.";
        }
    }

    showAvailableBooks() {
        let res = this.#books.filter(elem => elem.isAvailable);
        return res.map(elem => elem.getInfo());
    }


    showAllBooks() {
        let res = this.#books.map( elem => elem.getInfo());
        return res;
    }

    getLibraryInfo() {
        return `${this.#name}: ${this.#books.length} books, ${this.#readers.length} readers`;
    }

}


const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);


const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);




library.registerReader(reader1);
library.registerReader(reader2);



console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());