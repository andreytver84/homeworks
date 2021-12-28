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
        if (this._state > 100) {
            this._state = 100;
        }
    }
    set state(condition) {
        if (condition < 0) {
            this._state = 0;
        } else if (condition > 100) {
            this._state = 100;
        } else {
            this._state = condition;
        }
    }
    get state() {
        return this._state;
    }    
}

class Magazine extends PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
       super(name,releaseDate,pagesCount);
       this.type = 'magazine';       
    }
}

class Book extends PrintEditionItem {
    constructor(author,name,releaseDate,pagesCount) {
       super(name,releaseDate,pagesCount);
       this.type = 'book';  
       this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {   
        super(author,name,releaseDate,pagesCount);     
        this.type = 'novel';
     }
}

class FantasticBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {   
       super(author,name,releaseDate,pagesCount);    
       this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {    
        super(author,name,releaseDate,pagesCount);    
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
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

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.subjects=[];
    }
    addMark(mark,subjectName) {
        let toSubjects = {subject: subjectName, marks: [mark]};
        if (this.subjects.find(item => item === subjectName)) {
           let needSubject = (this.subjects.find(item => item === subjectName));
           needSubject.marks.push(mark);
        } else {
            this.subjects.push(toSubjects);
        }
    }
    getAverageBySubject(subjectName) {
        let findSubject = this.subjects.find(item => item === subjectName);
        const sum = findSubject.marks.reduce((acc, mark) => acc + mark, 0);
        const length = findSubject.marks.length;
        return sum / length;
    }
    getAverage() {
        const sum = this.subjects.forEach(item.marks.reduce((acc, mark) => acc + mark, 0));
        const length = this.subjects.length;
        return sum / length;
    }
}