# Mini App Template

A minimal Hardhat + Bun template for developing Solidity smart contracts with TypeScript tooling.

### Features

- **Hardhat** with Solidity 0.8.30 and EDR (Ethereum Development Runtime)
- **Base Mainnet** forking support
- **Bun** for fast scripts (`bunx` wrapper for Hardhat)
- **OpenZeppelin Contracts** and **Viem**
- **Hardhat Ignition** for deployment management
- Example contract, test, and Ignition module scaffold

---

## Prerequisites

- Bun installed (`curl -fsSL https://bun.sh/install | bash`)
- Node.js 18+ recommended

## Setup

1. Install dependencies:
   ```bash
   bun install
   ```

## Scripts

Defined in `package.json`:

- `bun run clean` — clean build artifacts
- `bun run compile` — compile contracts
- `bun run deploy` — deploy contracts to localhost using Ignition
- `bun run test` — run tests (includes clean, compile, deploy, and test)
- `bun run fork` — start a Hardhat node forking Base mainnet
- `bun run tunnel` — expose local node via ngrok tunnel

Example usage:

```bash
bun run compile
bun run test
bun run fork
```

## Project Structure

```
contracts/
  Contract.sol            # Example contract
  types/
    index.sol             # Types scaffold
ignition/
  modules/
    Contract.ts           # Ignition deployment module (scaffold)
test/
  Contract.ts             # Example viem-based tests
hardhat.config.ts         # Hardhat config (Cancun, Base fork)
```

## Hardhat Configuration Notes

- Solidity `0.8.30` with optimizer (200 runs)
- EDR (Ethereum Development Runtime) networks configured for L1 and Optimism-style chains
- Fork script uses Base mainnet (`https://mainnet.base.org`)

## Deployment

### Thirdweb Deployment

Deploy contracts using Thirdweb CLI:

```bash
bunx thirdweb deploy -k <project-secret-key>
```

### Hardhat Ignition Deployment

This repo includes an Ignition module scaffold at `ignition/modules/Contract.ts`. Deploy contracts using:

```bash
bun run deploy
```

Or manually:

```bash
bunx hardhat ignition deploy ./ignition/modules/Contract.ts --network localhost --reset
```

## Troubleshooting

- Missing TypeScript: install a compatible version
  ```bash
  bun add -d typescript@^5.8.3
  ```
- Bun not found: open a new terminal so your shell picks up Bun, or install via the Bun docs.
- Fork issues: ensure you have internet connectivity for Base mainnet access.

## License

MIT
