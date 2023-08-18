import { User } from "../models/user.model.js";

export const USER_CREAT = (req, res) => {
    try {
        const data = User.create({

        })
        return res.send(data)
    } catch (err) {
        console.log(err.message);
    }
}