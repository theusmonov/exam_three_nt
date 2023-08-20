import jwt from "jsonwebtoken";
let key = process.env.SECRET_KEY
export function check_token(req,res,next) {
    let {token} = req.headers
    if (token) {
        jwt.verify(token, key, (err, user) => {
            if (err) {
                return res.status(403).json({message:"please register  or sign"});
            }
            req.user = user;
            return next();
            })
    }
    else{
        return res.status(403).json({message:"please register or sign "})
    }

}