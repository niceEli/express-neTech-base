const ENTRY = "./src/main.ts";
const OUTPUT = "./dist/index.js";

import * as esbuild from "esbuild";
import { Logger } from "tslog";

const log = new Logger();

log.info("Building with esbuild...");

log.debug(`${ENTRY} -> ${OUTPUT}`);
await esbuild.build({
  entryPoints: [ENTRY],
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: "node",
  packages: "bundle",
  outfile: OUTPUT,
  logLevel: "info",
});

log.info("Build complete!");
