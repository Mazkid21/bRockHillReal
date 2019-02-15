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
var basaltProper = require('./routes/basalt-proper');
var brushCreek = require('./routes/brush-creek');
var carbondaleProper = require('./routes/carbondale-proper');
var centralCore = require('./routes/central-core');
var eastAspen = require('./routes/east-aspen');
var elJebel = require('./routes/el-jebel');
var mclainFlats = require('./routes/mclain-flats');
var oldSnowmass = require('./routes/old-snowmass');
var redMtn = require('./routes/red-mtn');
var snowmassVillage = require('./routes/snowmass-village');
var westAspen = require('./routes/west-aspen');
var westEnd = require('./routes/west-end');
var woodyCreek = require('./routes/woody-creek');
var smuggler = require('./routes/smuggler');
var rentOrBuy = require('./routes/rentOrBuy');
var homeRoute = require('./routes/index');
var listingRoute = require('./routes/listing');
var adminSignUpRoute = require('./routes/adminSignup');
var userSignUpRoute = require('./routes/userSignUp');
var logOutRoute = require('./routes/logout');
var userLoginRoute = require('./routes/userLogin');
var adminLoginRoute = require('./routes/adminLogin');
var searchRoute = require('./routes/search');
var rentalRoute = require('./routes/rental');
var rentalSearchRoute = require('./routes/rentalSearch');
var mongoRenatlSingle = require('./routes/mongoRentalSingle');
var videosRoute = require('./routes/videos');
var admin = require('./routes/admin');
var vidAdmin = require('./routes/adminVid');
var marketMap = require('./routes/marketMap');
var bio = require('./routes/bio');
var users = require('./routes/users');
var app = express();


//passport
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
mongoose.connect('mongodb://localhost/bRockHillLive');
app.use(session({
  secret: "Rusty is the best and cutest dog in the world",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    secret: "Rusty is the best and cutest dog in the world",
    maxAge: 3600000 //1 hour
  }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passportAdmin')(passport);

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

require('./config/passportAdmin')(passport);

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//express use routes
app.use('/', homeRoute);
app.use('/listing', listingRoute);
app.use('/admin-signup', adminSignUpRoute);
app.use('/user-signup', userSignUpRoute);
app.use('/user-login', userLoginRoute);
app.use('/admin-login', adminLoginRoute);
app.use('/logout', logOutRoute);
app.use('/search', searchRoute);
app.use('/rentals', rentalRoute);
app.use('/rentals-search', rentalSearchRoute);
app.use('/custom', mongoRenatlSingle);
app.use('/videos', videosRoute);
app.use('/admin', admin);
app.use('/admin-video', vidAdmin);
app.use('/market-map', marketMap);
app.use('/bio', bio);
app.use('/users', users);
app.use('/first-step', rentOrBuy);
app.use('/smuggler', smuggler);
app.use('/woody-creek', woodyCreek);
app.use('/west-end', westEnd);
app.use('/west-aspen', westAspen);
app.use('/snowmass-village', snowmassVillage);
app.use('/red-mtn', redMtn);
app.use('/old-snowmass', oldSnowmass);
app.use('/mclain-flats', mclainFlats);
app.use('/el-jebel', elJebel);
app.use('/east-aspen', eastAspen);
app.use('/central-core', centralCore);
app.use('/carbondale-proper', carbondaleProper);
app.use('/brush-creek', brushCreek);
app.use('/basalt-proper', basaltProper);




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