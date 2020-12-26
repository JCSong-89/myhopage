import bodyParser from "body-parser";
import { Express } from "express";

import blogLog from "./board/blogLog.contoller";
import comment from "./comment/comment.contoller";
import project from "./board/project.contoller";
import skillLog from "./board/skillLog.contoller";
import sendEmail from "./emailSend.contoller";

export class Routers {
  constructor(App: Express) {
    App.use(bodyParser.json());
    App.use("/blog-logs", blogLog);
    App.use("/projects", project);
    App.use("/skillLog", skillLog);
    App.use("/comments", comment);
    App.use("/sendEmail", sendEmail);
  }
}
