const arrCurrent = [1,2,3,4,5];

function invert(arr) {
    for(let i = 0; i < arr.length; i++) {
        let ell = arr.shift();  
        arr.splice(arr.length - i, 0, ell);
    };
    return arr;
} 

console.log(invert(arrCurrent));