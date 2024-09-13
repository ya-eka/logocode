// let num = 5;
// let squareNumber = (num) => num ** 2;
//
// function check() {
//     return (18 < num < 50) ? console.log(squareNumber(num)) : throw new Error('exception');
// };
//
// check();

// let squareNumber = (num) => num ** 2;

// function check(x) {
//     if (18 < x < 50) {  //18 < 5 = false, false < 50 = 0 < 50 = true
//         console.log(squareNumber(x))
//      } else {
//         throw new Error('exception')
//      }  
// };
// check(5);


// let squareNumber = (num) => num ** 2;

// function check(x) {
//     if ((18 < x) & (x < 50)) {
//         console.log(squareNumber(x))
//      } else {
//         throw new Error('exception')
//      }  
// };

// check(19);

let squareNumber = (num) => num ** 2;

function check(x) {
   try {
      if ((18 <= x) & (x <= 50)) {
         console.log(squareNumber(x))
      }
      else {
         throw new Error('exception')
      }
   } catch (error) {
      console.log(`Было выброшено исключение, так как число ${x} не входит в необходимый диапазон.`)
      //throw new Error('exception')
   }
};

check(5);

