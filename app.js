const dotenv = require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var request = require('request');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require("passport");
var flash = require('connect-flash', 'req-flash');


//Routes....dont forget to add to app.use() below
var homeRoute = require('./routes/index');
var listingRoute = require('./routes/listing');
var signUpRoute = require('./routes/signup');
var loginRoute = require('./routes/login');

var app = express();

mongoose.connect('mongodb://localhost/bRockHillTestApp', {
  useNewUrlParser: true
});

// view engine setup
//EXPRESS (app) START TEMPLTING ENGINE (handlebars)
app.engine(
  '.hbs',
  exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
  })
);
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//express use routes
app.use('/', homeRoute);
app.use('/listing', listingRoute);
app.use('/listing/search/refinded', listingRoute);
app.use('/signup', signUpRoute);
app.use('/login', loginRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;