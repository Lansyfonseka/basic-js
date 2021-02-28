const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
<<<<<<< HEAD
  
  try {
    if ( date == undefined ) return 'Unable to determine the time of year!';
    date.getTime();
    let monthNomber = date.getMonth();
    return monthNomber > 10 ? 'winter' : monthNomber > 7 ? 'autumn' : monthNomber > 4 ? 'summer' : monthNomber > 1 ? 'spring' : 'winter';
  }
  catch(err) {
    throw new Error('Unable to determine the time of year!');
  }
    
};
=======
    if (date == undefined) return ('Unable to determine the time of year!');
    try {
        date.getTime();
        let monthNomber = date.getMonth();
        return monthNomber > 10 ? 'winter' : monthNomber > 7 ? 'autumn' : monthNomber > 4 ? 'summer' : monthNomber > 1 ? 'spring' : 'winter';
    } catch (err) {
        throw new Error('Unable to determine the time of year!');
    }

};
>>>>>>> 0718b39954228ecc60afa000dca458c35c3e362b
