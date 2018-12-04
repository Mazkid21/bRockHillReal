var express = require('express');
var request = require('request');
var passport = require("passport");
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var url = "mongodb://localhost/bRockHillLive";


var router = express.Router();


router.post('/insert', (req, res, next) => {

    var id = req.body.id;
    console.log(id);
    var userInfo = {
        title: req.body.title,
        description: req.body.description,
        authors: req.body.authors,

        smallThumbnail: req.body.smallThumbnail
    };




    MongoClient.connect(url, (err, db) => {

        db.collection('users').findOneAndUpdate({
            "_id": objectId(id)
        }, {
            $set: {
                userInfo: userInfo
            }
        }, {
            upsert: true
        }, (err, result) => {
            console.log(JSON.stringify(userInfo) + ': item updated');
            db.close();
        });
    });
    res.redirect('/users');


});

router.post('/update', (req, res, next) => {



    if (req.body.title) title = req.body.title;
    if (req.body.authors) authors = req.body.authors;
    if (req.body.description) description = req.body.description;
    if (req.body.smallThumbnail) smallThumbnail = req.body.smallThumbnail;


    var id = req.body.id;
    console.log(id);
    MongoClient.connect(url, (err, db) => {

        db.collection('rentals').update({
            "_id": objectId(id)
        }, {
            $set: title,
            description,
            authors,
            smallThumbnail
        }, (err, result) => {

            db.close();
        });
    });
    res.redirect('/users');

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
    res.redirect('/users');
});

// router.post('/insert-videos', (req, res, next) => {

//     var video = {
//         title: req.body.title,
//         description: req.body.description,
//         imgURL: req.body.imgURL,
//         videoURL: req.body.videoURL,

//     };

//     MongoClient.connect(url, (err, db) => {

//         db.collection('video').insertOne(video, (err, result) => {
//             console.log(video + ': item inserted');
//             db.close();
//         });
//     });
//     res.redirect('/admin');


// });
router.get('/:id', (req, res) => {

    var id = req.session.passport.user.userId;
    console.log(objectId(id) + "this is th idd");
    if (req.isAuthenticated()) {

        var resultsArray = [];
        MongoClient.connect(url, (err, db) => {
            var cursor = db.collection('users');
            cursor.find({
                "_id": objectId(id)
            }).toArray((err, results) => {
                console.log(results);
                res.render('userSingle', {
                    items: results,
                    id: id
                });

            });
        });

    } else {
        res.redirect('/user-login');

    }


});


router.get('/', (req, res, next) => {

    if (req.isAuthenticated()) {
        if (req.session.passport.user.userGroup === 'user') {
            //route for admin
            var resultsArray = [];
            var id = req.session.passport.user.userId;

            MongoClient.connect(url, (err, db) => {
                var cursor = db.collection('users');
                cursor.find({
                    "_id": objectId(id)
                }).toArray((err, results) => {
                    console.log(JSON.stringify(results) + "pooop");
                    res.render('user', {
                        items: results,
                        id: id
                    });
                });
            });
        } else {
            //rote for non-admin
            res.redirect('/user-login');
        }
    } else {
        res.redirect('/user-login');
    }

});






module.exports = router;