"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const saveSkillLog_service_1 = __importDefault(require("../../services/board/skillLog/saveSkillLog.service"));
const router = express_1.Router();
router.post("/", saveSkillLog_service_1.default);
exports.default = router;
//# sourceMappingURL=skillLog.contoller.js.map