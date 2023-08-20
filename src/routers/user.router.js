import { Router } from "express";
import { USER_CREAT } from "../controller/userRegister.js";
import {upload} from "../middleware/multer.js"
import validatemiddleware from "../middleware/validatemiddleware.js";
import { schema } from "../validate/validate.js";
import { USER_LOGIN } from "../controller/userLogin.js";
import { CREATE_GROUP, Group_GET, USER_GROUP_CREATE } from "../controller/creategroup.js";
import { CREATE_CHANEL, Chanel_GET } from "../controller/createchanel.js";
import { MESSAGE_CREATE } from "../controller/messagefunc.js";
import { USER_GET } from "../controller/getuser.js";



const router = Router();


router.post("/register", upload.single("avatarka"), validatemiddleware(schema), USER_CREAT)
router.post("/userlogin", USER_LOGIN)
router.get("/getuser", USER_GET)
router.post("/creategroup",upload.single("imggroup"), CREATE_GROUP)
router.get("/getgroup", Group_GET)
router.post("/usercreate/group", USER_GROUP_CREATE)
router.post("/createchanel",upload.single("imgchanel"), CREATE_CHANEL)
router.get("/chanelgroup",  Chanel_GET)
router.post("/sendmessage", MESSAGE_CREATE)




export default router;