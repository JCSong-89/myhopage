"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("../routers/routes");
class App {
    constructor(app = express_1.default(), router = new routes_1.Routers(app)) {
        this.app = app;
        this.router = router;
        this.setMiddleWare();
    }
    getApp() {
        return this.app;
    }
    setMiddleWare() {
        this.app.use(cors_1.default({
            origin: "*",
            credentials: false,
        }));
        return this.router;
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map