const string = 'это предложение из заглавных букв каждого слова';

function capitalizeEachWord(string) {
    let arr = string.split(' ');
    let arrCapitalizeEachWord = arr.map(function(word) {
        return word[0].toUpperCase() + word.slice(1)
    });
    return arrCapitalizeEachWord.join(' ')
};

console.log(capitalizeEachWord(string))