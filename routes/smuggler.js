var express = require('express');
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var request = require('request');
var url = "mongodb://localhost/bRockHillLive";

var router = express.Router();






router.get('/', (req, res) => {
    // API HEAD INFO WITH KEY AND SUCH
    var options = {
        method: 'GET',
        url: 'https://sparkapi.com/Reso/OData/Property',
        qs: {
            '$filter': 'MlsStatus eq \'Active\' and MLSAreaMinor eq \'b__30312d536d7567676c6572\'',
            '$expand': 'CustomFields,Media',
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
        console.log(data);
        res.render('smuggler', {
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