import bcrypt from "bcrypt";

export const hashPassword = {
    hash: (passwd) => {
        const salt = 10;
        return bcrypt.hashSync(passwd, salt)
    },
    compare: (passwd, hash) => {
        return bcrypt.compareSync(passwd, hash)
    }
}