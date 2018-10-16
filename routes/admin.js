var express = require('express');
var request = require('request');
var passport = require("passport");
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var url = "mongodb://localhost/bRockHillLive";


var router = express.Router();



router.get('/', (req, res, next) => {

    if (req.isAuthenticated()) {

        var resultsArray = [];
        MongoClient.connect(url, (err, db) => {
            var cursor = db.collection('test');
            cursor.find({}).toArray((err, results) => {
                res.render('rentals', {
                    items: results
                });
            });
        });

    } else {
        res.redirect('/login');

    }


});



router.post('/insert', (req, res, next) => {

    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };

    MongoClient.connect(url, (err, db) => {

        db.collection('test').insertOne(item, (err, result) => {
            console.log(item + ': item inserted');
            db.close();
        });
    });
    res.redirect('/rentals');


});

router.post('/update', (req, res, next) => {
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };
    var id = req.body.id;
    MongoClient.connect(url, (err, db) => {

        db.collection('test').updateOne({
            "_id": objectId(id)
        }, {
            $set: item
        }, (err, result) => {
            console.log(item + ': item updated');
            db.close();
        });
    });
    res.redirect('/rentals');

});

router.post('/delete', (req, res, next) => {
    var id = req.body.id;
    MongoClient.connect(url, (err, db) => {

        db.collection('test').deleteOne({
            "_id": objectId(id)
        }, (err, result) => {
            console.log(': item updated');
            db.close();
        });
    });
    res.redirect('/rentals');
});



module.exports = router;