var express = require('express');
var request = require('request');
var router = express.Router();



router.get('/:id', (req, res) => {
    console.log("HIIII");
    console.log('Request Id:', req.params.id);

    // API HEAD INFO WITH KEY AND SUCH

    var ListingKey = req.params.id;

    console.log("hiiii from server");
    var options = {
        method: 'GET',
        url: 'https://sparkapi.com/Reso/OData/Property',
        qs: {
            '$filter': `ListingKey eq \'${ListingKey}\'`
        },
        headers: {
            'x-sparkapi-user-agent': 'BrittanieRockhill',
            accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    console.log(JSON.stringify(options));
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var resultsArray = [];
        body = JSON.parse(body);

        // logic used to compare search results with the input from user
        if (!body.value) {
            results = false;
            res.render('listingRendered', {
                error: "no listings found"
            });

        } else {
            console.log(JSON.stringify(body.value) + " this is the body ");
            res.render('listingSingle', {
                property: body
            });


        }
    });
});

//Onload API CALL
function requestsss(options, callback) {

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var resultsArray = [];
        body = JSON.parse(body);

        // logic used to compare search results with the input from user
        if (!body.value) {
            results = false;
            callback(results);
        } else {
            propertyData = body.value;


        };
        // pass back the results to client side
        callback(propertyData);
    });
};

module.exports = router;