let squareNumber = (num) => num ** 2;

function check(x) {
   try {
      if (x >= 18 && x <= 50) {
         console.log(squareNumber(x))
      }
      else {
         throw new Error('exception')
      }
   } catch (error) {
      console.log(`Было выброшено исключение, так как число ${x} не входит в необходимый диапазон.`)
   }
};

check(50);