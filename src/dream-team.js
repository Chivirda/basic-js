const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members instanceof Array) {
    let nameTeam = '';
    let tempArr = []
    
    members.sort().forEach(element => {
      if(typeof(element) === 'string') {
        tempArr.push(element.trim()[0].toUpperCase());
      }
    });

    tempArr.sort();
    nameTeam = tempArr.join('');

    return nameTeam;
  }

  return false;
};
