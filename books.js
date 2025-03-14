class Books {
    constructor(title, pages, isbn) {
        this._title = title;
        this._pages = pages;
        this._isbn = isbn;
    }
    get title() { 
        return this._title;
    }
    get pages() {
        return this._pages;
    }
    get isbn() {
        return this._isbn;
    } 
}

let book = new Books('data structure in js', 420, '12345');

console.log(book.title);
book.title = 'new title';
console.log(book.title);

class ITBook extends Books {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn);
        this._technology = technology;
    }
    get technology() {
        return this._technology;
    }
}

let jsBook = new ITBook('Learning JS Algorithms', 200, '1234599', 'JavaScript');
console.log(jsBook.title);
console.log(jsBook.technology);
