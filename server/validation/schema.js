const Joi = require('@hapi/joi')

const schemas = {
  people: Joi.object().keys({
    name: Joi.string().required()
  })
}

module.exports = schemas
