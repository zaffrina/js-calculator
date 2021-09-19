// 1. 
//Из трех данных чисел выбрать наименьшее.
function one() {
    let a = +prompt("Введите первое число");
    let b = +prompt("Введите второе число");
    let c = +prompt("Введите третье число");

    if (a < b) {
        min = a
    } else min = b;
    if (c < min)
        min = c;
    alert("Минимальное: " + min);
}
//2
/*Дано целое число в диапазоне 1 - 5. 
Вывести 
строку - словесное описание соответствующей 
оценки 
(1 - "плохо", 
2 - "неудовлетворительно", 

3 - "удовлетворительно", 
4 - "хорошо", 
5 - "отлично"). */
function two() {
    while (i = 1) {
        let a = +prompt("Введите целое число в диапазоне 1 - 5:");
        if (typeof (a) != null && a != '' && a > 0 && a < 6) {

            switch (a) {
                case 1:
                    alert('плохо');
                    break;
                case 2:
                    alert('неудовлетворительно');
                    break;
                case 3:
                    alert('удовлетворительно');
                    break;
                case 4:
                    alert('хорошо');
                    break;
                case 5:
                    alert('отлично');
                    break;
            }
            break;
        } else {
            alert("Неверно.Введите целое число в диапазоне 1 - 5:");
        }
    }

}
//3
/*
Дано целое число в диапазоне 
0 - 9. 
Вывести строку - название соответствующей цифры 
на русском языке 
(0 - "ноль", 1 - "один", 2 - "два", ...).
*/
function three() {
    while (i = 1) {
        let a = +prompt("Введите целое число в диапазоне 0 - 9:");

        if (typeof (a) != null && a > -1 && a < 10) {
            switch (a) {
                case 0:
                    alert('Ноль');
                    break;
                case 1:
                    alert('Один');
                    break;
                case 2:
                    alert('Два');
                    break;
                case 3:
                    alert('Три');
                    break;
                case 4:
                    alert('Четыре');
                    break;
                case 5:
                    alert('Пять');
                    break;
                case 6:
                    alert('Шесть');
                    break;
                case 7:
                    alert('Семь');
                    break;
                case 8:
                    alert('Восемь');
                    break;
                case 9:
                    alert('Девять');
                    break;
            };
            break;
        } else {

            alert("Неверное число.Введите целое число в диапазоне 0 - 9:");
        }
    }
}


//4
/*
Дано целое число, лежащее в диапазоне от -999 до 999. 
Вывести строку - словесное описание данного числа вида 
"отрицательное двузначное число", 
"нулевое число", 
"положительное однозначное число" и т.д.
*/

function four() {
    let count = 0;
    while (i = 1) {
        let a = +prompt("Введите число в диапазоне от -999 до 999 ");
        if (typeof (a) != null && a > -1000 && a < 1000) {
            let b = a.toLocaleString();
            if (a === 0) {
                alert("Нулевое число");
            } 
                if (a > 0) {
                    alert(a+" "+b.length);
                    switch (b.length) {
                        case 1:
                            alert("Положительное однозначное число");
                            break;
                        case 2:
                            alert("Положительное двухзначное число");
                            break;
                        case 3:
                            alert("Положительное трехзначное число");
                            break;
                    }
                } else {
                    alert(a+" "+b.length);
                    switch (b.length) {
                        case 2:
                            alert("Отрицательное однозначное число");
                            break;
                        case 3:
                            alert("Отрицательное двухзначное число");
                            break;
                        case 4:
                            alert("Отрицательное трехзначное число");
                            break;
                    }

                }

            
        } else {
            alert("Неверные данные.Введите число в диапазоне от -999 до 999 ");
        }
    }
}

let i = 0;
//Удобный вход в задания 
while (i = 1) {
    let a = +prompt("Какое задание вам нужно? ");
    if ((typeof (a)) != null && a != '' && a > 0 && a < 6) {
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

        }

    } else {
        alert("Не верное число.Введите целое число в диапазоне 1 - 5:");
    }
}