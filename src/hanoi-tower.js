const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let secondsInHour = 3600;
  let turnsToSolve = 2 ** disksNumber - 1;
  let secondsToSolve = Math.floor(secondsInHour / turnsSpeed * turnsToSolve);
  
  return {
    turns: turnsToSolve,
    seconds: secondsToSolve
  };
  
};
