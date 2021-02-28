const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(parametr){
    this.reverse = parametr === false;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(string, key) {
    if ( string == undefined || key == undefined) throw new Error();
    key = key.repeat(Math.ceil(string.length / key.length)).slice(0,string.length).toUpperCase();
    string = string.toUpperCase();
    let countOffset = 0;
    string = string.split('').map( (e,i) => {
      if (e.match('[A-Z]')) {
        let indexOfString = this.alphabet.indexOf(e);
        let indexOfKey = this.alphabet.indexOf(key[i-countOffset]);
        let result = indexOfString+indexOfKey;
        return this.alphabet[result > 25 ? result - 26 : result];
      }
      else {
        countOffset++;
        return e;
      }
    }).join('');;
    return this.reverse == true ? this.invert(string) : string;
  }    
  decrypt(string, key) {
    if ( string == undefined || key == undefined) throw new Error();
    key = key.repeat(Math.ceil(string.length / key.length)).slice(0,string.length).toUpperCase();
    string = string.toUpperCase();
    let countOffset = 0;
    string = string.split('').map( (e,i) => {
      if (e.match('[A-Z]')) {
        let indexOfString = this.alphabet.indexOf(e);
        let indexOfKey = this.alphabet.indexOf(key[i-countOffset]);
        let result = indexOfKey-indexOfString;
        return this.alphabet[result < 1 ? -result : 26 - result];
      }
      else {
        countOffset++;
        return e;
      }      
    }).join('');
    return this.reverse == true ? this.invert(string) : string;
  }
  invert(string){
    return string.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
