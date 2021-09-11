import { Router } from "express";

const router = Router();

router.post("/", saveBlogLog);
router.get("/", getAllBlogLog);
router.get("/:id", getBlogLog);
router.put("/:id", putBlogLog);
router.delete("/:id", deleteBlogLog);
router.delete("/:ids", deleteSelectBlogLog);

export default router;