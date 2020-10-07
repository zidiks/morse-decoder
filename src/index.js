const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let divideArray = [];
    for (let index = 0; index < expr.length / 10; index++) {
        divideArray.push(parseInt(expr.substring(index * 10, index * 10 + 10), 10).toString().match(/.{1,2}/g))
    }
    return divideArray.map(item => {
        let substr = item.map(item => item == '10' ? '.' : item == '11' ? '-' : '*').join('');
        return substr.includes('*') ? ' ' : MORSE_TABLE[substr];
    }).join('');
}

module.exports = {
    decode
}