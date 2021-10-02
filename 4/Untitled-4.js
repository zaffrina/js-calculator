//Переменые и стартовая функция с бюджетом
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    let age, day, mes;
  //  while (time === undefined) {
        age = +prompt("Введите год");
        if (Number.isInteger(age)) {
            mes = prompt("Введите месяц");
            if (Number.isInteger(mes) || mes > 0 || mes < 13) {
                day = prompt("Введите день");
                if (Number.isInteger(day) || day > 0 || day < 32){
                    alert("Дата введена");
                    time=age+"-"+mes+"-"+day;
                }else alert("Неверно введен день!");
            } else alert("Неверно введен месяц!");
        } else alert("Неверно введен год!");
    }
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
//}
start();
let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    moneyPerDay: money,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let userIn = prompt("Введите обязательную статью расходов в этом месяце")
            let userIn2 = prompt("Во сколько обойдется?");

            if (typeof (userIn) === 'string' && (typeof (userIn)) != null && (typeof (userIn2)) != null &&
                userIn != '' && userIn2 != '' && userIn.length < 50 && userIn2 < appData.budjet) {
                appData.expenses[userIn] = userIn2;
            } else {
                i = i - 1;
            }
        }
    },
    // Функция вывода и посчета бюджета
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        alert("Ваш бюджет на день " + appData.moneyPerDay);
    },
    // Функция с расчетом уровня достатка
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay < 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    //Функция для необязательных расходов
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {

            let userIn = prompt("Статья необязательных расходов?")
            appData.optionalExpenses[i] = userIn;
            alert("Статья необязательных расходов: " + appData.optionalExpenses);
        }

    },
    // Функция с расчетом уровня достатка
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay < 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    // Функция накоплений
    checkSaving: function () {
        if (appData.savings = true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.mothIncome = save / 100 / 12 * percent;
            alert("Начисления: " + appData.mothIncome);


        }
    }

}
//Что значит () после названия функции?
// Аргументы(переменые/выражения) которые она принимает. 