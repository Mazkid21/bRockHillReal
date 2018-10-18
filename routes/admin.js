var express = require('express');
var request = require('request');
var passport = require("passport");
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var url = "mongodb://localhost/bRockHillLive";


var router = express.Router();


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
        photoURL2: req.body.photoURL2,
        photoURL3: req.body.photoURL3,
        photoURL4: req.body.photoURL4,
        photoURL5: req.body.photoURL5,
        photoURL6: req.body.photoURL6,
        photoURL7: req.body.photoURL7,
        photoURL8: req.body.photoURL8,
        photoURL9: req.body.photoURL9,
        photoURL10: req.body.photoURL10,
        photoURL11: req.body.photoURL11,
        photoURL12: req.body.photoURL12,
        photoURL13: req.body.photoURL13,
        photoURL14: req.body.photoURL14,
        photoURL15: req.body.photoURL15,
        photoURL16: req.body.photoURL16,
        photoURL17: req.body.photoURL17,
        photoURL18: req.body.photoURL18,
        photoURL19: req.body.photoURL19,
        photoURL20: req.body.photoURL20,
        photoURL21: req.body.photoURL21,
        photoURL22: req.body.photoURL22,
        photoURL23: req.body.photoURL23,
        photoURL24: req.body.photoURL24,
        photoURL25: req.body.photoURL25,
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
        photoURL1: req.body.photoURL1,
        photoURL2: req.body.photoURL2,
        photoURL3: req.body.photoURL3,
        photoURL4: req.body.photoURL4,
        photoURL5: req.body.photoURL5,
        photoURL6: req.body.photoURL6,
        photoURL7: req.body.photoURL7,
        photoURL8: req.body.photoURL8,
        photoURL9: req.body.photoURL9,
        photoURL10: req.body.photoURL10,
        photoURL11: req.body.photoURL11,
        photoURL12: req.body.photoURL12,
        photoURL13: req.body.photoURL13,
        photoURL14: req.body.photoURL14,
        photoURL15: req.body.photoURL15,
        photoURL16: req.body.photoURL16,
        photoURL17: req.body.photoURL17,
        photoURL18: req.body.photoURL18,
        photoURL19: req.body.photoURL19,
        photoURL20: req.body.photoURL20,
        photoURL21: req.body.photoURL21,
        photoURL22: req.body.photoURL22,
        photoURL23: req.body.photoURL23,
        photoURL24: req.body.photoURL24,
        photoURL25: req.body.photoURL25,
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






module.exports = router;