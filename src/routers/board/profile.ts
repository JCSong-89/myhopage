import { Router } from "express";
import { test } from "../../services/board/test";

const router = Router();

router.post("/", test);

export default router;
