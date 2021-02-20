const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Not array');
  }
  let answ = [...arr]
  return [...arr].map ( (e,i,a) => {
    switch (e){
      case '--discard-next':
        a[i+1] = undefined;
        return;
      case '--discard-prev':
        return;
      case '--double-next':
        return a[i+1];
      case '--double-prev':
        return a[i-1];
    }
    if (a[i+1] == '--discard-prev') {
      a[i+1] = undefined;
      return
    }
    return e;
  }).filter( e => e != undefined)  
};
