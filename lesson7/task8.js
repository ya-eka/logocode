// let number = 44;

// while (number < 170) {
//     number++;
//     if (number % 10 != 0) continue;
//     console.log(number);
// }

let numMin = 45;
let numMax = 170;

while (numMin <= numMax) {
    if (numMin % 10 === 0) console.log(numMin);
    numMin++;
}