const ENTRY = "./src/main.ts";
const OUTPUT = "./dist/index.js";

import * as esbuild from "esbuild";

import { Logger, ILogObj } from "tslog";

const log: Logger<ILogObj> = new Logger();

log.info("Building with esbuild...");

log.debug(`${ENTRY} -> ${OUTPUT}`);
await esbuild
  .build({
    entryPoints: [ENTRY],
    bundle: true,
    minify: true,
    sourcemap: "inline",
    platform: "node",
    format: "cjs",
    packages: "bundle",
    outfile: OUTPUT,
    logLevel: "info",
    tsconfig: "./tsconfig.json",
    treeShaking: true,
  })
  .catch((err) => {
    log.fatal(err);
    process.exit(1);
  });

console.log();
log.debug(`${ENTRY} -> ${OUTPUT} ✔`);
log.info("Build complete!");
