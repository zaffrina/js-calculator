'use strict';
let startBtv = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percentValue = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');
let money, time;
startBtv.addEventListener('click', function () {
	time = prompt("Введите дату в формате YYYY-MM-DD");
	money = +prompt("Ваш бюджет на месяц?");
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?");
	}
	appData.budjet = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();

});
expensesBtn.addEventListener('click', function () {
	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;

		if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
			appData.expenses[a] = b;
			sum += +b;
		} else {
			i = i - 1;
		}
		expensesValue.textContent = sum;
	}
});
optionalExpensesBtn.addEventListener('click', function () {
	for (let i = 1; i < optionalExpensesItem.length; i++) {
		let userIn = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = userIn;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}

});
countBtn.addEventListener('click', function () {
	if (appData.budjet != undefined) {
		appData.moneyPerDay = (appData.budjet / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;
		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Минимальный уровень достатка"
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Средний уровень достатка"
		} else if (appData.moneyPerDay < 2000) {
			levelValue.textContent = "Высокий уровень достатка"
		} else {
			levelValue.textContent = "Ошибка"
		}
	} else dayBudgetValue.textContent = "Ошибка";
});



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
				userIn != '' && userIn2 != '' && userIn.length < 50) {
				appData.expenses[userIn] = userIn2;
			} else {
				i = i - 1;
			}

		}
	},
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
	checkSaving: function () {
		if (appData.savings = true) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");
			appData.mothIncome = save / 100 / 12 * percent;
			alert("Начисления: " + appData.mothIncome);


		}
	},
	chooseOptExpenses: function () {
		for (let i = 1; i < 3; i++) {
			let userIn = prompt("Статья необязательных расходов?")
			appData.optionalExpenses[i] = userIn;
			alert("Начисления: " + appData.optionalExpenses);
		}

	},
	chooseIncome: function () {
		let items;
		while (typeof (items) === !'string' || items == "" || items == null) {
			items = prompt("Что принесет дополнительный доход?(Через запятую!)");
			appData.income = items.split(",");
		}
		appData.income.push(prompt("Что-то еще?"));
		appData.income.sort();
		appData.income.forEach(element => console.log("Способы доп. заработка: " + element));
	},
};