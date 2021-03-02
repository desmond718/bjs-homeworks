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
    let count = marks.length;
    let sum = 0;

    if (count === 0 ) {
        return 0;
    } else if (count > 5) {
        let newMarks = marks.slice(0, 5);
        let newCount = newMarks.length;
        for (let i = 0; i < newCount; i++) {
            sum += newMarks[i];
        }
        console.log('Количество оценок больше 5');
        return sum / newCount;
    } else {
        for (let i = 0; i < count; i++) {
            sum += marks[i];
        }
        return sum / count;
    }
}

function askDrink(name,dateOfBirthday){
    let yearBirthday = dateOfBirthday.getFullYear();
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let userYear = currentYear - yearBirthday;

     if (userYear >= 18) {
         return 'Не желаете ли олд-фэшн, ' + name + '?';
     } else {
         return 'Сожалею, ' + name + ', но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!';
     }

    // return result;
}