class PrintEditionItem {
    constructor(name, releaseDate, pageCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pageCount = pageCount;
        this.state = state;
        this.type = type;
    }
    fix() {
        return  (this.state = this.state * 1.5);
    }
    set state (state) {
        if (+state < 0) {
            return this._state = 0;
        }
        if (+state > 100) {
            return this._state = 100;
        }
        return this._state = +state;
    }
    get state () {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pageCount, state = 100, type = null) {
        super(name, releaseDate, pageCount, state = 100, type = null);
        this.type = 'magazine';
    }
}

class Book  extends PrintEditionItem {
    constructor(author, name, releaseDate, pageCount, state = 100, type = null) {
        super(name, releaseDate, pageCount, state = 100, type = null);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pageCount, state = 100, type = null) {
        super(author, name, releaseDate, pageCount, state = 100, type = null);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pageCount, state = 100, type = null) {
        super(author, name, releaseDate, pageCount, state = 100, type = null);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pageCount, state = 100, type = null) {
        super(author, name, releaseDate, pageCount, state = 100, type = null);
        this.type = 'detective';
    }
}
