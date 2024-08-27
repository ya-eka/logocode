let num = 5;
let squareNumber = (num) => num ** 2;
function check() {
    return (18 < num < 50) ? console.log(squareNumber(num)) : throw new Error('exception');
};

check();