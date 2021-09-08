
//Просим данные у пользователя + обявляем переменные и объект
let money = prompt("Ваш бюджет на месяц?")
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budjet : money,
    timeData : time,
    expenses :  {},
    optionalExpenses : {},
    income : [],
    savings: false 
};

for (let i = 0; i < 2; i++)
{
    let userIn = prompt("Введите обязательную статью расходов в этом месяце")
    userIn2 = prompt("Во сколько обойдется?");

    if ( typeof(userIn) === 'string' && (typeof(userIn)) != null && (typeof(b)) != null  ){

    }
    appData.expenses[userIn] = userIn2;
}


// Выводим бюджет

 alert("Ваш бюджет на день");
 alert(appData.budjet/30);


