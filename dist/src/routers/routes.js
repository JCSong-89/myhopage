"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const blogLog_contoller_1 = __importDefault(require("./board/blogLog.contoller"));
const comment_contoller_1 = __importDefault(require("./comment/comment.contoller"));
const project_contoller_1 = __importDefault(require("./board/project.contoller"));
const skillLog_contoller_1 = __importDefault(require("./board/skillLog.contoller"));
const emailSend_contoller_1 = __importDefault(require("./emailSend.contoller"));
class Routers {
    constructor(App) {
        App.use(body_parser_1.default.json());
        App.use("/blog-logs", blogLog_contoller_1.default);
        App.use("/projects", project_contoller_1.default);
        App.use("/skillLog", skillLog_contoller_1.default);
        App.use("/comments", comment_contoller_1.default);
        App.use("/sendEmail", emailSend_contoller_1.default);
    }
}
exports.Routers = Routers;
//# sourceMappingURL=routes.js.map