import http from "http";

import { App } from "./loaders/app";
import { connection } from "./loaders/dbconnect";
import { config } from "./config/config";

const app = new App();

const serverHandler = () => {
  console.log("서버 가동 ON PORT: ", config.SERVER_PORT);
};

console.log(config.SERVER_PORT);

http.createServer(app.getApp()).listen(config.SERVER_PORT, async () => {
  await connection.connect();
  serverHandler();
});
