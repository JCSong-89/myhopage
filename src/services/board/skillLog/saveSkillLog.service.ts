import { Board } from "src/entity/board.entity";
import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Category } from "src/entity/catetory.entity";

export default async (req: Request, res: Response) => {
  const { categoryId, title, content } = req.body;

  if (!categoryId || !title || !content) {
    throw res.status(400).json({ message: "필요 정보가 없습니다." });
  }

  const category = await getRepository(Category).findOne({ id: categoryId });

  if (category === undefined) {
    throw res
      .status(404)
      .json({ message: "해당 카테고리 ID와 일치되는 것을 찾지 못했습니다." });
  }

  const board = getRepository(Board).create({
    title,
    content,
    category,
  });

  await getRepository(Board).save(board);

  return res.status(201).json({ message: "저장이 완료되었습니다." });
};
