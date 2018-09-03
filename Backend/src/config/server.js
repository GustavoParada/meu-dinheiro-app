const port = 3003;
// import bodyParser from 'body-parser'
// import express from 'express'
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function () {
    console.log(`BACKEND funcionando na porta ${port}`)
})

module.exports = server