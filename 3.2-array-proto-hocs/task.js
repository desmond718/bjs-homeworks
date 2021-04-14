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

function compareArrays (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((v,i) => v === arr2[i]);
}

function memorize (fn, limit) {
    const memory = [];

    function wrapper(...args) {
        const sameQuery = memory.find((query) => {
            return compareArrays(args, query.args)
        });

        if (sameQuery) {
            return sameQuery.result;
        }

        const result = fn(...args);
        memory.push({args: args, result: result});
        return result;
    }
    return wrapper;
}

