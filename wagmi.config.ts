import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { Abi } from "viem";
import contractAbi from "./artifacts/contracts/Contract.sol/Contract.json";

export default defineConfig({
  out: "artifacts/contracts/types/generated.ts",
  contracts: [
    {
      name: "Contract",
      abi: contractAbi.abi as Abi,
    },
  ],
  plugins: [react()],
});
