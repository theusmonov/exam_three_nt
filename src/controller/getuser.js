import { User } from "../model/user.model.js";

export const USER_GET = async (req, res) => {
    try {
        const data = await User.findAll({})
        return res.send(data)
    } catch (error) {
        console.log(error.message);
    }
}