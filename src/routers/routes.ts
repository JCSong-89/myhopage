import bodyParser from "body-parser";
import { Express, Request } from "express";

import blogLog from "./board/blogLog.controller";
import comment from "./comment/comment.controller";
import project from "./board/project.controller";
import skillLog from "./board/skillLog.controller";
import sendEmail from "./emailSend.controller";

export class Routers {
  constructor(App: Express) {
    App.use(bodyParser.json());
    App.use(auth());
    App.use("/blog-logs", blogLog);
    App.use("/projects", project);
    App.use("/skillLog", skillLog);
    App.use("/comments", comment);
    App.use("/sendEmail", sendEmail);
  }
}
