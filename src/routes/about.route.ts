import { ResponseObj, serverType } from "@/utils/neTechUtils";
import serverInfo from "@/utils/neServerInfo";

import os from "os";
import unixToNormalStamp from "@/utils/unixToNormalStamp";

export function aboutRoute(): ResponseObj {
  let info: any;

  info = { ...serverInfo };

  info.cwd = process.cwd();

  info.uptime = unixToNormalStamp(process.uptime());

  info.serverUptime = unixToNormalStamp(os.uptime());

  info.runtime = {
    execPath: process.execPath,
    version: process.version,
    platform: `${process.platform}-${os.version()}`,
    arch: process.arch,
    nodePID: process.pid,
    serverID: os.hostname(),
    serverUptimeUnix: os.uptime(),
    uptimeUnix: process.uptime(),
  };

  info.defaultServerReturnType = serverType;

  return new ResponseObj("About The tech.niceEli.microservice", info);
}
