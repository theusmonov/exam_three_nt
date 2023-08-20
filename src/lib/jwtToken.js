import jwt from "jsonwebtoken";

export const jwtSign = {
    sign: (payload) => {
        return jwt.sign(payload, process.env.SECRET_KEY)
    }
}


export const jwtVerify = {
    verify: (token) => {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            return decoded;
        } catch (error) {
            throw new Error("Tokenni tekshirish amalga oshmadi");
        }
    }
}


