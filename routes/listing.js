var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', (req, res) => {
  // API HEAD INFO WITH KEY AND SUCH
  console.log("hiiii");
  var options = {
    method: 'GET',
    url: 'https://sparkapi.com/Reso/OData/Property',
    qs: {
      '$filter': 'City eq \'Aspen\' and MlsStatus eq \'Active\'',
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
  //ACTUALL API CALL
  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    let data = JSON.parse(body);
    let propertyData = data.value;
    console.log(data);

    // RENDER THE HOME TEMPLATE AND PASS THE GIF DATA IN TO THE TEMPLATE
    res.render('listing', {
      property: propertyData
    });
  });
  //RENDERS home.hbs PASSES PROPERTY VARIABLE(object) TO HANDLEBARS AND CAN BE CALLED USING IMAGES TAG

});

module.exports = router;