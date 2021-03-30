// 'use strict';
String.prototype.isPalindrome = function () {
    console.log(this);
    let normalStr = this.toLowerCase().split(' ').join('');
    let reversStr = normalStr.split(' ').reverse().join('');
    if (normalStr === reversStr) {
        return true;
    }
    return false;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}

