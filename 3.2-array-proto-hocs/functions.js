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