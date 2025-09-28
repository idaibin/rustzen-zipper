#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");

try {
  const binaryPath = path.resolve(
    __dirname,
    "target",
    "release",
    "rustzen-zipper"
  );
  execSync(binaryPath, { stdio: "inherit" });
} catch (err) {
  console.error("Failed to execute zipper binary:", err);
  process.exit(1);
}
