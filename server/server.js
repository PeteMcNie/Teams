const path = require('path')
const express = require('express')

const server = express()

const routes = require('./routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/home/v1', routes) // Server-side route (different from client side)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
