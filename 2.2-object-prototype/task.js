// 'use strict';
//String.prototype.isPalindrome - для задачи №1

function isPalindrome(str) {
    this.isPalindrome = str;
    let normalStr = str.toLowerCase();
    let reversStr = normalStr.split('').reverse().join('');
    if (normalStr === reversStr) {
        return true;
    }
    return false;
}

String.prototype = isPalindrome;

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}

