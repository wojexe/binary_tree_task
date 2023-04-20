import type { Config } from "jest";

export default {
  preset: "ts-jest",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: "node",
  testRegex: "./src/.*\\.(test|spec)?\\.(js|ts)$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.[jt]s$": "$1",
  },
  roots: ["<rootDir>/src"],
} satisfies Config;
