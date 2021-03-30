'use strict';
String.prototype.isPalindrome = function () {
    let normalStr = this.toLowerCase().split(' ').join('');
    let reversStr = normalStr.split('').reverse().join('');
    if (normalStr === reversStr) {
        return true;
    }
    return false;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}


function checkBirthday(birthday) {
    let now = +(new Date());
    let birthdayUser = +(new Date(birthday));
    let diff = now - birthdayUser;
    let age = (diff - (Math.trunc(diff / 31536000000 ) / 4 * (31622400000 - 31536000000))) / 31536000000;
    console.log(age);
    if (age > 18) {
        return true;
    }
    return false;
}

