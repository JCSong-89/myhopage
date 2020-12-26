"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_entity_1 = require("../../../entity/board.entity");
const catetory_entity_1 = require("../../../entity/catetory.entity");
const dbconnect_1 = require("../../../loaders/dbconnect");
exports.default = async (req, res) => {
    const { categoryId, title, content } = req.body;
    const categoryManager = dbconnect_1.connection.getRepository(catetory_entity_1.Category);
    const boardManager = dbconnect_1.connection.getRepository(board_entity_1.Board);
    if (!categoryId || !title || !content) {
        throw res.status(400).json({ message: "필요 정보가 없습니다." });
    }
    const category = await categoryManager.findOne({ id: categoryId });
    if (category === undefined) {
        throw res
            .status(404)
            .json({ message: "해당 카테고리 ID와 일치되는 것을 찾지 못했습니다." });
    }
    const board = boardManager.create({
        title,
        content,
        category,
    });
    await boardManager.save(board);
    return res.status(201).json({ message: "저장이 완료되었습니다." });
};
//# sourceMappingURL=saveSkillLog.service.js.map