function replaceVowel(text) {
    const character = {a: 'o'};
    return console.log(text.replace(/[a]/g, (c) => character [c]));

    // let split = [...text];
    // let result = split['a'];
    // while (split.length - 6 <= split.length) {
    //     if (result != 'o') {
    //         result += text
    //         console.log(result)
    //     }
    //     split++
    // }
    // return true;
}

replaceVowel('jakarta');