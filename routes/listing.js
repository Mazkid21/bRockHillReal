var express = require('express');
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var request = require('request');
var url = "mongodb://localhost/bRockHillLive";

var router = express.Router();





router.post('/insert', (req, res, next) => {



  if (req.isAuthenticated()) {
    if (req.session.passport.user.userGroup === 'user') {
      //route for admin
      var id = req.user._id;
      console.log(id);
      var description = req.body.description;
      MongoClient.connect(url, (err, db) => {

        db.collection('users').findOneAndUpdate({
          "_id": id
        }, {
          $push: {
            userInfo: {
              "description": description

            } //inserted data is the object to be inserted
          }
        }, {
          upsert: true
        }, (err, result) => {
          console.log(JSON.stringify(description) + ': item updated');
          db.close();
        });
      });
      res.redirect('/users');



    } else {
      //rote for non-admin
      res.redirect('/user-login');
    }
  } else {
    res.redirect('/user-login');
  }




});

router.get('/', (req, res) => {
  // API HEAD INFO WITH KEY AND SUCH
  var options = {
    method: 'GET',
    url: 'https://sparkapi.com/Reso/OData/Property',
    qs: {
      '$filter': 'City eq \'Aspen\' and MlsStatus eq \'Active\' and MLSAreaMinor eq \'b__30312d43656e7472616c20436f7265\'',
      '$expand': 'CustomFields,Media',
      '$orderby': 'ListPrice desc',
      '$count': 'true'
    },
    headers: {
      'Postman-Token': '409a18c6-11c4-47de-ae19-7f6c445c813d',
      'cache-control': 'no-cache',
      'X-SparkApi-User-Agent': 'BrittanieRockHill',
      Accept: 'application/json',
      Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
    }
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    var data = JSON.parse(body);
    console.log("helllllllo");
    res.render('listing', {
      property: data.value,
      currentUser: req.user
    });


  });

  // res.send({
  //   property: data
  // });

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
    //    callback(propertyData);
  });
};



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
      propertyStuff = body.value;

      // for (var i = 0; i < results.length; i++) {
      //   console.log(i + "this is the index nimbers ");
      //   resultsArray.push({
      //     directions: results
      //   });
      // };
    };
    // pass back the results to client side
    callback(propertyStuff);
  });
};
module.exports = router;