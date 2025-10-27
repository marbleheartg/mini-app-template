# Contributing to Mini App Template

Thank you for your interest in contributing to the Mini App Template! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Bun installed (`curl -fsSL https://bun.sh/install | bash`)
- Node.js 18+ recommended
- Git

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/mini-app-template.git
   cd mini-app-template
   ```
3. Install dependencies:
   ```bash
   bun install
   ```
4. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running Tests

Before making changes, ensure all tests pass:

```bash
bun run test
```

This command will:

- Clean build artifacts
- Compile contracts
- Deploy contracts to localhost
- Run the test suite

### Making Changes

1. **Smart Contracts**: Add new contracts in the `contracts/` directory
2. **Tests**: Add corresponding tests in the `test/` directory
3. **Deployment**: Update Ignition modules in `ignition/modules/` if needed
4. **Configuration**: Update `hardhat.config.ts` for new networks or settings

### Code Style

- Use TypeScript for all scripts and tests
- Follow Solidity style guide for smart contracts
- Use meaningful commit messages
- Keep functions and contracts focused and well-documented

### Testing Your Changes

1. Run the full test suite:

   ```bash
   bun run test
   ```

2. Test compilation:

   ```bash
   bun run compile
   ```

3. Test deployment:

   ```bash
   bun run deploy
   ```

4. Test forking (optional):
   ```bash
   bun run fork
   ```

## Submitting Changes

### Pull Request Process

1. Ensure your branch is up to date with the main branch
2. Run all tests and ensure they pass
3. Commit your changes with clear, descriptive messages
4. Push your branch to your fork
5. Create a pull request with:
   - Clear description of changes
   - Reference to any related issues
   - Screenshots if applicable

### Commit Message Format

Use clear, descriptive commit messages:

```
feat: add new ERC20 token contract
fix: resolve deployment issue with Ignition
docs: update README with new script information
test: add comprehensive test coverage for Contract.sol
```

### Pull Request Guidelines

- Keep PRs focused and reasonably sized
- Include tests for new functionality
- Update documentation as needed
- Ensure all CI checks pass

## Types of Contributions

### Bug Reports

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Bun version, etc.)

### Feature Requests

For new features:

- Describe the use case
- Explain why it would be valuable
- Consider implementation complexity
- Provide examples if applicable

### Documentation

Help improve:

- README.md
- Code comments
- TypeScript type definitions
- Example usage

### Code Contributions

We welcome contributions for:

- New smart contract examples
- Additional test cases
- Hardhat configuration improvements
- Script enhancements
- Bug fixes

## Development Environment

### Local Development

Start a local Hardhat node with Base mainnet forking:

```bash
bun run fork
```

This will start a local node at `http://localhost:8545` forking Base mainnet.

### Testing with External Tools

You can expose your local node for external testing:

```bash
bun run tunnel
```

This uses ngrok to create a public tunnel to your local node.

## Project Structure

```
contracts/           # Solidity smart contracts
ignition/modules/    # Hardhat Ignition deployment modules
test/               # Test files
hardhat.config.ts   # Hardhat configuration
package.json        # Dependencies and scripts
```

## Questions?

- Open an issue for questions or discussions
- Check existing issues before creating new ones
- Be respectful and constructive in all interactions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Mini App Template! 🚀
