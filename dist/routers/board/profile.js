"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_1 = require("../../services/board/test");
const router = express_1.Router();
router.post("/", test_1.test);
exports.default = router;
//# sourceMappingURL=profile.js.map