const array1 = [123, 456, 789, 234, 567];
const array2 = [345, 678, 987, 321, 654];
let sumArrEl = 0;

function sumArr(arr1, arr2) {
    for(let i = 0; i < array1.length; i++) {
        let sumEll = arr1[i] + arr2[i];
        sumArrEl += sumEll;
    }
    return sumArrEl;
};

console.log(sumArr(array1, array2));