//String.prototype.isPalindrome - для задачи №1

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}


const predator = {
    food: 'meat',
    color: 'orange'
}

function Tiger(name) {
    this.name = name;
}

Tiger.prototype = predator;

const tiger = new Tiger('Vasya');

console.log(tiger);
// console.log(tiger.food);
