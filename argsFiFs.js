const namehash = require('eth-ens-namehash');
const tld = "test";
module.exports = [
    "0x81492CB52FA41141836647DE34b8b14c264bB91e",
    namehash.hash(tld)
  ];