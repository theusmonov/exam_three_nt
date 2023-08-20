import { Connection, Message, User } from "../model/index.js";



export const MESSAGE_CREATE = async (req, res) => {
    try {
        const {user_id, message, group_id} = req.body

        const checkUser = await Connection.findOne({
            where: {
                user_id,
                group_id
            }
        })
        if (!checkUser) {
            return res.send({
                status: 404,
                message: "Bu user ro'yxatdan o'tmagan"
            })
        }
        const mess = await Message.create({
            message,
            group_id,
            user_id
        })
        return res.send(mess)
    } catch (err) {
        console.log(err.message);
    }
}