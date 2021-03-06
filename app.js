const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

// import config file
const config = require('./config')

// import routes
const prescriptions = require('./routes/prescriptions')
const login = require('./routes/login')
const patient = require('./routes/patient')
const division = require('./routes/division')

const app = express()

// set up database
const mongoose = require('mongoose')

mongoose.connect(config.dbUrl)

mongoose.connection.on('connected', () => {  
	console.log(`Mongoose default connection is open to ${config.dbUrl}`);
})

mongoose.connection.on('error', (err) => {
	console.log(`Mongoose default connection has occured ${err} error.`)
})

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose default connection is disconnected')
})

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, './client')))

app.use(prescriptions)
app.use(login)
app.use(patient)
app.use(division)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	let err = new Error('Not Found')
	err.status = 404
	next(err)
})

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.send('error')
})

module.exports = app
