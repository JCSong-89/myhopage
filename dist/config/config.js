"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class ConfigServer {
    constructor() {
        this.TYPEORM_HOST = process.env.TYPEORM_HOST;
        this.TYPEORM_USERNAME = process.env.TYPEORM_USERNAME;
        this.TYPEORM_PASSWORD = process.env.TYPEORM_PASSWORD;
        this.TYPEORM_DATABASE = process.env.TYPEORM_DATABASE;
        this.SERVER_PORT = process.env.SERVER_PORT || 3000;
    }
}
exports.config = new ConfigServer();
//# sourceMappingURL=config.js.map