require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      // accounts: [`${process.env.METAMASK_PRIVATE_KEY}`],
      accounts: [privateKey],
    },
    // mumbai: {
    //   url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    //   accounts: [`${process.env.METAMASK_PRIVATE_KEY}`],
    // },
    // mainnet: {
    //   url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    //   accounts: [`${process.env.METAMASK_PRIVATE_KEY}`],
    // },
  },
  solidity: "0.8.4",
};
