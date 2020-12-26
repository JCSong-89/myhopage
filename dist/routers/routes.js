"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const blogLog_1 = __importDefault(require("./board/blogLog"));
const comment_1 = __importDefault(require("./comment/comment"));
const project_1 = __importDefault(require("./board/project"));
const profile_1 = __importDefault(require("./board/profile"));
const skillLog_1 = __importDefault(require("./board/skillLog"));
const emailSend_1 = __importDefault(require("./emailSend"));
class Routers {
    constructor(App) {
        App.use(body_parser_1.default.json());
        App.use("/profile", profile_1.default);
        App.use("/blog-logs", blogLog_1.default);
        App.use("/projects", project_1.default);
        App.use("/skillLog", skillLog_1.default);
        App.use("/comments", comment_1.default);
        App.use("/sendEmail", emailSend_1.default);
    }
}
exports.Routers = Routers;
//# sourceMappingURL=routes.js.map