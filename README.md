# Playwright-KT-2

## Overview

This project demonstrates modular, maintainable Playwright end-to-end testing using the MCP workflow and best practices. It includes:

- Page Object Models in `src/pages/`
- Fixtures in `src/fixtures/`
- Utilities in `src/utils/`
- Environment variables in `env/.env`
- Tests in `tests/`
- Evidence screenshots in `test-results-evidences/[Test_Case_ID]/`
- Test summary reports in `reports/`

## Getting Started

1. Install dependencies:
   ```powershell
   npm install
   ```
2. Set your base URL and other variables in `env/.env`.
3. Run tests:
   ```powershell
   npx playwright test
   ```

## Project Structure

- `src/pages/` - Page Object Model classes
- `src/fixtures/` - Playwright fixtures for page objects
- `src/utils/` - Utility functions and environment loader
- `env/.env` - Environment variables
- `tests/` - Test files
- `test-results-evidences/` - Screenshots and evidence
- `reports/` - Test summary reports

## Best Practices

- Use path aliases for imports (see `tsconfig.json`)
- Do not hardcode selectors, URLs, or credentials
- Use environment variables for configuration
- Follow the Page Object Model pattern
- Save all evidence in the correct directory

## MCP Prompt Compliance

This project follows the Playwright MCP prompt for step-by-step scenario execution, modular code, and autonomous package management.
