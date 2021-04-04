'use strict';
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = Number(state);
        this.type = type;
    }
    fix() {
        return  (this.state = this.state * 1.5);
    }
    set state (state) {
        if (state < 0) {
            return this._state = 0;
        }
        if (state > 100) {
            return this._state = 100;
        }
        return this._state = state;
    }
    get state () {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        super(name, releaseDate, pagesCount, state = 100, type = null);
        this.type = 'magazine';
    }
}

class Book  extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(name, releaseDate, pagesCount, state = 100, type = null);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(author, name, releaseDate, pagesCount, state = 100, type = null);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(author, name, releaseDate, pagesCount, state = 100, type = null);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(author, name, releaseDate, pagesCount, state = 100, type = null);
        this.type = 'detective';
    }
}
//Part 2

class Library {
    constructor(name, books) {
        this.name = String(name);
        this.books = [];
    }
    addBook(book) {
        if (book._state > 30) {
            return this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++){
            let objKeyValue = Object.entries(this.books[i]);
            for (let j = 0; j < objKeyValue.length; j++) {
                if (objKeyValue[j].join('') === (type + value)) {
                    return this.books[i];
                }
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
               return this.books.splice(i,1);
            }
        }
        return null;
    }

}
//Part 3
class Subjects {
    constructor(grade, subject) {
        this.subject = subject;
        this.grade = grade;
        this._grade = [];
    }

    set grade (grade) {

        if (grade > 5) {
            return `Вы пытаетесь поставить оценку ${grade} по предмету ${this.subject}. Допускается только числа от 1 до 5`;
        }
        if (grade < 1) {
            return `Вы пытаетесь поставить оценку ${grade} по предмету ${this.subject}. Допускается только числа от 1 до 5`;
        }
        return this._grade = grade;
    }
}


class StudentLog {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        this.subjects = new Subjects(grade, subject);
    }
}
