const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;

  matrix.forEach(element => {
    let matrixRow = `.${element.join('..')}.`
    let catsInRow = matrixRow.match(/\S(\^)\1\S/g)
    if(catsInRow) {
      count += catsInRow.length
    }
  })

  return count;
};
