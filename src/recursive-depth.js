const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)){
      throw new Error("Input must be an array");
    }

    let maxDepth = 1;
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        const depth = this.calculateDepth(arr[i])

        if(depth + 1 > maxDepth){
          maxDepth = depth + 1;
        }
      }
    }

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
