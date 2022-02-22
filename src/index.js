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
    '*': ' ',
};

function decode(expr) {
    let a = expr.split('')
    let arr = new Array(a.length / 10).fill(4).map(item => a.splice(0, 10))
    let z = arr.map(item => {
        let code = '';
        for (let i = 0; i < 10; i += 2) {
            if ((item[i] + item[i + 1]) === '00' || (item[i] + item[i + 1]) === '01') {
                code = '';
            } else if (item[i] + (item[i + 1]) === '10') {
                code = code + ('.');
            } else if (item[i] + (item[i + 1]) === '11') {
                code = code + ('-');
            } else if (item[i] + (item[i + 1]) === '**') {
                code = '*';
            }
        }
        return code
    })
    let k = z.reduce((acc, item) => {
        item = MORSE_TABLE[item];
        return acc = acc + item

    }, '')
    return k
}

module.exports = {
    decode
}