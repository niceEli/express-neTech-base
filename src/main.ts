// #region Imports

import app from "@utils/app";
import { Request, Response } from "express";
import log from "@utils/logger";
import env from "@utils/env";
import { ResponseObj } from "@utils/neTechUtils";
import { aboutRoute } from "@routes/about.route";
import express from "express";
import expressWinston from "express-winston";
import { createLogger, format, transports } from "winston";
const port = env.NETECH_PORT || 3000;

log.info(`Attempting To Start Microservice`);

// #endregion

// #region Router DEF

let router = express.Router();

// #endregion

// #region Routes

/// GET /
router.get("/", (req: Request, res: Response) => {
  const response: ResponseObj = new ResponseObj(
    "Hello From TypeScript with Express!",
  );
  res.status(200);
  res.send(response);
  res.end();
});

/// GET /about
router.get("/about", (req: Request, res: Response) => {
  let response: ResponseObj = aboutRoute();
  res.status(200);
  res.send(response);
  res.end();
});

// express-winston logger makes sense BEFORE the router
if (process.env.NODE_ENV !== "production") {
  app.use(
    expressWinston.logger({
      transports: [
        new transports.Console({
          format: format.combine(format.colorize(), format.simple()),
        }),
        new transports.File({ filename: "error.log", level: "error" }),
        new transports.File({ filename: "combined.log" }),
      ],
      meta: false,
      metaField: null,
      expressFormat: true,
      format: format.json(),
      colorize: true,
    }),
  );
}

/// ROUTES

app.use(router);

// #endregion

// #region Errors

/// 404 Error
app.use((req, res, next) => {
  const response: ResponseObj = new ResponseObj("Not Found!", 404);
  res.status(404);
  res.send(response);
});

/// Error Handling

app.use((err: any, req: any, res: any, next: any) => {
  const response: ResponseObj = new ResponseObj(err.message, err.stack);

  res.status(500);
  res.send(response);

  log.error(err);
});

if (process.env.NODE_ENV !== "production") {
  app.use(
    expressWinston.errorLogger({
      transports: [
        new transports.Console({
          format: format.combine(format.colorize(), format.simple()),
        }),
        new transports.File({ filename: "error.log", level: "error" }),
        new transports.File({ filename: "combined.log" }),
      ],
      format: format.json(),
    }),
  );
}

// #endregion

// #region Initializer

app.listen(port, () => {
  log.info(`Service is running at http://localhost:${port}`);
});

// #endregion
