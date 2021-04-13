module.exports = {
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["<rootDir>/.storybook/", "<rootDir>/node_modules/"],
  setupFiles: ["jest-prop-type-error"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "\\.svg$": "./fileTransformer.js"
  },
  moduleNameMapper: {
    ".+\\.(css|sass|scss|png|jpg)$": "identity-obj-proxy",
    "^icons/(.*)$": "<rootDir>/public/assets/svg/$1"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transformIgnorePatterns: ["/node_modules/"],
  verbose: true,
  globals: {
    abp: false
  }
};
