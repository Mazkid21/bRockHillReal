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
            var cursor = db.collection('rentals');
            cursor.find({}).toArray((err, results) => {
                res.render('admin', {
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
        description: req.body.description,
        numBeds: req.body.numBeds,
        numBaths: req.body.numBaths,
        squareFeet: req.body.squareFeet,
        acres: req.body.acres,
        listingFeatures: req.body.listingFeatures,
        nightRates: req.body.nightRates,
        monthlyRates: req.body.monthlyRates,
        photoURL1: req.body.photoURL1,
        customURL: req.body.customURL
    };

    MongoClient.connect(url, (err, db) => {

        db.collection('rentals').insertOne(item, (err, result) => {
            console.log(item + ': item inserted');
            db.close();
        });
    });
    res.redirect('/admin');


});

router.post('/update', (req, res, next) => {
    var item = {
        title: req.body.title,
        description: req.body.description,
        numBeds: req.body.numBeds,
        numBaths: req.body.numBaths,
        squareFeet: req.body.squareFeet,
        acres: req.body.acres,
        listingFeatures: req.body.listingFeatures,
        nightRates: req.body.nightRates,
        monthlyRates: req.body.monthlyRates,
        customURL: req.body.customURL
    };
    var id = req.body.id;
    MongoClient.connect(url, (err, db) => {

        db.collection('rentals').updateOne({
            "_id": objectId(id)
        }, {
            $set: item
        }, (err, result) => {
            console.log(item + ': item updated');
            db.close();
        });
    });
    res.redirect('/admin');

});

router.post('/delete', (req, res, next) => {
    var id = req.body.id;
    MongoClient.connect(url, (err, db) => {

        db.collection('rentals').deleteOne({
            "_id": objectId(id)
        }, (err, result) => {
            console.log(': item updated');
            db.close();
        });
    });
    res.redirect('/admin');
});



module.exports = router;