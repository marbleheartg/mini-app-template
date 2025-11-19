# Contributing

## Setup

1. Fork and clone the repository
2. Install dependencies: `bun install`
3. Create a branch: `git checkout -b feature/your-feature-name`

**Prerequisites:** Bun, Node.js 18+, Git

## Development

### Running Tests

```bash
bun run test      # Full test suite (compile + deploy + test)
bun run compile   # Compile contracts only
bun run deploy    # Deploy contracts
bun run fork      # Start local node with Base mainnet fork
```

### Making Changes

- **Contracts**: Add to `contracts/`
- **Tests**: Add to `test/`
- **Deployment**: Update `ignition/modules/` if needed
- **Config**: Update `hardhat.config.ts` for new networks

### Code Style

- Use TypeScript for scripts/tests
- Follow Solidity style guide
- Write clear commit messages
- Keep code focused and documented

## Submitting Changes

1. Ensure tests pass: `bun run test`
2. Commit with clear messages (e.g., `feat: add new contract`, `fix: resolve deployment issue`)
3. Push and create a PR with:
   - Clear description
   - Related issue references
   - Screenshots if applicable

**PR Guidelines:**
- Keep PRs focused and reasonably sized
- Include tests for new functionality
- Update documentation as needed

## Project Structure

```
contracts/           # Solidity contracts
ignition/modules/    # Deployment modules
test/               # Test files
hardhat.config.ts   # Hardhat config
```

## Questions?

Open an issue for questions or discussions. Check existing issues first.

---

By contributing, you agree to license your contributions under the MIT License.
