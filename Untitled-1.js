let money = prompt("Ваш бюджет на месяц?")
    time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budjet : money,
    timeData : time,
    expenses :  {},
    optionalExpenses : {},
    income : [],
    savings: false 
}

let userIn = prompt("Введите обязательную статью расходов в этом месяце")
    userIn2 = prompt("Во сколько обойдется?")
    userIn1 = prompt("Введите обязательную статью расходов в этом месяце")
    userIn3 = prompt("Во сколько обойдется?");

 appData.expenses.userIn = userIn2;
 appData.expenses.userIn1 = userIn3;
 alert("Ваш бюджет на день");
 alert(appData.budjet/30);


