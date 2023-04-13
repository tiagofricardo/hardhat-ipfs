require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();

/*@type import('hardhat/config').HardhatUserConfig*/

const GOERLI_RPC_URL =
  process.env.GOERLI_RPC_URL || "https://eth-rinkbey/example";
const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL || "https://eth-rinkbey/example";
const POLYGON_RPC_URL =
  process.env.POLYGON_RPC_URL || "https://eth-rinkbey/example";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key";
const POLYSCAN_API_KEY = process.env.POLYSCAN_API_KEY || "key";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key";

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
      blockConfirmations: 6,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6,
    },
    mumbai: {
      url: POLYGON_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
      blockConfirmations: 6,
    },

    localhost: {
      chainId: 31337,
    },
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-reporter.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC",
  },
  etherscan: {
    // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
      polygonMumbai: POLYSCAN_API_KEY,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: { default: 1 },
  },
  mocha: { timeout: 500000 },
};
