'use strict';
function getResult(a,b,c){
    let d = b*b - 4 * a * c;

    if (d < 0) {
        return [];
    }

    if (d === 0) {
        let x = (-b + Math.sqrt(d)) / (2 * a);
        return [x];
    }

    if (d > 0) {
        let resultOne = (-b + Math.sqrt(d)) / (2 * a);
        let resultTwo = (-b - Math.sqrt(d)) / (2 * a);
        return [resultOne, resultTwo];
    }

}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}