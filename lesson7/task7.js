// let number = 1000;
// let count = 0;

// while (number > 50) {
//     number = number / 2;
//     count = count + 1;
//     if (number < 50) {
//     console.log(count);
//     } break;
// }

// let numMin = 50;
// let numMax = 1000;
// let i = 0;

// while (numMax > numMin) {
//     numMax = numMax / 2;
//     if (numMax < numMin) console.log('Количество итераций необходимых для выхода из цикла: ' + i);
//     i++;
// }

let numMin = 50;
let numMax = 1000;
let count = 0;

while (numMax >= numMin) {
    numMax = numMax / 2;
    count++;
}

console.log(count);