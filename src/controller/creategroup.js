import { Connection, Message } from "../model/index.js";
import { Group } from "../model/index.js";
import { User } from "../model/index.js";


export const CREATE_GROUP = async (req, res) => {
    try {
        const {filename} = req.file
        const { username, avatarka, group_name, group_link } = req.body
        
        if(!Object.keys(req.body).length){
            return res.send({
                status: 400,
                message: "Bad Request!"
            })
        }

        const checkUser = await User.findOne({
            where: {
                username
            }
        })
        if (!checkUser) {
            return res.send({
                status: 404,
                message: "Bu user ro'yxatdan o'tmagan"
            })
        }

        const data = await Group.create({
            avatarka: `group_photo${filename}`,
            group_name,
            group_link

        })

        await Connection.create({
            user_id: checkUser.toJSON().id,
            group_id: data.id,
        })

        return res.send({
            data,
            status: 201,
            message: "Group yaratildi"
        })

    } catch (err) {
        console.log(err.message);
    }
}



export const Group_GET = async (req, res) => {
    try {
        const data =  await Group.findAll({
             include: [User, Message]
        })
        return res.send({
            data
        })
    } catch (err) {
        console.log(err.message);
    }
}

export const USER_GROUP_CREATE = async (req, res) => {
    try {
        const {user_id, group_id} = req.body
        const data = await Connection.create({
                user_id,
                group_id
        })
        return res.send({
            data
        })
    } catch (err) {
        console.log(err.message);
    }
}