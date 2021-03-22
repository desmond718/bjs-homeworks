'use strict';
//Part 1

function getSolutions(a,b,c) {
    let D = b*b - 4 * a * c;

    if (D < 0) {
        return {
            D,
            roots: []
        }
    }
    if (D === 0) {
        let x1 =  (-b) / (2 * a);
        return {
            D,
            roots: [x1]
        }
    }
    if (D > 0) {
        let x1 = ((-b) + Math.sqrt(D)) / (2 * a);
        let x2 = ((-b) - Math.sqrt(D)) / (2 * a);
        return {
            D,
            roots: [x1,x2]
        }
    }
}

function showSolutionsMessage (a,b,c) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    }
    if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    }
    if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

//Part 2

function getAverageScore (data) {
    let total = 0;
    let counter = 0;
    let aveData = new Object();
    for (let key in data) {
        let value = getAverageMark(data[key]);
        aveData[key] = value;
        total += value;
        counter++;
    }
    aveData.average = total / counter;
    if (isNaN(aveData.average)) {
        return {average: 0};
    }
    return aveData;
}

function getAverageMark (marks) {
    if (marks.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}


let data = {
    algebra: [2,4,5,2,3,4],
    geometry: [2,4,5],
    russian: [3,3,4,5],
    physics: [5,5],
    music: [2,2,6]
}


//Part 3
function getPersonData (secretData) {
    let secretName = new Object();
    let counter = 0;

    for (let key in secretData) {
        let value = getDecodedValue(secretData[key]);
        if (counter === 0) {
            secretName.firstName = value;
        }
        if (counter === 1) {
            secretName.lastName = value;
        }
        counter++;
    }
    return secretName;
}

function getDecodedValue (secret) {
    let intSecret = Number(secret);
    if (intSecret === 0) {
        return 'Родриго';
    } else if (intSecret === 1) {
        return 'Эмильо';
    }
    return 'Чёрт';
}

let secretData = {
    aaa: 0,
    bbb: 0
}