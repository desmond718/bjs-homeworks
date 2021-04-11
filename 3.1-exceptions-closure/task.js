'use strict';
function parseCount (count) {
    let number = parseInt(count);
    if (isNaN(number)) {
        throw new Error('Невалидное значение');
    }
    return number;
}

function validateCount (count) {
    try {
        window.parseCount(count);
    } catch (error) {
        return error;
    }
    return window.parseCount(count);
}

//Part 2
class Triangle {
    constructor(a, b, c) {
        if ((a + b) <= c || (b + c) <= a || (a + c) <= b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea () {
        let p = 1/2 * (this.a + this.b + this.c);
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        return Number(s);
    }
}


function getTriangle (a,b,c) {
    try {
        new Triangle(a,b,c);
    } catch (error) {
        console.log('tyt');
        console.log(error);
        return error;
    }
    return new Triangle(a,b,c);
}