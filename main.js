// 5.1
/*
for (let i = 0; i < 5; i++) {
    console.log(i);
}
*/

// prac 5.3
/*
for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
let sum = 0
for (let i = 0; i < 11; i++) {
    sum += i
}
console.log(sum)
*/

// 5.4. Цикл while
/*
let count = 0;

while (count < 3) {
    console.log("Count:",count);
    count++;
}
*/
// Практическое задание №2
/*
let number = 5;

while (number >= 0) {
    console.log("Num:", number);
    number--;
}
*/

// 5.6. Цикл do...while
/*
let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++;
} while (doValue < 3);
// 5.7. Операторы break и continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
*/

// Практическое задание №4
/*
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    } else if(i === 8) {
        break;
    }
    console.log(i);
}
*/

//  5.9. Вложенные циклы
/*
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
*/
// 5.10. Практическое задание №5
for (let i = 1; i <= 4; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
