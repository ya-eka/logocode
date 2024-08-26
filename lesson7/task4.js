// let i = 0;
// let summa = 0;

// while (i < 101) {
//     i++; 
//     summa = summa + i;
//     if (i == 100) break;
// }
// console.log(summa);  // 5050

let numMin = 0;
let numMax = 100;
let sum = 0;

while ( numMin <= numMax) { 
    sum += numMin++;
}
console.log(sum); 