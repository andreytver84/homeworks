class PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    fix() {
        this._state = this._state*1.5;
    }
    set state(condition) {
        if (condition < 0) {
            this._state = 0;
        } else if (condition > 100) {
            this._state = 100;
        }
    }
    get state() {
        return this._state;
    }    
}

class Magazine extends PrintEditionItem {
    constructor(type) {
       super(type);
    }
}

class Book extends PrintEditionItem {
    constructor(type,author) {
        super(type);
       this.author = author;
    }
}

class NovelBook extends Book {
    constructor(type,author) {
        super(type);
        super(author);
     }
}

class FantasticBook extends Book {
    constructor(type,author) {
       super(type);
       super(author);
    }
}

class DetectiveBook extends Book {
    constructor(type,author) {
        super(type);
        super(author);
    }
}

class Library {
    constructor(namelib) {
        this.name = namelib;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        return this.books.find(item => item.type === value);
    }
    giveBookByName(bookName) {
        if (this.books.find(item => item.name === bookName)) {
            this.books.splice(item,1);            
        } else {
            return null;
        }
    }
}