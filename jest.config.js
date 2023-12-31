// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["./setupTests"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "@/components/(.*)": "<rootDir>/src/components/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
