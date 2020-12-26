"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const blogLog_controller_1 = __importDefault(require("./board/blogLog.controller"));
const comment_controller_1 = __importDefault(require("./comment/comment.controller"));
const project_controller_1 = __importDefault(require("./board/project.controller"));
const skillLog_controller_1 = __importDefault(require("./board/skillLog.controller"));
const emailSend_controller_1 = __importDefault(require("./emailSend.controller"));
class Routers {
    constructor(App) {
        App.use(body_parser_1.default.json());
        App.use("/blog-logs", blogLog_controller_1.default);
        App.use("/projects", project_controller_1.default);
        App.use("/skillLog", skillLog_controller_1.default);
        App.use("/comments", comment_controller_1.default);
        App.use("/sendEmail", emailSend_controller_1.default);
    }
}
exports.Routers = Routers;
//# sourceMappingURL=routes.js.map