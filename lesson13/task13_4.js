const arr = [42, 17, -5, 100, 0, 8, -23, -55, -7, 91];
let maxNumber = arr[0]; 

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
    }
}

console.log(maxNumber);