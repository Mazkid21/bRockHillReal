var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', (req, res) => {
  // API HEAD INFO WITH KEY AND SUCH
  // console.log("hiiii from server");
  // var options = {
  //   method: 'GET',
  //   url: 'https://sparkapi.com/Reso/OData/Property',
  //   qs: {
  //     '$filter': 'City eq \'Aspen\' and MlsStatus eq \'Active\'',
  //     '$expand': 'CustomFields,Media',
  //     '$orderby': 'ListPrice desc',
  //     '$count': 'true'
  //   },
  //   headers: {
  //     'x-sparkapi-user-agent': 'BrittanieRockhill',
  //     accept: 'application/json',
  //     authorization: process.env.API_KEY
  //   }
  // };
  // onLoadrequests(options, function (data) {
  //   console.log(data + " this is data from back end");
  //   var propertyData = data;
  //   res.render('listing', {
  //     property: data
  //   });
  //   // res.send({
  //   //   property: data
  //   // });
  // });

  res.render('listing');

});

//Onload API CALL
function onLoadrequests(options, callback) {

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var resultsArray = [];
    body = JSON.parse(body);

    // logic used to compare search results with the input from user
    if (!body.value) {
      results = "No results found. Try again.";
      callback(results);
    } else {
      propertyData = body.value;

      // for (var i = 0; i < results.length; i++) {
      //   console.log(i + "this is the index nimbers ");
      //   resultsArray.push({
      //     directions: results
      //   });
      // };
    };
    // pass back the results to client side
    callback(propertyData);
  });
};

router.post('/search/refinded', function (req, res) {
  console.log('You sent the name "' + req.body.minPrice + '".' + req.body.maxPrice + '".' + req.body.numBed + '".' + req.body.numBath + '".');
  var minPrice = req.body.minPrice;
  var maxPrice = req.body.maxPrice;
  var numBed = req.body.numBed;
  var numBath = req.body.numBath;


  var options = {
    method: 'GET',
    url: 'https://sparkapi.com/Reso/OData/Property',
    qs: {
      '$filter': 'City eq \'Aspen\' and ListPrice ge \'' + minPrice + '\' and MlsStatus eq \'Active\'',
      '$expand': 'CustomFields,Media',
      '$orderby': 'ListPrice desc',
      '$count': 'true'
    },
    headers: {
      'x-sparkapi-user-agent': 'BrittanieRockhill',
      accept: 'application/json',
      authorization: process.env.API_KEY
    }
  };

  console.log(JSON.stringify(options) + "options for url string");
  requestsRefinded(options, function (data) {
    console.log(data + " this is data from back end");
    var propertyData = data;
    // res.render('listing', {
    //   property: data
    // });
    res.render('listingRendered', {
      property2: data
    });
  });
});

//refinde api call
function requestsRefinded(options, callback) {

  request(options, function (error, response, body) {
    console.log(JSON.stringify(options) + "this is the option from requestes()");
    console.log(body + ": this is the body");
    if (error) throw new Error(error);
    var resultsArray = [];
    body = JSON.parse(body);

    // logic used to compare search results with the input from user
    if (!body) {
      results = "No results found. Try again.";
      callback(results);
    } else {
      propertyData = body.value;

      // for (var i = 0; i < results.length; i++) {
      //   console.log(i + "this is the index nimbers ");
      //   resultsArray.push({
      //     directions: results
      //   });
      // };
    };
    // pass back the results to client side
    callback(propertyData);
  });
};

router.get('/search', (req, res) => {
  // API HEAD INFO WITH KEY AND SUCH
  console.log("hiiii from server");
  var options = {
    method: 'GET',
    url: 'https://sparkapi.com/Reso/OData/Property',
    qs: {
      '$filter': 'City eq \'Aspen\' and MlsStatus eq \'Active\'',
      '$expand': 'CustomFields,Media',
      '$orderby': 'ListPrice desc',
      '$count': 'true'
    },
    headers: {
      'x-sparkapi-user-agent': 'BrittanieRockhill',
      accept: 'application/json',
      authorization: process.env.API_KEY
    }
  };
  requests(options, function (data) {
    console.log(data + " this is data from back end");
    var propertyData = data;
    // res.render('listing', {
    //   property: data
    // });
    res.send({
      property: data
    });
  });

});


//ACTUALL API CALL
function requests(options, callback) {

  request(options, function (error, response, body) {
    console.log(JSON.stringify(options) + "this is the option from requestes()");
    if (error) throw new Error(error);
    var resultsArray = [];
    body = JSON.parse(body);

    // logic used to compare search results with the input from user
    if (!body.value) {
      results = "No results found. Try again.";
      callback(results);
    } else {
      propertyData = body.value;

      // for (var i = 0; i < results.length; i++) {
      //   console.log(i + "this is the index nimbers ");
      //   resultsArray.push({
      //     directions: results
      //   });
      // };
    };
    // pass back the results to client side
    callback(propertyData);
  });
};
module.exports = router;