import { Router } from "express";
import { USER_CREAT } from "../controller/userfunction.js";
import { upload } from "../middleware/multer.js";

const router = Router();

router.post("/user", upload.single("avatarka") , USER_CREAT)


export default router;