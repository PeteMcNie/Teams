const middleware = (schema) => {
   // console.log('schema: ', schema)
  return (req, res, next) => {
    const { error } = schema.validate(req.body)
    const valid = error == null

    if (valid) {
      // console.log('Valid')
      next()
    } else {
      const { details } = error
      const message = details.map(i => i.message).join(',')

      // console.log('Error', message)
      res.status(422).json({ error: message })
    }
  }
}

module.exports = middleware
