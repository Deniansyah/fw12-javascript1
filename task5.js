function replaceA (text) {
    if (typeof text == "string") {
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

replaceA('jakarta');































// function replaceVowel(text) {
//     const character = {a: 'o'};
//     return console.log(text.replace(/[a]/g, (c) => character [c]));
// }

// replaceVowel('jakarta');
