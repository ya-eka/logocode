const arrWords = ['радар', 'анна', 'машина', 'шалаш', 'казан', 'варяг', 'потоп'];

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return 'Это НЕ палиндром'; 
        }
    }
    return 'Это палиндром'; 
}

function allPolindromes(arr) {
    const palindromes = [];

    for (let i = 0; i < arr.length; i++) {
        const currentWord = arr[i]; 
        if (isPalindrome(currentWord) === 'Это палиндром') {
            palindromes.push(currentWord);
        }
    }

    return palindromes; 
}

console.log(allPolindromes(arrWords)); 