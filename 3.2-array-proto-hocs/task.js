'use strict';
console.clear();
function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

// function compareArrays (arr1, arr2) {
//     let ater = 0;
//     arr1.every(item => ater = item);
//     arr2.every(item2 => console.log(item2) === console.log(ater));
// }
function memorize (fn, limit) {

}

