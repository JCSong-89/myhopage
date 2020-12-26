"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_entity_1 = require("src/entity/board.entity");
const typeorm_1 = require("typeorm");
const catetory_entity_1 = require("src/entity/catetory.entity");
exports.default = async (req, res) => {
    const { categoryId, title, content } = req.body;
    if (!categoryId || !title || !content) {
        throw res.status(400).json({ message: "필요 정보가 없습니다." });
    }
    const category = await typeorm_1.getRepository(catetory_entity_1.Category).findOne({ id: categoryId });
    if (category === undefined) {
        throw res
            .status(404)
            .json({ message: "해당 카테고리 ID와 일치되는 것을 찾지 못했습니다." });
    }
    const board = typeorm_1.getRepository(board_entity_1.Board).create({
        title,
        content,
        category,
    });
    await typeorm_1.getRepository(board_entity_1.Board).save(board);
    return res.status(201).json({ message: "저장이 완료되었습니다." });
};
//# sourceMappingURL=saveSkillLog.service.js.map