import { network } from "hardhat";
import assert from "node:assert/strict";
import { describe, it } from "node:test";

describe("Contract", async function () {
  const { viem } = await network.connect();
  const publicClient = await viem.getPublicClient();

  it("Should deploy the contract", async function () {
    const contract = await viem.deployContract("Contract");

    assert.equal(1, 1);
  });
});
