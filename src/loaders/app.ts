import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import dontenv from "dotenv";

import { Routers } from "../routers/routes";

export class App {
  constructor(
    private readonly app = express(),
    private readonly router = new Routers(app)
  ) {
    this.setMiddleWare();
  }

  getApp() {
    return this.app;
  }

  setMiddleWare() {
    this.app.use(
      cors({
        origin: "*",
        credentials: false,
      })
    );
    return this.router;
  }
}
