// #region Imports

import app from "@utils/app";
import { Request, Response } from "express";
import log from "@utils/logger";
import env from "@utils/env";
import { ResponseObj } from "@utils/neTechUtils";
import { aboutRoute } from "@routes/about.route";
const port = env.NETECH_PORT || 3000;

log.info(`Attempting To Start Microservice`);

// #endregion

// #region Routes

/// GET /
app.get("/", (req: Request, res: Response) => {
  const response: ResponseObj = new ResponseObj(
    "Hello From TypeScript with Express!",
  );
  res.status(200);
  res.send(response);
  res.end();
  log.debug(`GET ${req.url} - SENT`, response, res.statusCode);
});

/// GET /about
app.get("/about", (req: Request, res: Response) => {
  let response: ResponseObj = aboutRoute();
  res.status(200);
  res.send(response);
  res.end();
  log.debug(`GET ${req.url} - SENT`, response, res.statusCode);
});

// #endregion

// #region Errors

/// 404 Error
app.use((req, res, next) => {
  const response: ResponseObj = new ResponseObj("Not Found!", 404);
  res.status(404);
  res.send(response);
  log.debug(`GET ${req.url} - SENT`, response, res.statusCode);
});

/// Error Handling

app.use((err: any, req: any, res: any, next: any) => {
  const response: ResponseObj = new ResponseObj(err.message, err.stack);

  res.status(500);
  res.send(response);

  log.error(`GET ${req.url} - ERRORED`, response, res.statusCode);
  log.fatal(err);
});

// #endregion

// #region Initializer

app.listen(port, () => {
  log.info(`Service is running at http://localhost:${port}`);
});

// #endregion
