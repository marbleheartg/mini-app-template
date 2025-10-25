import "@nomicfoundation/hardhat-toolbox-viem";
import * as dotenv from "dotenv";
import type { HardhatUserConfig } from "hardhat/config";
import { base } from "viem/chains";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.30",
    settings: {
      viaIR: false,
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "cancun",
    },
  },
  networks: {
    hardhat: {
      hardfork: "cancun",
      forking: {
        url: ``,
        blockNumber: 31564648,
      },
      chains: {
        [base.id]: {
          hardforkHistory: {
            cancun: 0,
          },
        },
      },
    },
  },
};

export default config;
