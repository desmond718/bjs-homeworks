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
        return this._state = state;0
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
               return this.books.splice(i,1)[0];
            }
        }
        return null;
    }

}
//Part 3
class Subjects {
    constructor(subject) {
        this.subject = subject;
        this._grade = [];
    }

    setGrade (grade) {
        if (grade >= 1 && grade <= 5) {
            return this._grade.push(grade);
        }
        console.log(`Вы пытаетесь поставить оценку ${grade} по предмету ${this.subject}. Допускается только числа от 1 до 5`);
        return this._grade.length;
    }
}


class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (!this.subjects[subject]) {
            this.subjects[subject] = new Subjects(subject);
        }

        return this.subjects[subject].setGrade(grade);
    }

    getAverageBySubject(subject) {
        if (!this.subjects[subject]) {
            return 0
        }
        let arrGrade = this.subjects[subject]._grade;
        if (arrGrade.length === 0) {
            return 0;
        }
        let sum = 0;
        for (let i = 0; i < arrGrade.length; i++) {
            sum += arrGrade[i];
        }
        return sum / arrGrade.length;
    }

    // getTotalAverage() {
    //     for (this.subjects[])
    // }
}
