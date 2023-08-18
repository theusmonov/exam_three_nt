import { User } from "../models/user.model.js";

export const USER_CREAT = async (req, res) => {
    try {
        const { avatarka, username, first_name, second_name, description } = req.body;
        const data = await User.create({
            avatarka,
            username,
            first_name,
            second_name,
            description
        });
        return res.send(data)
    } catch (err) {
        console.error("Boshqaruvdagi xatolik:", err);
        res.status(500).send("Server Xatosi");
    }
}