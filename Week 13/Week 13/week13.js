//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
let currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.

// Вариант 1
// let currentYear = new Date();
// console.log(currentYear.getFullYear());

// Вариант2
let currentYear = new Date();
currentYear.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
let currentMonth = new Date();
console.log(currentMonth.getMonth());

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.

let currentDay = new Date();
console.log(currentDay.getDay());

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date();
let now = new Date(
  birthday.getFullYear(),
  birthday.getMonth(),
  birthday.getDate()
);
let birthDate = new Date(1984, 5, 14);
let then = new Date(
  now.getFullYear(),
  birthDate.getMonth(),
  birthDate.getDate()
);
console.log(then);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
let futureDate = new Date(2023, 9, 15);
futureDate.setDate(futureDate.getDate() + 10);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
// let futureDate = new Date(2023,9,15);
// futureDate.setDate(futureDate.getDate()+10);
// console.log(futureDate);

// let currentDate = new Date();
// let dateDiff = futureDate - currentDate;
// console.log(+dateDiff);

let days = new Date(dateDiff);
let anotherDay = Math.abs(days.getUTCDate() - 15);
console.log(anotherDay);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.

// let pastDate = new Date(2023,9,15);
// pastDate.setDate(pastDate.getDate()-5);
// console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate

let pastDate = new Date(2023, 9, 15);
pastDate.setDate(pastDate.getDate() - 5);
console.log(pastDate);

// let currentDate = new Date();
// let diff = pastDate - currentDate;
// console.log(diff);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.

// let nextWeek = new Date(2023,8,15);
// nextWeek.setDate(nextWeek.getDate()+5);
// console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek

let nextWeek = new Date(2023, 8, 15);
nextWeek.setDate(nextWeek.getDate() + 5);
console.log(nextWeek);
console.log(`День недели:${nextWeek}`);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.

// let futureYear = new Date();
// futureYear.setFullYear(futureYear.getFullYear()+5);
// console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
let futureDateInFutureYear = new Date(2024, 5, 14);
let futureYear = new Date(futureDateInFutureYear.getFullYear());
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
// let currentYear = new Date();
// currentYear.getFullYear();
// console.log(currentYear);

// let futureYear = new Date();
// let diff = futureYear - currentYear;
// console.log(diff);

// //Задание 15
// // Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// // Выведите объект date в консоль.
// const strDate = "2023-06-15T08:30:00.000Z";
// let date = new Date(Date.parse("2023-06-15T08:30:00.000Z"));
// console.log(date);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.

const strDate = Date.parse("2023-06-15T08:30:00.000Z");
console.log(strDate);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = "2023/06/15";
let wrongDate = new Date(Date.parse("2023/06/15"));

if (wrongDate == NaN) {
  console.log("Неправильный формат даты");
} else {
  console.log("Правильный формат даты");
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;

if (number == 231) {
  console.log("Positive integer");
} else {
  console.log("Negative Integer");
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
// const number = 231;
// if (number % 2) {
//   console.log("Четное число");
// } else {
//   console.log("Нечетное число");
// }

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
// const number = 231;

// if (number % 3 == 0 ){
//   console.log("Кратно 3");
// }else{
//   console.log("Не кратно 3");
// }

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
// const number = 231;

// if (number > 1){
//   console.log("Число не однозначное");
// }else{
//   console.log("Число однозначное");
// }

// if (number > 1) {
//   console.log("Число неоднозначное");
// }else if(number<=1){
//   console.log("Число однозначное");
// }

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
// const number = 231;

if (number > 2) {
  console.log("Число недвузначное");
} else {
  console.log("Число двузначное");
}
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.

// const number = 231;
if (Math.sign(number)) {
  console.log("Число положительно");
} else {
  console.log("number = 0");
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
// const number = 231;

// if (number % 5==0 || number % 7 == 0) {
//   console.log(number);
// }else{
//   console.log("Не кратно 5 или 7");
// }

// if (number % 5){
//   console.log(number);
// }else if (number % 7){
//   console.log(number);
// }

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
// const number = 231;

if (number > 0) {
  console.log("Число положительно");
} else if (number < 0) {
  console.log("Число отрицательно");
} else {
  console.log("Равно нулю");
}
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
// const number = 231;

if (number > 200 || number < 99) {
  console.log("Число трехзначное");
} else {
  console.log("Число двузначное");
}
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
// let number = +prompt("Введите число соответствующее дню недели", "");

switch (number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Unknown day");
}

// /Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = prompt("Введите букву соответствующие части света", "");
let fullName = " ";

switch (direction) {
  case "N":
    fullName = "North";
    console.log(fullName);
    break;
  case "S":
    console.log("South");
    break;
  case "E":
    console.log("East");
    break;
  case "W":
    console.log("West");
    break;
  default:
    console.log("Unknown part of the world");
}
