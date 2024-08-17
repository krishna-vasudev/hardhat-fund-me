require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers")

SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY
ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
COINMARKETCAP_API_KEY=process.env.COINMARKETCAP_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  solidity: "0.8.14",
    networks: {
        hardhat: {},
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [SEPOLIA_PRIVATE_KEY],
            chainId: 11155111,
            blockConfirmations:6,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter:{
      enabled:true,
      currency: "USD",
      outputFile: "gas-report.txt",
      noColors: true,
      // coinmarketcap: COINMARKETCAP_API_KEY,
    //   token:"ETH",
      // gasPriceApi:ETHERSCAN_API_KEY
      
    },
    namedAccounts: {
      deployer: {
          default: 0, // here this will by default take the first account as deployer
          1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
      },
    },
};
