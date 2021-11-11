var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Tattoo = require("./models/tattoo");
async function recreateDB(){
	await Tattoo.deleteMany();

	let instance1 = new Tattoo({tatNum:1, tatLocation:"arm", tatColor:"red"});
	let instance2 = new Tattoo({tatNum:2, tatLocation:"leg", tatColor:"blue"});
	let instance3 = new Tattoo({tatNum:3, tatLocation:"forehead", tatColor:"neon pink"});

	instance1.save( function(err,doc) { 
		if(err) return console.error(err);
		console.log("First object saved")
	});
	instance2.save( function(err,doc) {
		if(err) return console.error(err);
		console.log("Second object saved")
	});
	instance3.save( function(err,doc) {
		if(err) return console.error(err);
		console.log("Third object saved")
	});
}
let reseed = true;
if(reseed) {recreateDB();}

const connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var tattooRouter = require('./routes/tattoo');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/tattoo', tattooRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
