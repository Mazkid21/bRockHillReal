var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('listingRendered');
})

router.post('/', function (req, res) {
    response = {
        minPrice: req.body.minPrice,
        maxPrice: req.body.maxPrice,
        numBed: req.body.numBed,
        numBath: req.body.numBath
    };

    var minPriceURLstring = 'and ListPrice ge ' + response.minPrice;
    ///IF STATMENT HERE THAT CHECKS IF THE RESPONSE DATA IS THERE
    console.log(minPriceURLstring);
    console.log(response.minPrice + ": this is the min price that the api call is getting as a header");
    var options = {
        method: 'GET',
        url: 'https://sparkapi.com/Reso/OData/Property',
        qs: {
            '$filter': 'MlsStatus eq \'Active\' and ListPrice le ' + response.maxPrice + 'and ListPrice ge ' + response.minPrice + 'and BedroomsTotal ge ' + response.numBed + 'and BathroomsTotalInteger ge ' + response.numBath + 'and Zoning eq \'Residential\'',
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
        res.render('listingRendered', {
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