const Joi = require('@hapi/joi')

const schema = Joi.object({
  names: Joi.array().items(
    Joi.string().pattern(new RegExp('^[a-zA-Z]{3,30}$')).min(1).max(15).required()
  )
})

module.exports = schema
