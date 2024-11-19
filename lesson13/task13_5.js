const number = 87193201;

function oddEvenParity(number) {
    let string = '' + number;
    let arr = '';
    
    for (let i = 0; i < string.length; i++) {
        arr = arr + string[i];
        console.log(arr);

        if (i < string.length - 1 && string[i] % 2 !== 0 && string[i + 1] % 2 !== 0) {
            arr = arr + ':';
        }
    }
    return arr;
}
console.log(oddEvenParity(number));