require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const INFURA_URI_ROPSTEN = "";
const INFURA_URI_RINKEBY = '';
const PRIVATE_KEY = ""; 


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


