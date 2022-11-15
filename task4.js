function palindrome (text) {
    if (text.length > 2) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            result = text[i] + result;
        }
        return console.log(text == result ? "polindrome" : "this not a polindrome");
    }else{
        return console.log('Teks Harus Lebih Dari 2 Huruf !')
    }
}

palindrome('taat');









































// function palindrome(text) {
//     let proses1 = text.toLowerCase();
//     let proses2 = proses1.split('').reverse().join('');
// return proses1 == proses2 ? "palindrome" : "is not a palindrome";
// }
// console.log(palindrome('malam'))
// console.log(palindrome('Deniansyah'))
