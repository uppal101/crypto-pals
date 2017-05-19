const scoreText = require('./englishPlaintextScorer');

// From challenge 1
function convertHexTo64(hexString) {
  return new Buffer(hexString, 'hex').toString('base64');
}

// console.assert(convertHexTo64('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d') === 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t');

// From challenge 2
function produceFixedXOR(str1, str2) {
  let buffer1 = new Buffer(str1, 'hex');
  let buffer2 = new Buffer(str2, 'hex');

  let XORCombo = buffer1.map((byte, index) => byte ^ buffer2[index]);
  // console.log(XORCombo.toString())
  return XORCombo.toString('hex');
}

let hexString1 = '1c0111001f010100061a024b53535009181c';
let hexString2 = '686974207468652062756c6c277320657965';
let fixedXORSolutionString = '746865206b696420646f6e277420706c6179';
// console.assert(produceFixedXOR(hexString1, hexString2) === fixedXORSolutionString);

module.exports = convertHexTo64;

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('');
const charCodes = chars.map((char) => char.charCodeAt()) // array of charCodes from 90 to 122 plus 32, missing some too
console.log(charCodes)

// 1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736

function something(charCodes, hexString, bestScore = Number.NEGATIVE_INFINITY) {
  let len = hexString.length; // maybe not right yet
  let fixedLengthHexStrings = charCodes.map((val) => makeFixedLengthHexStrings(val, len));
  // loop through char codes array
  // produce the char codes at the fixed length of hexString
  // do single byte xor
  // convert hex back to string
  // englishPlaintextScorer with string
  // if score is greater than best
  //   reassign best
}

function makeFixedLengthHexStrings(charCode, len) {

}
