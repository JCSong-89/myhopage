import { Board } from "../../entity/board.entity";
import { getManager, getConnection } from "typeorm";
import { Request, Response } from "express";
import { Category } from "../../entity/catetory.entity";
import { connection } from "../../loaders/dbconnect";

export default async (req: Request, res: Response) => {
  const { categoryId, title, content } = req.body;

  const categoryManager = connection.getRepository(Category); // you can also get it via getConnection().manager
  const boardManager = connection.getRepository(Board); // you can also get it via getConnection().manager

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
