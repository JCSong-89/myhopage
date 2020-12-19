import { App } from "src/loaders/app";
import { Express } from "express";
import adaad from "./board/profile";
import bodyParser from "body-parser";

export class Routers {
  constructor(App: Express) {
    App.use(bodyParser.json());
    App.use("/", adaad);
  }
}
