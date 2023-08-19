import { Router } from "express";
import { USER_CREAT } from "../controller/userfunction.js";
import {upload} from "../middleware/multer.js"
import validatemiddleware from "../middleware/validatemiddleware.js";
import { schema } from "../validate/validate.js";



const router = Router();


router.post("/user", upload.single("avatarka"), validatemiddleware(schema), USER_CREAT)



export default router;