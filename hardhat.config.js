require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const INFURA_URI_ROPSTEN = "https://ropsten.infura.io/v3/6ac45c570c8f4d3cb1ea891b7b0e3ecc";
const INFURA_URI_RINKEBY = 'https://rinkeby.infura.io/v3/6ac45c570c8f4d3cb1ea891b7b0e3ecc';
const PRIVATE_KEY = "b191b1348b71e4a55425eefd7cef1e69a2a18456cabca4a12af77d396986bcf8"; 


module.exports = {
  solidity: "0.8.7",
  networks: {
    ropsten: {
      url: INFURA_URI_ROPSTEN,
      accounts: [`0x${PRIVATE_KEY}`], 
    },

    rinkeby: {
      url: INFURA_URI_RINKEBY,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  }
};


