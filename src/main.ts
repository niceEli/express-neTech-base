import app from "@utils/app";
import { Request, Response } from "express";
import log from "@utils/logger";
import env from "@utils/env";
import { ResponseObj } from "@utils/neTechUtils";

const port = env.NETECH_PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  const response: ResponseObj = new ResponseObj(
    "Hello From TypeScript with Express!",
  );
  res.send(response);
  res.status(200);
  res.end();
  log.debug(`GET / - SENT`, response, res.statusCode);
});

app.listen(port, () => {
  log.info(`Server is running at http://localhost:${port}`);
});
