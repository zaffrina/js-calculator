// 1. 
//Заданы два массива 
/*A = [ 12, 4, 3, 10, 1, 20 ]  
B = [-3, -7, -100, -33] 
необходимо их объединить 
в один массив C добавив 
массив B в конец(в начало) A. 
*/
function one() {
    let A = [12, 4, 3, 10, 1, 20],
        B = [-3, -7, -100, -33],
        c = [];
    c = A.concat(B);
    alert("Массив: " + c);
}
//2
/*Одномерным массивом задана доска 3 на 3 
var area = 
[ null, null, null, null, null, null, null, null, null ]

Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 

При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 

Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
НЕ ГОТОВО ЕЩЕ
 */
function two() {
    let s = prompt("Ввведите массив через пробел"),
        mas = s.split(' ');


}
//3
/*
Задан массив  - [12,4,3,10,1,20]. 
Удалить из него наименьшее и наибольшее значение.
*/
function three() {
    let s = [12, 4, 3, 10, 1, 20],
        min = s.indexOf(Math.min(...s)),
        max = s.indexOf(Math.max(...s));
    s.splice(max, 1);
    s.splice(min, 1);

    alert("Маccив: " + s);
}

//4
/*
Задан массив - [12,4,3,10,1,20]. 
Необходимо отсортировать его в порядке возрастания, 
при этом не использовать готовый метод sort 
и методы разобранные на занятии.
Снабдите комментариями каждую строку.
*/

function four() {
    let m = [12, 4, 3, 10, 1, 20],
        k;
        //сортировка методом пузырька
    for (let i = 0; i < 5; i++) { // Повторяем перебор элементов пока не пройдемся сортировкой по всему массиву
        for (let j = 0; j < 5; j++) {//Цикл сортировки элементов
            if (m[j] > m[j + 1]) {//Сравниваем два соседних элемента, если больше то меняем местами
                k = m[j]; // к - сохраняет значение что бы его не потерять при смене значений
                m[j] = m[j + 1];//меняем значение
                m[j + 1] = k;// значение пр-щего элемента из к 
            }
        }
    }
    alert("Маccив: " + m);// выводим массив
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