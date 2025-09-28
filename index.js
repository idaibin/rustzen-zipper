#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");
const os = require("os");

let binaryName;
switch (os.platform()) {
  case "win32":
    binaryName = "windows-x86_64.exe";
    break;
  case "darwin":
    binaryName = "macos-x86_64";
    break;
  case "linux":
    binaryName = "linux-x86_64";
    break;
  default:
    console.error(`Unsupported platform: ${os.platform()}`);
    process.exit(1);
}

try {
  const binaryPath = path.resolve(__dirname, "bin", binaryName);
  execSync(binaryPath, { stdio: "inherit" });
} catch (err) {
  console.error("Failed to execute zipper binary:", err);
  process.exit(1);
}
