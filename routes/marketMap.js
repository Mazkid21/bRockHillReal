var express = require('express');
var request = require('request');
var Content = require('../models/content');
var router = express.Router();


var smugglerData1;
var smugglerData2;
var smugglerData3;
var smugglerData4;
var smugglerData5;
var smugglerData6;

var centralCoreData1;
var centralCoreData2;
var centralCoreData3;
var centralCoreData4;
var centralCoreData5;
var centralCoreData6;

/* GET home page. */

router.get('/', function (req, res, next) {

    APICalls();


    res.render("marketMap", {
        smugglerData1: smugglerData1,
        smugglerData2: smugglerData2,
        smugglerData3: smugglerData3,
        smugglerData4: smugglerData4,
        smugglerData5: smugglerData5,
        smugglerData6: smugglerData6,
        centralCoreData1: centralCoreData1,
        centralCoreData2: centralCoreData2,
        centralCoreData3: centralCoreData3,
        centralCoreData4: centralCoreData4,
        centralCoreData5: centralCoreData5,
        centralCoreData6: centralCoreData6

    });

});

//ACTUALL API CALL
function APICalls(callback1, callback2, callback3, callback4, callback5) {

    var smugglerOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: 'Smuggler',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(smugglerOptions1, function (error, response, body1) {
        if (error) throw new Error(error);
        body1 = JSON.parse(body1);
        console.log("body1:" + body1.D.Results);
        smugglerData1 = body1.D.Results;

    });

    var smugglerOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: 'Smuggler',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(smugglerOptions2, function (error, response, body2) {
        if (error) throw new Error(error);
        body2 = JSON.parse(body2);
        console.log("body2:" + JSON.stringify(body2.D.Results));
        smugglerData2 = body2.D.Results;

    });

    var smugglerOptions3 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: 'Smuggler',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(smugglerOptions3, function (error, response, body3) {
        if (error) throw new Error(error);
        body3 = JSON.parse(body3);
        console.log("body3:" + JSON.stringify(body3.D.Results));
        smugglerData3 = body3.D.Results;

    });

    var smugglerOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: 'Smuggler',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(smugglerOptions4, function (error, response, body4) {
        if (error) throw new Error(error);
        body4 = JSON.parse(body4);
        console.log("body3:" + JSON.stringify(body4.D.Results));
        smugglerData4 = body4.D.Results;

    });

    var smugglerOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: 'Smuggler',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(smugglerOptions5, function (error, response, body5) {
        if (error) throw new Error(error);
        body5 = JSON.parse(body5);
        console.log("body5:" + JSON.stringify(body5.D.Results));
        smugglerData5 = body5.D.Results;

    });

    var smugglerOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: 'Smuggler',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(smugglerOptions6, function (error, response, body6) {
        if (error) throw new Error(error);
        body6 = JSON.parse(body6);
        console.log("body6:" + JSON.stringify(body6.D.Results));
        smugglerData6 = body6.D.Results;

    });

    var centralCoreOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Central Core',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(centralCoreOptions1, function (error, response, centralCorebody1) {
        if (error) throw new Error(error);
        centralCorebody1 = JSON.parse(centralCorebody1);
        console.log("body6:" + JSON.stringify(centralCorebody1.D.Results));
        centralCoreData1 = centralCorebody1.D.Results;

    });

    var centralCoreOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(centralCoreOptions2, function (error, response, centralCorebody2) {
        if (error) throw new Error(error);
        centralCorebody2 = JSON.parse(centralCorebody2);
        console.log("body2:" + JSON.stringify(centralCorebody2.D.Results));
        centralCoreData2 = centralCorebody2.D.Results;

    });

    var centralCoreOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Central Core',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(centralCoreOptions3, function (error, response, centralCorebody3) {
        if (error) throw new Error(error);
        centralCorebody3 = JSON.parse(centralCorebody3);
        console.log("body3:" + JSON.stringify(centralCorebody3.D.Results));
        centralCoreData3 = centralCorebody3.D.Results;

    });

    var centralCoreOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Central Core',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(centralCoreOptions4, function (error, response, centralCorebody4) {
        if (error) throw new Error(error);
        centralCorebody4 = JSON.parse(centralCorebody4);
        console.log("body4:" + JSON.stringify(centralCorebody4.D.Results));
        centralCoreData4 = centralCorebody4.D.Results;

    });

    var centralCoreOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Central Core',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(centralCoreOptions5, function (error, response, centralCorebody5) {
        if (error) throw new Error(error);
        centralCorebody5 = JSON.parse(centralCorebody5);
        console.log("body5:" + JSON.stringify(centralCorebody5.D.Results));
        centralCoreData5 = centralCorebody5.D.Results;

    });

    var centralCoreOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Central Core',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(centralCoreOptions6, function (error, response, centralCorebody6) {
        if (error) throw new Error(error);
        centralCorebody6 = JSON.parse(centralCorebody6);
        console.log("body6:" + JSON.stringify(centralCorebody6.D.Results));
        centralCoreData6 = centralCorebody6.D.Results;

    });

}



module.exports = router;