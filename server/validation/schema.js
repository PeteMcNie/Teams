const Joi = require('@hapi/joi')

const schema = Joi.object({
  names: Joi.array().items(
    Joi.string().alphanum().min(1).max(15).required()
  )
})

module.exports = schema
