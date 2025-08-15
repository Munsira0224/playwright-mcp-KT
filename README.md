# Playwright-KT-2

## 🎯 Project Overview

This project demonstrates end-to-end testing using Playwright, combining automated test generation with manual testing workflows. It follows best practices for modular, maintainable test automation while supporting manual test execution and evidence collection.

## 📋 Features

- Automated test generation using Page Object Model
- Manual test case execution with evidence collection
- Environment variable management
- Modular and maintainable code structure
- Screenshot capture and organization
- Detailed test reporting

## 📁 Project Structure

```
playwright-mcp-KT/
├── src/
│   ├── pages/        # Page Object Models
│   ├── fixtures/     # Playwright fixtures
│   └── utils/        # Utilities and env loader
├── tests/           # Test files
├── manual_test_cases/# Manual test scenarios
├── test-results-evidences/
│   └── TC_[ID]/     # Evidence for each test case
├── reports/         # Test summary reports
├── env/            # Environment configuration
└── prompts/        # MCP and manual testing prompts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- npm/yarn
- VS Code with Playwright extension

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Munsira0224/playwright-mcp-KT.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment:
   - Set your base URL and other variables in `env/.env`
   - Update variables as needed

## 🧪 Test Execution

### Automated Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/search-blue-top.spec.ts
```

### Manual Testing Workflow

1. Execute test cases one by one:

   - Follow steps in `manual_test_cases.txt`
   - Use Playwright MCP tools for browser interaction
   - Verify expected results

2. Evidence Collection:

   - Add red border around tested areas
   - Take screenshots
   - Save evidence in `test-results-evidences/TC_[ID]/`

3. Reporting:
   - Create detailed summary in `reports/test_summery`
   - Include UI/UX improvement suggestions

## 💡 Best Practices

### Automated Testing

- Use Page Object Model pattern
- Import via page fixtures
- Use path aliases for imports
- Follow TypeScript best practices
- Avoid hardcoding values

### Manual Testing

- Execute tests step-by-step
- Focus on accessibility and UX
- Capture clear evidence
- Document issues thoroughly
- Suggest improvements

## 📘 Documentation

- `playwright_mcp_prompt.md`: Automated test generation guidelines
- `manual-testing-prompt.txt`: Manual testing workflow
- `manual_test_cases.txt`: Test scenarios

## 🛠️ Configuration

- `tsconfig.json`: TypeScript and path aliases
- `playwright.config.ts`: Playwright settings
- `env/.env`: Environment variables

## 📝 Reports

Test summaries and evidence are stored in:

- `test-results-evidences/`: Screenshots and test evidence
- `reports/test_summery`: Detailed test reports
