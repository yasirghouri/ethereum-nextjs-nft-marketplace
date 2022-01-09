require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString().trim();
const infuraProjectId = fs.readFileSync(".infuraProjectId").toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraProjectId}`,
      accounts: [privateKey],
    },
    // mumbai: {
    //   url: `https://polygon-mumbai.infura.io/v3/${infuraProjectId}`,
    //   accounts: [privateKey],
    // },
    // mainnet: {
    //   url: `https://polygon-mainnet.infura.io/v3/${infuraProjectId}`,
    //   accounts: [privateKey],
    // },
  },
  solidity: "0.8.4",
};
