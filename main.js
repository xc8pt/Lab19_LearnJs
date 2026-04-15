// 7.2. Создание массива
let numbersArr = [1,2,3,4,5];
console.log(numbersArr);
// 7.3. Доступ к элементам массива
console.log(numbersArr[0]);

// 7.4. Практическое задание №1
let colors = ["blue", "green", "yellow"];
console.log(colors[0]);
console.log(colors[2]);
colors[1] = "orange";
console.log(colors[1]);

// 7.5. Длина массива
console.log(numbersArr.length);
// 7.6. Добавление и удаление элементов
numbersArr.push(10);
console.log(numbersArr);

numbersArr.pop();
console.log(numbersArr);

// 7.7. Практическое задание №2
let students = [];
students.push("Anton", "Ilya", "Rinat");
console.log(students)
students.pop();
console.log(students);

// 7.8. Перебор массива с помощью цикла for
let number2 = [10,20,30];
for (let i = 0; i < number2.length; i++) {
    console.log(number2[i]);
}
// 7.9. Цикл for...of
for (let value of number2) {
    console.log(value);
}
// 7.10. Массивы с разными типами данных
let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);
// 7.11. Поиск элемента в массиве
console.log(numbersArr.includes(1));
console.log(numbersArr.indexOf(2));

//console.log(fruits.includes("яблоко"));
//console.log(fruits.includes("манго"));

// 7.12. Практическое задание №4
let city = ["Volz", "Volg", "Znamensky"];
console.log(city.includes("Volz"))
console.log(city.indexOf("Volz"))
