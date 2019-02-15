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
            '$filter': 'MlsStatus eq \'Active\' and MLSAreaMinor eq \'b__30322d536e6f776d6173732056696c6c616765\'',
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


module.exports = router;