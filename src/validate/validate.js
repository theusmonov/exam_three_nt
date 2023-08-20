import Joi from "joi"


export const schema = Joi.object({
    username: Joi.string()
    .min(4)
    .max(70)
    .required()
    .messages({
        "string.min": "username elementlari 4 tadan kam",
        "string.max": "username elementlari 70 tadan ko'p",
        "any.required": "username talab qilinadi"
    }),
    first_name: Joi.string()
    .min(2)
    .max(50),

    second_name: Joi.string()
    .min(2)
    .max(50),

    description: Joi.string()
    .min(2)
    .max(50),

    password: Joi.string()
    .min(4)
    .max(4)
    .required()
    .messages({
        "string.min": "password elementlari 4 tadan kam",
        "string.max": "password elementlari 4 tadan ko'p",
        "any.required": "password talab qilinadi"
    })
})