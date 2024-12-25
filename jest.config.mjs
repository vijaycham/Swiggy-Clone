/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Add this line if not already present

  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },

  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|avif|svg|ico|mp4|mkv|mp3|wav|flac|aac)$":
      "jest-transform-stub",
  },
};

export default config;
