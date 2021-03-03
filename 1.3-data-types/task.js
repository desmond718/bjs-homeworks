'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    let numberPercent = Number(percent);
    let numberContribution = Number(contribution);
    let numberAmount = Number(amount);


    if (isNaN(numberPercent) === true) {
        return 'Параметр процент содержит неправильное значение "' + percent + '"';
    } else if (isNaN(numberContribution) === true) {
        return 'Параметр начальный взнос содержит неправильное значение "' + contribution + '"';
    } else if (isNaN(numberAmount) === true) {
        return 'Параметр общая стоимость содержит неправильное значение "' + amount + '"';
    } else {
        let sumCredit = numberAmount - numberContribution;  //Считаем сумму кредита. Тело кредита = S

        let yearOfDate = date.getFullYear();  // Получаем год окончания кредита
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear(); //Получаем Текущий год
        let countMonth = (yearOfDate - currentYear) * 12; // Количество месяцев кредита   = n
        let percentOfMonth = numberPercent / 100 / 12; // Месячный процент = P

        let monthlyPayment = sumCredit * (percentOfMonth + percentOfMonth / ((Math.pow((1 + percentOfMonth), countMonth)) - 1)); // Ежемесячный платеж

        let totalAmount = monthlyPayment * countMonth;

        return Number(totalAmount.toFixed(2));

    }


}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}