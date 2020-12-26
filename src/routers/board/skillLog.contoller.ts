import { Router } from "express";
import saveSkillLog from "../../services/board/skillLog/saveSkillLog.service";
const router = Router();

router.post("/", saveSkillLog);
/*
router.get("/", getAllSkillLog);
router.get("/:id", getSkillLog);
router.get("/getegory/:categoryId", getCtegoryBlogLog);
router.put("/:id", updateSkillLog);
router.delete("/:id", deleteSkillLog);
router.delete("/:ids", deleteSelectBlogLog);
*/
export default router;
