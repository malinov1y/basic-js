const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const inputString = String(n);

  if (inputString.length !== 17){
    return false;
  }

  for (let i = 0; i < inputString.length; i += 1) {
    if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14) {
      if (inputString[i] !== '-'){
        return false;
      }
    }
    else{
      const elem = inputString[i];
      if (!(elem >= '0' && elem <= '9') && !(elem >= 'A' && elem <= 'F')) {
        return false;
      }
    }
  }

  return true;
}

module.exports = {
  isMAC48Address
};
