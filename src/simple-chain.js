const CustomError = require("../extensions/custom-error");

const chainMaker = {
  'chain': [],
  getLength() {
    // console.log(chain);
    return this.chain.length;
  },
  addLink(value) {
    if (value === '') {
      this.chain.push(`( )`);
      // console.log(this);
      return this;
    } else {
      this.chain.push(`( ${value} )`);
      // console.log(this);
      return this;
    }
  },
  removeLink(position) {
    if (this.chain[position] === 'underfined' || isNaN(+position) || position === '') {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    console.log(this);
    return this;
  },
  finishChain() {
    let linked = this.chain.join('~~');
    this.chain = [];
    console.log(linked);
    return linked;
  }
};

module.exports = chainMaker;
