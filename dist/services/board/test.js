"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
async function test(req, res) {
    console.log(req.body);
    return res.status(200).send(req.body);
}
exports.test = test;
//# sourceMappingURL=test.js.map