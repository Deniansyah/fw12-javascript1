// function replaceVowel(text) {
//     const character = {a: 'o'};
//     return console.log(text.replace(/[a]/g, (c) => character [c]));
// }

// replaceVowel('jakarta');

function replaceVowel (text) {
    var cek = typeof ''
    if (typeof text == cek) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            if (text[i] === 'a') {
                result = result + 'o'
            }else {
                result = result + text[i]
            }
        }
        return console.log(result);
    }else {
        return console.log('Tipe Data Teks Harus String !');
    }
}

replaceVowel('jakarta');