import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("ContractModule", (m) => {
  const contract = m.contract("Contract", []);

  return { contract };
});
