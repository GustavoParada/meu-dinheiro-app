const server = require('./config/server')
require('./config/dataBase')
require('./config/routes')(server)

console.log('server load:', server)