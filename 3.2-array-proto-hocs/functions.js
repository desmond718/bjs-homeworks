'use strict';
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    
}
'use strict';
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames () {
    const namesWeapon = weapons.map(weapon => weapon.name);
    return namesWeapon;
}

function getCountReliableWeapons (durability) {
    const durabilityWeapon = weapons.filter(durabilityInArr => durabilityInArr.durability > durability);
    return durabilityWeapon.length;
}

function hasReliableWeapons (durability) {
    const hasReliable = weapons.some(durabilityInArr => durabilityInArr.durability > durability);
    return hasReliable;
}

function getReliableWeaponsNames (durability) {
    const getDurabilityWeapon = weapons.filter(durabilityInArr => durabilityInArr.durability > durability);
    const getNamesWeapon = getDurabilityWeapon.map(item => item.name)
    return getNamesWeapon;
}

function getTotalDamage () {
    let totalDamage = 0;
    weapons.forEach((damageWeapon) => {
        totalDamage += damageWeapon.attack;
    })
    return totalDamage;
}

function getValuestCountToSumValues (arrNumber, sumNumber) {
    let sum = 0;
    let newArr = [];
    arrNumber.forEach((item) => {
        if (sumNumber >= sum) {
            sum += item;
            newArr.push(item);
        }
    })
    return newArr.length;
}

// //part 2
// function sleep(milliseconds) {
//     let e = new Date().getTime() + milliseconds;
//     while (new Date().getTime() <= e) {}
// }
//
// function sum(...args) {
//     // Замедление на половину секунды.
//     sleep(100); // Можно использовать другое значение замедления.
//     return args.reduce((sum, arg) => {
//         return sum += +arg;
//     }, 0);
// }
//
// function compareArrays (arr1, arr2) {
//     console.log(arr1.every());
//     const isSameArr = arr1.every(arr2);
//     return isSameArr;
// }