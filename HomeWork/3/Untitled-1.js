// 1. 
//Задать размер ипотечного кредита, процентную ставку, кол-во лет . Найти 
//переплату по кредиту, значение переплаты вывести пользователю. 
function one() {
    while (i = 1) {
        summ = +prompt("Ввведите размер ипотечного кредита"),
            age = +prompt("Введите количество лет"),
            proc = +prompt("Введите процентную ставку");
        age = age * 12;
        // все формулы с сайта https://mortgage-calculator.ru/%D1%84%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0-%D1%80%D0%B0%D1%81%D1%87%D0%B5%D1%82%D0%B0-%D0%B8%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B8/
        // Считаем ежемесячную ставку 
        let stav = proc / 12 / 100,
            //Общая ставка
            obsh = Math.pow(1 + stav, age);
        //ЕЖЕМЕСЯЧНЫЙ ПЛАТЕЖ
        plat = summ * stav * obsh / (obsh - 1);
        //ПЕРЕПЛАТА
        perep = plat * age - summ;
        //Округлим значения для вывода
        alert("Переплата составляет: " + Math.round(perep) + " р.");
        alert("Ежемесячный платеж составляет: " + Math.round(plat) + " p.");
    }
}
//2
/*Дана строка, изображающая целое число. Вывести сумму цифр этого числа. 
 */
function two() {
    let num = +prompt("Ввведите число"),
        sum = 0,
        tmp = 0;
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
    }
    alert("Сумма: " + sum);
}
//3
/*
Дана строка S и символ C. Удвоить каждое вхождение символа C в строку S.
*/
function three() {
    let s = prompt("Ввведите строку"),
        c = prompt("Ввведите символ"),
        c2 = c + c;
    alert("Строка: " + s.split(c).join(c2));

}

//4
/*
Проверить что введенный пароль удовлетворяет 
следующим условиям сложности:
- длинна от 9 символов;
- содержит обязательно английские буквы верхнего и нижнего регистра;
- содержит более двух цифр;
- содержит обязательно один из неалфавитных символов (например, !, $, #, %)..
*/

function four() {
    let password = prompt("Введите пароль: "),
        count = 0;

    if (password.length > 9) {
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
            if (/\W/.test(password)) {
                count=password.length-password.replace(/\d/gm,'').length;
                if (count > 2) {
                    alert("Пароль верный");
                } else {
                    alert("Пароль не содержит более двух цифр");
                }

            } else alert("Пароль не содержит один из неалфавитных символов");
        } else alert("Пароль не английские буквы верхнего и нижнего регистра");

    } else {
        alert("Пароль меньше 9 символов!");
    }
    /[a-z]/
}

let i = 0;
//Удобный вход в задания 
while (i = 1) {
    let a = +prompt("Какое задание вам нужно?");
    if ((typeof (a)) != null && a != '' && a > 0 && a < 5) {
        i = 1;
        switch (a) {
            case 1:
                one();
                break;
            case 2:
                two();
                break;
            case 3:
                three();
                break;
            case 4:
                four();
                break;
                //           case 5:
                //              five();
                //            break;
        }

    } else {
        alert("Не верное число.Введите целое число в диапазоне 1 - 4:");
    }
}