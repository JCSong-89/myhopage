"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const profile_1 = __importDefault(require("./board/profile"));
const body_parser_1 = __importDefault(require("body-parser"));
class Routers {
    constructor(App) {
        App.use(body_parser_1.default.json());
        App.use("/", profile_1.default);
    }
}
exports.Routers = Routers;
//# sourceMappingURL=routes.js.map