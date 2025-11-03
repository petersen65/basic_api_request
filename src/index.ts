console.log("Hello from TypeScript!");

async function main() {
  console.log("Node.js version:", process.version);
  console.log("Current directory:", process.cwd());
}

main().catch(console.error);