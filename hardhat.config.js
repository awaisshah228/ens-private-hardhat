require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const ETHER_SCAN_API = process.env.ETHER_SCAN_API;

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: `${ETHER_SCAN_API}`
  }
};


// ENS Registery: 0x81492CB52FA41141836647DE34b8b14c264bB91e
// ENS Resolver: 0xc3BEC17dc74E8EA23F38524B6B5C0fFeb6C91232
// ENS FIFS Registart: 0xD75498267076B0305A6660689302A00Cae59D36B
// ENS ReverseRegistrar: 0x2F772054931888E0d11C5A1A2FAE3a6D124a07a2
// done