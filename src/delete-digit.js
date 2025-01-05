const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let inputStr = n.toString();
  let maxNum = -Infinity;

  for(let i = 0; i < inputStr.length; i++){
    let currentNum = inputStr.slice(0, i) + inputStr.slice(i + 1);

    let num = Number(currentNum);
    if(num > maxNum){
      maxNum = num;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
