import { jwtSign } from "../lib/auth.jwt.js";
import { User } from "../models/user.model.js";

export const USER_CREAT = async (req, res) => {
    try {
        const { filename } = req.file
        const { username, first_name, second_name, description } = req.body;

        let checkUser = await User.findAll({
            where: {
                username: req.body.username
            }
        });
        if (checkUser.length > 0) {
            return res.send({
                status: 500,
                message: "Bu username allaqachon band qilingan"
            })
        } else {
            const token = jwtSign.sign({username})
            const data = await User.create({
                avatarka: `user_photo_${filename}`,
                username,
                first_name,
                second_name,
                description,
            });
            return res.status(201).send({
                data,
                status: 201,
                message: "Username telegramda yaratildi",
                token,
            });
            
        }
    } catch (err) {
        console.error("Boshqaruvdagi xatolik:", err);
        res.status(500).send("Server Xatosi");
    }
}