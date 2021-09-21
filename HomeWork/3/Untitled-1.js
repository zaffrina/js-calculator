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
Дан номер месяца (1 — январь, 
2 — февраль, ...). Вывести название 
соответствующего времени года 
("зима", "весна" и т.д.). 
*/
function three() {
    while (i = 1) {
        let a = +prompt("Введите номер месяца:");
        if (typeof (a) != null && a > 0 && a < 13) {
            switch (a) {
                case 1:
                case 12:
                case 2:
                    alert('Зима');
                    break;
                case 3:
                case 4:
                case 5:
                    alert('Весна');
                    break;
                case 6:
                case 7:
                case 8:
                    alert('Лето');
                    break;
                case 9:
                case 10:
                case 11:
                    alert('Осень');
                    break;
            };
            break;
        } else {
            alert("Неверное число.Введите целое число в диапазоне 1 - 12:");
        }
    }
}

//4
/*
Единицы длины пронумерованы следующим 
образом: 
1 — дециметр, 2 — километр, 
3 — метр, 4 — миллиметр, 5 — сантиметр. 
Дан номер единицы длины и длина 
отрезка L в этих единицах (вещественное 
число). Вывести длину данного отрезка 
в метрах.
*/

function four() {
   

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