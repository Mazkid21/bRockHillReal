var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', (req, res) => {
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
  onLoadrequests(options, function (data) {
    console.log(data + " this is data from back end");
    var propertyData = data;
    res.render('listing', {
      property: data
    });
    // res.send({
    //   property: data
    // });
  });

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