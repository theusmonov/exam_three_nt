import { Router } from "express";
import { USER_CREAT } from "../controller/userfunction.js";

const router = Router();

router.get("/", USER_CREAT)


export default router;