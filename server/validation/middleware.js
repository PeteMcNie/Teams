const middleware = (schema) => {
  // console.log('schema: ', schema)
  return (req, res, next) => {
    const { error } = schema.validate(req.body)
    const valid = error == null

    if (valid) {
      next()
    } else {
      // console.log(error.details[0].type)
      const { details } = error
      let message = details.map(i => i.message).join(',')

      if (error.details[0].type === 'array.includesRequiredUnknowns') {
        message = 'Names entered must have at least two characters.'
      } else if (error.details[0].type === 'string.max') {
        message = 'Names entered cannot be longer than 30 characters'
      } else if (error.details[0].type === 'string.pattern.base') {
        message = 'Names entered cannot contain numbers or special characters'
      } else {
        message = 'This error type has not been changed'
      }
      res.status(422).json({ error: message })
    }
  }
}

module.exports = middleware
