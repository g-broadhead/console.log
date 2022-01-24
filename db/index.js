module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/consoleLog_db')
