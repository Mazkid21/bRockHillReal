var express = require('express');
var MongoClient = require('mongodb').MongoClient;


var url = "mongodb://localhost/bRockHillLive";


var router = express.Router();



router.get('/', (req, res, next) => {
    var resultsArray = [];
    MongoClient.connect(url, (err, db) => {
        var cursor = db.collection('test');
        cursor.find({}).toArray((err, results) => {
            res.render('rentals', {
                items: results
            });
        });
    });
});




module.exports = router;