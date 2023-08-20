import { ChanelConnect, Group} from "../model/index.js";
import { Chanel } from "../model/index.js";
import { User } from "../model/index.js";


export const CREATE_CHANEL = async (req, res) => {
    try {
        const {filename} = req.file
        const {username, avatarka, chanel_name, chanel_link } = req.body

        const checkUser = await User.findOne({
            where: {
                username: username
            }
        })
        if (!checkUser) {
            return res.send({
                status: 404,
                message: "Bu user ro'yxatdan o'tmagan"
            })
        }
        const data = await Chanel.create({
            avatarka: `chanel_photo${filename}`,
            chanel_name,
            chanel_link

        })
        await ChanelConnect.create({
            user_id: checkUser.toJSON().id,
            chanel_id: data.id,
        })

        return res.send({
            data,
            status: 201,
            message: "Chanel yaratildi"
        })
    } catch (err) {
        console.log(err.message);
    }
}


export const Chanel_GET = async (req, res) => {
    try {
        const data =  await Chanel.findAll({
             include: User
        })
        return res.send({
            data
        })
    } catch (err) {
        console.log(err.message);
    }
}
