// function palindrome(text) {
//     let proses1 = text.toLowerCase();
//     let proses2 = proses1.split('').reverse().join('');

//     return proses1 == proses2 ? "palindrome" : "is not a palindrome";
// }

// console.log(palindrome('malam'))
// console.log(palindrome('Deniansyah'))


const palindrome = (text) => {
    let length = 0;
    do {
        length++
    } while (text[length]);

    let i = length - 1;
    let result = '';
    for(; i >= 0; i-- ){
        result += text[i]
    }
return console.log(text == result ? 'polindrome' : 'this not a polindrome')
}

palindrome("takut");