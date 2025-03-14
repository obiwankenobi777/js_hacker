class Books {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn() {
        console.log(this.isbn);
    }
}

let book = new Books('data structure in js', 420, '12345');
console.log(book.title);
book.title = 'new title';
console.log(book.title);

class ITBook extends Books {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn);
        this.technology = technology;
    }
    printTechnology() {
        console.log(this.technology);
    }
}

let jsBook = new ITBook('Learning JS Algorithms', 200, '1234599', 'JavaScript');
console.log(jsBook.title);
console.log(jsBook.printTechnology());
