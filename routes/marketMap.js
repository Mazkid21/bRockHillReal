var express = require('express');
var request = require('request');
var Content = require('../models/content');
var router = express.Router();


var smugglerData1;

var smugglerData3;

var smugglerData5;


var centralCoreData1;

var centralCoreData3;

var centralCoreData5;


var westEndData1;

var westEndData3;

var westEndData5;


var eastAspenData1;

var eastAspenData3;

var eastAspenData5;


var redMtnData1;

var redMtnData3;

var redMtnData5;

var westAspenData1;

var westAspenData3;

var westAspenData5;


var mclainFlatsData1;

var mclainFlatsData3;

var mclainFlatsData5;





var snowmassVillageData1;

var snowmassVillageData3;

var snowmassVillageData5;




var brushCreekData1;

var brushCreekData3;

var brushCreekData5;


var woodyCreekData1;

var woodyCreekData3;

var woodyCreekData5;


var oldSnowmassData1;

var oldSnowmassData3;

var oldSnowmassData5;


var basaltProperData1;

var basaltProperData3;

var basaltProperData5;



var elJebelData1;

var elJebelData3;

var elJebelData5;


var carbondaleProperData1;

var carbondaleProperData3;

var carbondaleProperData5;

/* GET home page. */

router.get('/', function (req, res, next) {

    APICalls();


    res.render("marketMap", {
        smugglerData1: smugglerData1,

        smugglerData3: smugglerData3,

        smugglerData5: smugglerData5,

        centralCoreData1: centralCoreData1,

        centralCoreData3: centralCoreData3,

        centralCoreData5: centralCoreData5,

        westEndData1: westEndData1,

        westEndData3: westEndData3,

        westEndData5: westEndData5,

        eastAspenData1: eastAspenData1,

        eastAspenData3: eastAspenData3,

        eastAspenData5: eastAspenData5,

        redMtnData1: redMtnData1,

        redMtnData3: redMtnData3,

        redMtnData5: redMtnData5,

        westAspenData1: westAspenData1,

        westAspenData3: westAspenData3,

        westAspenData5: westAspenData5,

        mclainFlatsData1: mclainFlatsData1,

        mclainFlatsData3: mclainFlatsData3,

        mclainFlatsData5: mclainFlatsData5,

        snowmassVillageData1: snowmassVillageData1,

        snowmassVillageData3: snowmassVillageData3,

        snowmassVillageData5: snowmassVillageData5,

        brushCreekData1: brushCreekData1,

        brushCreekData3: brushCreekData3,

        brushCreekData5: brushCreekData5,

        woodyCreekData1: woodyCreekData1,

        woodyCreekData3: woodyCreekData3,

        woodyCreekData5: woodyCreekData5,

        oldSnowmassData1: oldSnowmassData1,

        oldSnowmassData3: oldSnowmassData3,

        oldSnowmassData5: oldSnowmassData5,

        basaltProperData1: basaltProperData1,

        basaltProperData3: basaltProperData3,

        basaltProperData5: basaltProperData5,

        elJebelData1: elJebelData1,

        elJebelData3: elJebelData3,

        elJebelData5: elJebelData5,

        carbondaleProperData1: carbondaleProperData1,

        carbondaleProperData3: carbondaleProperData3,

        carbondaleProperData5: carbondaleProperData5,



    });

});

