"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = require("./loaders/app");
const dbconnect_1 = require("./loaders/dbconnect");
const config_1 = require("./config/config");
const app = new app_1.App();
const serverHandler = () => {
    console.log("서버 가동 ON PORT: ", config_1.config.SERVER_PORT);
};
console.log(config_1.config.SERVER_PORT);
http_1.default.createServer(app.getApp()).listen(config_1.config.SERVER_PORT, async () => {
    await dbconnect_1.connection.connect();
    serverHandler();
});
//# sourceMappingURL=server.js.map