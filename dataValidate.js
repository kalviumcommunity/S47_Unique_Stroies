const Joi = require("joi")

const valideter = (payload) => {
    const schema  = Joi.object({
        tittle : Joi.string().required(),
        author : Joi.string().required(),
        PlaceOfOrigin: Joi.string().required()
    })
    return schema.validate(payload, {abortEarly: false})
}

module.exports = valideter