/*1 Построить объект студент со свойствами:
Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент, 
а она выводит его содержимое.

*/
function one() {
    let student = {
        name: 'Иван',
        fam: 'Иванович',
        age: 19,
        Interes: ["Спорт", "Рисование"],
        uni: "БГУ"
    }

    function objwrit(student) {
        console.log(student);
    }
    alert('Вывод в консоли');
    objwrit(student);

}
//2
/*2 Заданы два массива A и B необходимо их объединить 
в один массив C так, чтобы в массиве остались уникальные 
(неповторяющиеся) элементы. 
Например: A = [1,2], B = [2,3] получим С = [1, 2, 3].

 */
function two() {
    let a = [1, 2, 3],
        b = [101, 2, 1, 10],
        c = a.concat(b),
        d = c.filter(function (item, pos) {
            return c.indexOf(item) == pos
        });
    alert("Маccив: " + d);
}
//3
/*
Написать отдельную функцию, которая выводит пользователю 
заданное число чисел Фибоначчи. 
(например, первых 8 чисел Фибоначчи:  1, 1, 2, 3, 5, 8, 13, 21). 
Заданное число передается функции в качестве аргумента. 
*/
function three() {
    let a = +prompt("Задайте число");

    function fib(a) {
        let i = 0,
            fib_sum = 0,
            fib1 = 1,
            fib2 = 0,
            s = [];
        while (i < a) {
            fib_sum = fib1 + fib2;
            fib1 = fib2;
            fib2 = fib_sum;
            s[i] = fib2;
            i = i + 1;

        }
        return s;
    }
    alert("Маccив чисел фибоначи: " + fib(a));

}



let i = 0;
//Удобный вход в задания 
//while (i = 1) { 
let a = +prompt("Какое задание вам нужно?");
if ((typeof (a)) != null && a != '' && a > 0 && a < 4) {
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
    alert("Не верное число.Введите целое число в диапазоне 1 - 3:");
}
//}