# ddd-ts-template

[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description

ddd-ts-template is a TypeScript backend template project, providing a starting point for developing backend applications using Express.

## Installation

Make sure you have Node.js and npm installed on your system before proceeding.

1. Clone this repository or download the source code.

```bash
git clone https://github.com/Juudini/ddd-ts-template.git
cd ddd-ts-template
```

2. Install project dependencies.

```bash
pnpm install

```

# Usage

### Development

To run the application in development mode, use the following command:

```bash

npm run dev

```

This command will use ts-node-dev to automatically restart the application when changes are made to the source code.

### Production

To compile and run the application in a production environment, use the following command:

```bash

npm start

```

Este comando compila el código TypeScript y ejecuta la aplicación en Node.js.

### Testing

You can run tests using the following command:

```bash
npm test
```

### Linting and Code Formatting

To fix linting and code formatting issues, run:

```bash
npm run lint
```

## Dependencies

### Production Dependencies

-   **Express**: Web server framework for Node.js.
-   **@types/cors**: TypeScript types for Cors.
-   **@types/express**: TypeScript types for Express.
-   **@types/jest**: TypeScript types for Jest.
-   **@types/morgan**: TypeScript types for Morgan.
-   **@types/node**: TypeScript types for Node.js.
-   **@types/supertest**: TypeScript types for Supertest.
-   **env-var**: Environment variable parsing library.
-   **cors**: Middleware for enabling Cross-Origin Resource Sharing.
-   **express**: Web server framework for Node.js.
-   **morgan**: HTTP request logger middleware.
-   **winston**: Logging library.

### DevDependencies

-   **@commitlint/prompt-cli**: Commitlint CLI prompt.
-   **commitlint**: Lint commit messages.
-   **conventional-changelog-conventionalcommits**: Conventional commits for generating - changelogs.
-   **eslint**: JavaScript/TypeScript linting tool.
-   **eslint-config-prettier**: Prettier configuration for ESLint.
-   **eslint-plugin-jest**: ESLint plugin for Jest.
-   **eslint-plugin-prettier**: ESLint plugin for Prettier.
-   **eslint-plugin-unicorn**: ESLint plugin for Unicorn.
-   **husky**: Git hooks management.
-   **jest**: Testing framework.
-   **prettier**: Code formatting tool.
-   **rimraf**: Cross-platform directory removal.
-   **supertest**: HTTP assertion library.
-   **ts-jest**: TypeScript support for Jest.
-   **ts-node-dev**: Development tool for TypeScript with auto-reloading.
-   **typescript**: TypeScript language.
-   **unicorn**: Utility library.