//ACTUALL API CALL
function APICalls(callback1, callback2, callback3, callback4, callback5) {

    var smugglerOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Smuggler',
            Options: 'ActiveListings,SoldListings',
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
        smugglerData1 = body1.D.Results;

    });


    var smugglerOptions3 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Smuggler',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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
        smugglerData3 = body3.D.Results;

    });


    var smugglerOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Smuggler',
            Options: 'AverageDom,'
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
        smugglerData5 = body5.D.Results;

    });


    var centralCoreOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Central Core',
            Options: 'ActiveListings,SoldListings',
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
        centralCoreData1 = centralCorebody1.D.Results;

    });



    var centralCoreOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Central Core',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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
        centralCoreData3 = centralCorebody3.D.Results;

    });

    var centralCoreOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Central Core',
            Options: 'AverageDom,'
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
        centralCoreData5 = centralCorebody5.D.Results;

    });




    var westEndOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West End',
            Options: 'ActiveListings,SoldListings',
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

    request(westEndOptions1, function (error, response, westEnd1) {
        if (error) throw new Error(error);
        westEnd1 = JSON.parse(westEnd1);
        westEndData1 = westEnd1.D.Results;

    });



    var westEndOptions3 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West End',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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

    request(westEndOptions3, function (error, response, westEnd3) {
        if (error) throw new Error(error);
        westEnd3 = JSON.parse(westEnd3);
        westEndData3 = westEnd3.D.Results;

    });


    var westEndOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West End',
            Options: 'AverageDom,'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(westEndOptions5, function (error, response, westEnd5) {
        if (error) throw new Error(error);
        westEnd5 = JSON.parse(westEnd5);
        westEndData5 = westEnd5.D.Results;

    });




    var eastAspenOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-East Aspen',
            Options: 'ActiveListings,SoldListings',
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


    request(eastAspenOptions1, function (error, response, eastAspenbody1) {
        if (error) throw new Error(error);
        eastAspenbody1 = JSON.parse(eastAspenbody1);
        eastAspenData1 = eastAspenbody1.D.Results;

    });


    var eastAspenOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-East Aspen',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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


    request(eastAspenOptions3, function (error, response, eastAspenbody3) {
        if (error) throw new Error(error);
        eastAspenbody3 = JSON.parse(eastAspenbody3);
        eastAspenData3 = eastAspenbody3.D.Results;

    });



    var eastAspenOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-East Aspen',
            Options: 'AverageDom,'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(eastAspenOptions5, function (error, response, eastAspenbody5) {
        if (error) throw new Error(error);
        eastAspenbody5 = JSON.parse(eastAspenbody5);
        eastAspenData5 = eastAspenbody5.D.Results;

    });



    var redMtnOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Red Mountain',
            Options: 'ActiveListings,SoldListings',
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


    request(redMtnOptions1, function (error, response, redMtnbody1) {
        if (error) throw new Error(error);
        redMtnbody1 = JSON.parse(redMtnbody1);
        redMtnData1 = redMtnbody1.D.Results;

    });


    var redMtnOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Red Mountain',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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


    request(redMtnOptions3, function (error, response, redMtnbody3) {
        if (error) throw new Error(error);
        redMtnbody3 = JSON.parse(redMtnbody3);
        redMtnData3 = redMtnbody3.D.Results;

    });


    var redMtnOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Red Mountain',
            Options: 'AverageDom,'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(redMtnOptions5, function (error, response, redMtnbody5) {
        if (error) throw new Error(error);
        redMtnbody5 = JSON.parse(redMtnbody5);
        redMtnData5 = redMtnbody5.D.Results;

    });



    var westAspenOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West Aspen',
            Options: 'ActiveListings,SoldListings',
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


    request(westAspenOptions1, function (error, response, westAspenbody1) {
        if (error) throw new Error(error);
        westAspenbody1 = JSON.parse(westAspenbody1);
        westAspenData1 = westAspenbody1.D.Results;

    });



    var westAspenOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West Aspen',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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


    request(westAspenOptions3, function (error, response, westAspenbody3) {
        if (error) throw new Error(error);
        westAspenbody3 = JSON.parse(westAspenbody3);
        westAspenData3 = westAspenbody3.D.Results;

    });



    var westAspenOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West Aspen',
            Options: 'AverageDom,'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(westAspenOptions5, function (error, response, westAspenbody5) {
        if (error) throw new Error(error);
        westAspenbody5 = JSON.parse(westAspenbody5);
        westAspenData5 = westAspenbody5.D.Results;

    });


    var mclainFlatsOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-McLain Flats',
            Options: 'ActiveListings,SoldListings',
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


    request(mclainFlatsOptions1, function (error, response, mclainFlatsbody1) {
        if (error) throw new Error(error);
        mclainFlatsbody1 = JSON.parse(mclainFlatsbody1);
        mclainFlatsData1 = mclainFlatsbody1.D.Results;

    });


    var mclainFlatsOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-McLain Flats',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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


    request(mclainFlatsOptions3, function (error, response, mclainFlatsbody3) {
        if (error) throw new Error(error);
        mclainFlatsbody3 = JSON.parse(mclainFlatsbody3);
        mclainFlatsData3 = mclainFlatsbody3.D.Results;

    });



    var mclainFlatsOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-McLain Flats',
            Options: 'AverageDom,'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(mclainFlatsOptions5, function (error, response, mclainFlatsbody5) {
        if (error) throw new Error(error);
        mclainFlatsbody5 = JSON.parse(mclainFlatsbody5);
        mclainFlatsData5 = mclainFlatsbody5.D.Results;

    });




    var snowmassVillageOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Snowmass Village',
            Options: 'ActiveListings,SoldListings',
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


    request(snowmassVillageOptions1, function (error, response, snowmassVillagebody1) {
        if (error) throw new Error(error);
        snowmassVillagebody1 = JSON.parse(snowmassVillagebody1);
        snowmassVillageData1 = snowmassVillagebody1.D.Results;

    });



    var snowmassVillageOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Snowmass Village',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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


    request(snowmassVillageOptions3, function (error, response, snowmassVillagebody3) {
        if (error) throw new Error(error);
        snowmassVillagebody3 = JSON.parse(snowmassVillagebody3);
        snowmassVillageData3 = snowmassVillagebody3.D.Results;

    });


    var snowmassVillageOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Snowmass Village',
            Options: 'AverageDom,'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(snowmassVillageOptions5, function (error, response, snowmassVillagebody5) {
        if (error) throw new Error(error);
        snowmassVillagebody5 = JSON.parse(snowmassVillagebody5);
        snowmassVillageData5 = snowmassVillagebody5.D.Results;

    });


    var brushCreekOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Brush Creek Village',
            Options: 'ActiveListings,SoldListings',
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

    request(brushCreekOptions1, function (error, response, brushCreekbody1) {
        if (error) throw new Error(error);
        brushCreekbody1 = JSON.parse(brushCreekbody1);
        brushCreekData1 = brushCreekbody1.D.Results;

    });

    var brushCreekOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Snowmass Village',
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


    request(brushCreekOptions2, function (error, response, brushCreekbody2) {
        if (error) throw new Error(error);
        brushCreekbody2 = JSON.parse(brushCreekbody2);
        brushCreekData2 = brushCreekbody2.D.Results;

    });

    var brushCreekOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Brush Creek Village',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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


    request(brushCreekOptions3, function (error, response, brushCreekbody3) {
        if (error) throw new Error(error);
        brushCreekbody3 = JSON.parse(brushCreekbody3);
        brushCreekData3 = brushCreekbody3.D.Results;

    });

    var brushCreekOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Brush Creek Village',
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


    request(brushCreekOptions4, function (error, response, brushCreekbody4) {
        if (error) throw new Error(error);
        brushCreekbody4 = JSON.parse(brushCreekbody4);
        brushCreekData4 = brushCreekbody4.D.Results;

    });

    var brushCreekOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Brush Creek Village',
            Options: 'AverageDom,'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(brushCreekOptions5, function (error, response, brushCreekbody5) {
        if (error) throw new Error(error);
        brushCreekbody5 = JSON.parse(brushCreekbody5);
        brushCreekData5 = brushCreekbody5.D.Results;

    });

    var brushCreekOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Brush Creek Village',
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
    request(brushCreekOptions6, function (error, response, brushCreekbody6) {
        if (error) throw new Error(error);
        brushCreekbody6 = JSON.parse(brushCreekbody6);
        brushCreekData6 = brushCreekbody6.D.Results;

    });

    var woodyCreekOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '03-Woody Creek',
            Options: 'ActiveListings,SoldListings',
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

    request(woodyCreekOptions1, function (error, response, woodyCreekbody1) {
        if (error) throw new Error(error);
        woodyCreekbody1 = JSON.parse(woodyCreekbody1);
        woodyCreekData1 = woodyCreekbody1.D.Results;

    });

    var woodyCreekOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '03-Woody Creek',
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


    request(woodyCreekOptions2, function (error, response, woodyCreekbody2) {
        if (error) throw new Error(error);
        woodyCreekbody2 = JSON.parse(woodyCreekbody2);
        woodyCreekData2 = woodyCreekbody2.D.Results;

    });

    var woodyCreekOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '03-Woody Creek',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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


    request(woodyCreekOptions3, function (error, response, woodyCreekbody3) {
        if (error) throw new Error(error);
        woodyCreekbody3 = JSON.parse(woodyCreekbody3);
        woodyCreekData3 = woodyCreekbody3.D.Results;

    });

    var woodyCreekOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '03-Woody Creek',
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


    request(woodyCreekOptions4, function (error, response, woodyCreekbody4) {
        if (error) throw new Error(error);
        woodyCreekbody4 = JSON.parse(woodyCreekbody4);
        woodyCreekData4 = woodyCreekbody4.D.Results;

    });

    var woodyCreekOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '03-Woody Creek',
            Options: 'AverageDom,'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(woodyCreekOptions5, function (error, response, woodyCreekbody5) {
        if (error) throw new Error(error);
        woodyCreekbody5 = JSON.parse(woodyCreekbody5);
        woodyCreekData5 = woodyCreekbody5.D.Results;

    });

    var woodyCreekOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '03-Woody Creek',
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
    request(woodyCreekOptions6, function (error, response, woodyCreekbody6) {
        if (error) throw new Error(error);
        woodyCreekbody6 = JSON.parse(woodyCreekbody6);
        woodyCreekData6 = woodyCreekbody6.D.Results;

    });

    var oldSnowmassOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '04-Old Snowmass',
            Options: 'ActiveListings,SoldListings',
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

    request(oldSnowmassOptions1, function (error, response, oldSnowmassbody1) {
        if (error) throw new Error(error);
        oldSnowmassbody1 = JSON.parse(oldSnowmassbody1);
        oldSnowmassData1 = oldSnowmassbody1.D.Results;

    });

    var oldSnowmassOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '04-Old Snowmass',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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


    request(oldSnowmassOptions3, function (error, response, oldSnowmassbody3) {
        if (error) throw new Error(error);
        oldSnowmassbody3 = JSON.parse(oldSnowmassbody3);
        oldSnowmassData3 = oldSnowmassbody3.D.Results;

    });

    var oldSnowmassOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '04-Old Snowmass',
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


    request(oldSnowmassOptions4, function (error, response, oldSnowmassbody4) {
        if (error) throw new Error(error);
        oldSnowmassbody4 = JSON.parse(oldSnowmassbody4);
        oldSnowmassData4 = oldSnowmassbody4.D.Results;

    });

    var oldSnowmassOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '04-Old Snowmass',
            Options: 'AverageDom,'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(oldSnowmassOptions5, function (error, response, oldSnowmassbody5) {
        if (error) throw new Error(error);
        oldSnowmassbody5 = JSON.parse(oldSnowmassbody5);
        oldSnowmassData5 = oldSnowmassbody5.D.Results;

    });

    var oldSnowmassOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '04-Old Snowmass',
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
    request(oldSnowmassOptions6, function (error, response, oldSnowmassbody6) {
        if (error) throw new Error(error);
        oldSnowmassbody6 = JSON.parse(oldSnowmassbody6);
        oldSnowmassData6 = oldSnowmassbody6.D.Results;

    });



    var basaltProperOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-Basalt Proper',
            Options: 'ActiveListings,SoldListings',
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

    request(basaltProperOptions1, function (error, response, basaltProperbody1) {
        if (error) throw new Error(error);
        basaltProperbody1 = JSON.parse(basaltProperbody1);
        basaltProperData1 = basaltProperbody1.D.Results;

    });

    var basaltProperOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-Basalt Proper',
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


    request(basaltProperOptions2, function (error, response, basaltProperbody2) {
        if (error) throw new Error(error);
        basaltProperbody2 = JSON.parse(basaltProperbody2);
        basaltProperData2 = basaltProperbody2.D.Results;

    });

    var basaltProperOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-Basalt Proper',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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


    request(basaltProperOptions3, function (error, response, basaltProperbody3) {
        if (error) throw new Error(error);
        basaltProperbody3 = JSON.parse(basaltProperbody3);
        basaltProperData3 = basaltProperbody3.D.Results;

    });

    var basaltProperOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-Basalt Proper',
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


    request(basaltProperOptions4, function (error, response, basaltProperbody4) {
        if (error) throw new Error(error);
        basaltProperbody4 = JSON.parse(basaltProperbody4);
        basaltProperData4 = basaltProperbody4.D.Results;

    });

    var basaltProperOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-Basalt Proper',
            Options: 'AverageDom,'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(basaltProperOptions5, function (error, response, basaltProperbody5) {
        if (error) throw new Error(error);
        basaltProperbody5 = JSON.parse(basaltProperbody5);
        basaltProperData5 = basaltProperbody5.D.Results;

    });

    var basaltProperOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-Basalt Proper',
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
    request(basaltProperOptions6, function (error, response, basaltProperbody6) {
        if (error) throw new Error(error);
        basaltProperbody6 = JSON.parse(basaltProperbody6);
        basaltProperData6 = basaltProperbody6.D.Results;

    });



    var elJebelOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-El Jebel',
            Options: 'ActiveListings,SoldListings',
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

    request(elJebelOptions1, function (error, response, elJebelbody1) {
        if (error) throw new Error(error);
        elJebelbody1 = JSON.parse(elJebelbody1);
        elJebelData1 = elJebelbody1.D.Results;

    });

    var elJebelOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-El Jebel',
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


    request(elJebelOptions2, function (error, response, elJebelbody2) {
        if (error) throw new Error(error);
        elJebelbody2 = JSON.parse(elJebelbody2);
        elJebelData2 = elJebelbody2.D.Results;

    });

    var elJebelOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-El Jebel',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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


    request(elJebelOptions3, function (error, response, elJebelbody3) {
        if (error) throw new Error(error);
        elJebelbody3 = JSON.parse(elJebelbody3);
        elJebelData3 = elJebelbody3.D.Results;

    });

    var elJebelOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-El Jebel',
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


    request(elJebelOptions4, function (error, response, elJebelbody4) {
        if (error) throw new Error(error);
        elJebelbody4 = JSON.parse(elJebelbody4);
        elJebelData4 = elJebelbody4.D.Results;

    });

    var elJebelOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-El Jebel',
            Options: 'AverageDom,'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(elJebelOptions5, function (error, response, elJebelbody5) {
        if (error) throw new Error(error);
        elJebelbody5 = JSON.parse(elJebelbody5);
        elJebelData5 = elJebelbody5.D.Results;

    });

    var elJebelOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-El Jebel',
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
    request(elJebelOptions6, function (error, response, elJebelbody6) {
        if (error) throw new Error(error);
        elJebelbody6 = JSON.parse(elJebelbody6);
        elJebelData6 = elJebelbody6.D.Results;

    });

    var carbondaleProperOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '07-Carbondale Proper',
            Options: 'ActiveListings,SoldListings',
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


    request(carbondaleProperOptions1, function (error, response, carbondaleProperbody1) {
        if (error) throw new Error(error);
        carbondaleProperbody1 = JSON.parse(carbondaleProperbody1);
        carbondaleProperData1 = carbondaleProperbody1.D.Results;

    });



    var carbondaleProperOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '07-Carbondale Proper',
            Options: 'ActiveAverageListPrice,SoldAverageListPrice,SoldMedianListPrice',
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


    request(carbondaleProperOptions3, function (error, response, carbondaleProperbody3) {
        if (error) throw new Error(error);
        carbondaleProperbody3 = JSON.parse(carbondaleProperbody3);
        carbondaleProperData3 = carbondaleProperbody3.D.Results;

    });



    var carbondaleProperOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '07-Carbondale Proper',
            Options: 'AverageDom,'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(carbondaleProperOptions5, function (error, response, carbondaleProperbody5) {
        if (error) throw new Error(error);
        carbondaleProperbody5 = JSON.parse(carbondaleProperbody5);
        carbondaleProperData5 = carbondaleProperbody5.D.Results;

    });




}



module.exports = router;