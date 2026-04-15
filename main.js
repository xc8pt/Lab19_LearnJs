// 6.2. Объявление функции (классический способ)
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
// Практическое задание №1
function multi(a1, b1) {
    return a1 * b1;
}
console.log(multi(3, 5));

// Функция без return
function sayHello(name) {
    console.log(`Hello, ${name}`);
}
sayHello("Timofey")
// Практическое задание №2
function printInfo(name, age) {
    console.log(`Hello, ${name}, вам ${age} лет`);
}
printInfo("Timofey", 20)

// 6.6. Значения параметров по умолчанию
function greet(name = "Гость") {
    console.log("Привет, " + name);
}
greet();
greet("Anastasia");
// 6.7. Практическое задание №3
function calculateDiscount(num, num2 = 10) {
    const num3 = (num * num2) / 100
    const num4 = num - num3
    console.log("Цена с учетом скидки: ", + num4)
}
calculateDiscount(num = 1000);
calculateDiscount(num = 1000, num2 = 15);

// 6.8. Функции как значения
const add = function (a, b) {
    return a + b;
};
console.log(add(2, 3));

// 6.9. Стрелочные функции (Arrow Functions)
function sumFunc(a, b) {
    return a + b;
}
const sumFunc2 = (a, b) => a + b;