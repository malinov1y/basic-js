const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let unsortedPart= [];
  let sortedPart = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === -1){
      unsortedPart.push(i);
    }
    else{
      sortedPart.push(arr[i]);
    }
  }

  sortedPart.sort((a, b) => a - b);

  let result = [];
  let sortedIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (unsortedPart.includes(i)) {
      result.push(-1);
    } else {
      result.push(sortedPart[sortedIndex]);
      sortedIndex++;
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};
