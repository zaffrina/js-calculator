
//Просим данные у пользователя + обявляем переменные и объект
let money,time;
function start ( ) {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while ( isNaN(money) || money == "" || money == null)
    {
        money = +prompt("Ваш бюджет на месяц?");

    }
}
start ( );

let appData = {
    budjet : money,
    timeData : time,
    expenses :  {},
    optionalExpenses : {},
    income : [],
    savings: false,
    moneyPerDay : money
};
function chooseOptExpenses () {
    for (let i = 0; i < 2; i++)
{
    let userIn = prompt("Введите обязательную статью расходов в этом месяце")
    let userIn2 = prompt("Во сколько обойдется?");

    if ( typeof(userIn) === 'string' && (typeof(userIn)) != null && (typeof(userIn2)) != null
    && userIn != ''&& userIn2 != '' && userIn.length < 50  )
    {
        appData.expenses[userIn] = userIn2;
    }
    else {
        i=i-1;
    }
    
}
}
chooseOptExpenses ();

    
// Выводим бюджет
appData.moneyPerDay = (appData.budjet/30).toFixed();
 alert("Ваш бюджет на день " + appData.moneyPerDay);

 if (appData.moneyPerDay < 100) {
console.log("Минимальный уровень достатка");
}
else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
    console.log("Средний уровень достатка");
}
else if (appData.moneyPerDay < 2000 ){
    console.log("Высокий уровень достатка");
} 
else {
    console.log("Ошибка");
}


 