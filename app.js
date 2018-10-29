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
var mongo = require('mongodb');
var assert = require('assert');


//Routes....dont forget to add to app.use() below
var homeRoute = require('./routes/index');
var listingRoute = require('./routes/listing');
var signUpRoute = require('./routes/signup');
var logOutRoute = require('./routes/logout');
var loginRoute = require('./routes/login');
var searchRoute = require('./routes/search');
var rentalRoute = require('./routes/rental');
var rentalSearchRoute = require('./routes/rentalSearch');
var mongoRenatlSingle = require('./routes/mongoRentalSingle');
var videosRoute = require('./routes/videos');
var admin = require('./routes/admin');
var app = express();


//passport
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
mongoose.connect('mongodb://localhost/bRockHillLive');
app.use(session({
  secret: 'YOU ARE AN ADMIN'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});



// view engine setup
//EXPRESS (app) START TEMPLTING ENGINE (handlebars)
app.engine(
  '.hbs',
  exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
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
app.use('/signup', signUpRoute);
app.use('/login', loginRoute);
app.use('/logout', logOutRoute);
app.use('/search', searchRoute);
app.use('/rentals', rentalRoute);
app.use('/rentals-search', rentalSearchRoute);
app.use('/custom', mongoRenatlSingle);
app.use('/videos', videosRoute);
app.use('/admin', admin);


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