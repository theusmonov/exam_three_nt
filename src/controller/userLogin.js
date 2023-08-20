import { jwtSign } from "../lib/jwtToken.js";
import { User } from "../model/user.model.js";


export const USER_LOGIN = async (req, res) => {
    try {
        const {username, password} = req.body
        const token = jwtSign.sign(password)
        const data = await User.findAll({
           where: {
            username: username,
            password: password
           }
        })
        if(!data || data.length === 0){
           return res.status(404).send({
            message: "User registratsiyadan o'tmagan :("
           })
        }else{
           return res.send({
            status: 200,
            message: "Telegramga xo'sh kelibsiz :)",
            token
           })
        }
    } catch (err) {
        console.log(err.message);
    }
}