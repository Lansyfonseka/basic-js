const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(value);
    return this
  },
  removeLink(position) {
    if (position < 0 || position > this.chains.length || typeof(position) != 'number'){
      this.chains = new Array();
      throw new Error();
    }      
    this.chains.splice(position-1,1);
    return this
  },
  reverseChain() {
    this.chains.reverse();    
    return this
  },
  finishChain() {
    let result = this.chains.map( e => `( ${e} )`).join('~~');
    this.chains = new Array();
    return result;
  },
  chains : []
};

module.exports = chainMaker;
