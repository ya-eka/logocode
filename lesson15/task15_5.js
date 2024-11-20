const string = 'Я так сильно люблю программировать';

function lengthWord(string) {
    let array = string.split(' ');
    let lengthWord = 0;
    let newArray = [];
    let newString = ' ';
    array.forEach(element => {
        lengthWord = element.length;
        newArray.push(lengthWord);     
        newString = newArray.join(',')      
    }); 
    return newString  
};

console.log(lengthWord(string))