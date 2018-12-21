initMap();

function initMap() {


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {
            lat: 39.281223,
            lng: -106.987992
        },
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ],
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.TERRAIN]
        },
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });


    var smugglerNewListings = document.getElementById("smugglerNewListings").innerHTML;

    smugglerNewListings = smugglerNewListings.split(",");

    var smugglerPendedListings = document.getElementById("smugglerPendedListings").innerHTML;

    smugglerPendedListings = smugglerPendedListings.split(",");


    var smugglerSoldListings = document.getElementById("smugglerSoldListings").innerHTML;

    smugglerSoldListings = smugglerSoldListings.split(",");


    var smugglerActiveListings = document.getElementById("smugglerActiveListings").innerHTML;

    smugglerActiveListings = smugglerActiveListings.split(",");

    var smugglerActiveListingsDate = document.getElementById("smugglerActiveListings-dates").innerHTML;

    smugglerActiveListingsDate = smugglerActiveListingsDate.split(",");

    var smugglerAbsorbtion = document.getElementById("smugglerAbsorbtion").innerHTML;

    smugglerAbsorbtion = smugglerAbsorbtion.split(",");

    var smugglerActiveAvgPrice = document.getElementById("smugglerActiveAvgPrice").innerHTML;
    smugglerActiveAvgPrice = smugglerActiveAvgPrice.split(",");
    smugglerActiveAvgPrice = Number(smugglerActiveAvgPrice[0]).toLocaleString();


    var smugglerNewAvgPrice = document.getElementById("smugglerNewAvgPrice").innerHTML;

    smugglerNewAvgPrice = smugglerNewAvgPrice.split(",");
    smugglerNewAvgPrice = Number(smugglerNewAvgPrice[0]).toLocaleString();

    var smugglerPendedAvgPrice = document.getElementById("smugglerPendedAvgPrice").innerHTML;

    smugglerPendedAvgPrice = smugglerPendedAvgPrice.split(",");
    smugglerPendedAvgPrice = Number(smugglerPendedAvgPrice[0]).toLocaleString();

    var smugglerSoldAvgPrice = document.getElementById("smugglerSoldAvgPrice").innerHTML;

    smugglerSoldAvgPrice = smugglerSoldAvgPrice.split(",");
    smugglerSoldAvgPrice = Number(smugglerSoldAvgPrice[0]).toLocaleString();

    var smugglerSoldAvgSoldPrice = document.getElementById("smugglerSoldAvgSoldPrice").innerHTML;

    smugglerSoldAvgSoldPrice = smugglerSoldAvgSoldPrice.split(",");
    smugglerSoldAvgSoldPrice = Number(smugglerSoldAvgSoldPrice[0]).toLocaleString();

    var smugglerActiveMedianPrice = document.getElementById("smugglerActiveMedianPrice").innerHTML;
    smugglerActiveMedianPrice = smugglerActiveMedianPrice.split(",");
    smugglerActiveMedianPrice = Number(smugglerActiveMedianPrice[0]).toLocaleString();

    var smugglerNewMedianPrice = document.getElementById("smugglerNewMedianPrice").innerHTML;

    smugglerNewMedianPrice = smugglerNewMedianPrice.split(",");
    smugglerNewMedianPrice = Number(smugglerNewMedianPrice[0]).toLocaleString();

    var smugglerPendedMedianPrice = document.getElementById("smugglerPendedMedianPrice").innerHTML;

    smugglerPendedMedianPrice = smugglerPendedMedianPrice.split(",");
    smugglerPendedMedianPrice = Number(smugglerPendedMedianPrice[0]).toLocaleString();

    var smugglerSoldMedianPrice = document.getElementById("smugglerSoldMedianPrice").innerHTML;

    smugglerSoldMedianPrice = smugglerSoldMedianPrice.split(",");
    smugglerSoldMedianPrice = Number(smugglerSoldMedianPrice[0]).toLocaleString();


    var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

    smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");
    smugglerSoldMedianSoldPrice = Number(smugglerSoldMedianSoldPrice[0]).toLocaleString();

    /*  var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

      smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");

      */

    var smugglerSaleToOriginalListPriceRatio = document.getElementById("smugglerSaleToOriginalListPriceRatio").innerHTML;

    smugglerSaleToOriginalListPriceRatio = smugglerSaleToOriginalListPriceRatio.split(",");

    var sumgglerSaleToListPriceRatio = document.getElementById("sumgglerSaleToListPriceRatio").innerHTML;

    sumgglerSaleToListPriceRatio = sumgglerSaleToListPriceRatio.split(",");

    var smugglerAverageDom = document.getElementById("smugglerAverageDom").innerHTML;
    smugglerAverageDom = smugglerAverageDom.split(",");

    var smugglerAverageCdom = document.getElementById("smugglerAverageCdom").innerHTML;
    smugglerAverageCdom = smugglerAverageCdom.split(",");


    var smugglerActiveListVolume = document.getElementById("smugglerActiveListVolume").innerHTML;
    smugglerActiveListVolume = smugglerActiveListVolume.split(",");

    var smugglerNewListVolume = document.getElementById("smugglerNewListVolume").innerHTML;
    smugglerNewListVolume = smugglerNewListVolume.split(",");

    var smugglerPendedListVolume = document.getElementById("smugglerPendedListVolume").innerHTML;
    smugglerPendedListVolume = smugglerPendedListVolume.split(",");

    var smugglerSoldListVolume = document.getElementById("smugglerSoldListVolume").innerHTML;
    smugglerSoldListVolume = smugglerSoldListVolume.split(",");

    var smugglerSoldSaleVolume = document.getElementById("smugglerSoldSaleVolume").innerHTML;
    smugglerSoldSaleVolume = smugglerSoldSaleVolume.split(",");





    var centralCoreNewListings = document.getElementById("centralCoreNewListings").innerHTML;

    centralCoreNewListings = centralCoreNewListings.split(",");

    var centralCorePendedListings = document.getElementById("centralCorePendedListings").innerHTML;

    centralCorePendedListings = centralCorePendedListings.split(",");


    var centralCoreSoldListings = document.getElementById("centralCoreSoldListings").innerHTML;

    centralCoreSoldListings = centralCoreSoldListings.split(",");


    var centralCoreActiveListings = document.getElementById("centralCoreActiveListings").innerHTML;

    centralCoreActiveListings = centralCoreActiveListings.split(",");

    var centralCoreActiveListingsDate = document.getElementById("centralCoreActiveListings-dates").innerHTML;

    centralCoreActiveListingsDate = centralCoreActiveListingsDate.split(",");

    var centralCoreAbsorbtion = document.getElementById("centralCoreAbsorbtion").innerHTML;

    centralCoreAbsorbtion = centralCoreAbsorbtion.split(",");

    console.log(centralCoreAbsorbtion);

    var centralCoreActiveAvgPrice = document.getElementById("centralCoreActiveAvgPrice").innerHTML;
    centralCoreActiveAvgPrice = centralCoreActiveAvgPrice.split(",");
    centralCoreActiveAvgPrice = Number(centralCoreActiveAvgPrice[0]).toLocaleString();


    var centralCoreNewAvgPrice = document.getElementById("centralCoreNewAvgPrice").innerHTML;

    centralCoreNewAvgPrice = centralCoreNewAvgPrice.split(",");

    var centralCorePendedAvgPrice = document.getElementById("centralCorePendedAvgPrice").innerHTML;

    centralCorePendedAvgPrice = centralCorePendedAvgPrice.split(",");

    var centralCoreSoldAvgPrice = document.getElementById("centralCoreSoldAvgPrice").innerHTML;

    centralCoreSoldAvgPrice = centralCoreSoldAvgPrice.split(",");

    var centralCoreSoldAvgSoldPrice = document.getElementById("centralCoreSoldAvgSoldPrice").innerHTML;

    centralCoreSoldAvgSoldPrice = centralCoreSoldAvgSoldPrice.split(",");

    var centralCoreActiveMedianPrice = document.getElementById("centralCoreActiveMedianPrice").innerHTML;
    centralCoreActiveMedianPrice = centralCoreActiveMedianPrice.split(",");
    centralCoreActiveMedianPrice = Number(centralCoreActiveMedianPrice[0]).toLocaleString();

    var centralCoreNewMedianPrice = document.getElementById("centralCoreNewMedianPrice").innerHTML;

    centralCoreNewMedianPrice = centralCoreNewMedianPrice.split(",");

    var centralCorePendedMedianPrice = document.getElementById("centralCorePendedMedianPrice").innerHTML;

    centralCorePendedMedianPrice = centralCorePendedMedianPrice.split(",");

    var centralCoreSoldMedianPrice = document.getElementById("centralCoreSoldMedianPrice").innerHTML;

    centralCoreSoldMedianPrice = centralCoreSoldMedianPrice.split(",");


    var centralCoreSoldMedianSoldPrice = document.getElementById("centralCoreSoldMedianSoldPrice").innerHTML;

    centralCoreSoldMedianSoldPrice = centralCoreSoldMedianSoldPrice.split(",");

    var centralCoreSoldMedianSoldPrice = document.getElementById("centralCoreSoldMedianSoldPrice").innerHTML;

    centralCoreSoldMedianSoldPrice = centralCoreSoldMedianSoldPrice.split(",");

    var centralCoreSaleToOriginalListPriceRatio = document.getElementById("centralCoreSaleToOriginalListPriceRatio").innerHTML;

    centralCoreSaleToOriginalListPriceRatio = centralCoreSaleToOriginalListPriceRatio.split(",");

    var centralCoreSaleToListPriceRatio = document.getElementById("centralCoreSaleToListPriceRatio").innerHTML;

    centralCoreSaleToListPriceRatio = centralCoreSaleToListPriceRatio.split(",");

    var centralCoreAverageDom = document.getElementById("centralCoreAverageDom").innerHTML;
    centralCoreAverageDom = centralCoreAverageDom.split(",");

    var centralCoreAverageCdom = document.getElementById("centralCoreAverageCdom").innerHTML;
    centralCoreAverageCdom = centralCoreAverageCdom.split(",");


    var centralCoreActiveListVolume = document.getElementById("centralCoreActiveListVolume").innerHTML;
    centralCoreActiveListVolume = centralCoreActiveListVolume.split(",");

    var centralCoreNewListVolume = document.getElementById("centralCoreNewListVolume").innerHTML;
    centralCoreNewListVolume = centralCoreNewListVolume.split(",");

    var centralCorePendedListVolume = document.getElementById("centralCorePendedListVolume").innerHTML;
    centralCorePendedListVolume = centralCorePendedListVolume.split(",");

    var centralCoreSoldListVolume = document.getElementById("centralCoreSoldListVolume").innerHTML;
    centralCoreSoldListVolume = centralCoreSoldListVolume.split(",");

    var centralCoreSoldSaleVolume = document.getElementById("centralCoreSoldSaleVolume").innerHTML;
    centralCoreSoldSaleVolume = centralCoreSoldSaleVolume.split(",");





    var westEndNewListings = document.getElementById("westEndNewListings").innerHTML;

    westEndNewListings = westEndNewListings.split(",");

    var westEndPendedListings = document.getElementById("westEndPendedListings").innerHTML;

    westEndPendedListings = westEndPendedListings.split(",");


    var westEndSoldListings = document.getElementById("westEndSoldListings").innerHTML;

    westEndSoldListings = westEndSoldListings.split(",");


    var westEndActiveListings = document.getElementById("westEndActiveListings").innerHTML;

    westEndActiveListings = westEndActiveListings.split(",");

    var westEndActiveListingsDate = document.getElementById("westEndActiveListings-dates").innerHTML;

    westEndActiveListingsDate = westEndActiveListingsDate.split(",");

    var westEndAbsorbtion = document.getElementById("westEndAbsorbtion").innerHTML;

    westEndAbsorbtion = westEndAbsorbtion.split(",");

    var westEndActiveAvgPrice = document.getElementById("westEndActiveAvgPrice").innerHTML;
    westEndActiveAvgPrice = westEndActiveAvgPrice.split(",");
    westEndActiveAvgPrice = Number(westEndActiveAvgPrice[0]).toLocaleString();


    var westEndNewAvgPrice = document.getElementById("westEndNewAvgPrice").innerHTML;

    westEndNewAvgPrice = westEndNewAvgPrice.split(",");
    westEndNewAvgPrice = Number(westEndNewAvgPrice[0]).toLocaleString();

    var westEndPendedAvgPrice = document.getElementById("westEndPendedAvgPrice").innerHTML;

    westEndPendedAvgPrice = westEndPendedAvgPrice.split(",");
    westEndPendedAvgPrice = Number(westEndPendedAvgPrice[0]).toLocaleString();

    var westEndSoldAvgPrice = document.getElementById("westEndSoldAvgPrice").innerHTML;

    westEndSoldAvgPrice = westEndSoldAvgPrice.split(",");
    westEndSoldAvgPrice = Number(westEndSoldAvgPrice[0]).toLocaleString();

    var westEndSoldAvgSoldPrice = document.getElementById("westEndSoldAvgSoldPrice").innerHTML;

    westEndSoldAvgSoldPrice = westEndSoldAvgSoldPrice.split(",");
    westEndSoldAvgSoldPrice = Number(westEndSoldAvgSoldPrice[0]).toLocaleString();

    var westEndActiveMedianPrice = document.getElementById("westEndActiveMedianPrice").innerHTML;
    westEndActiveMedianPrice = westEndActiveMedianPrice.split(",");
    westEndActiveMedianPrice = Number(westEndActiveMedianPrice[0]).toLocaleString();

    var westEndNewMedianPrice = document.getElementById("westEndNewMedianPrice").innerHTML;

    westEndNewMedianPrice = westEndNewMedianPrice.split(",");
    westEndNewMedianPrice = Number(westEndNewMedianPrice[0]).toLocaleString();

    var westEndPendedMedianPrice = document.getElementById("westEndPendedMedianPrice").innerHTML;

    westEndPendedMedianPrice = westEndPendedMedianPrice.split(",");
    westEndPendedMedianPrice = Number(westEndPendedMedianPrice[0]).toLocaleString();

    var westEndSoldMedianPrice = document.getElementById("westEndSoldMedianPrice").innerHTML;

    westEndSoldMedianPrice = westEndSoldMedianPrice.split(",");
    westEndSoldMedianPrice = Number(westEndSoldMedianPrice[0]).toLocaleString();


    var westEndSoldMedianSoldPrice = document.getElementById("westEndSoldMedianSoldPrice").innerHTML;

    westEndSoldMedianSoldPrice = westEndSoldMedianSoldPrice.split(",");
    westEndSoldMedianSoldPrice = Number(westEndSoldMedianSoldPrice[0]).toLocaleString();

    /*  var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

      smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");

      */

    var westEndSaleToOriginalListPriceRatio = document.getElementById("westEndSaleToOriginalListPriceRatio").innerHTML;

    westEndSaleToOriginalListPriceRatio = westEndSaleToOriginalListPriceRatio.split(",");

    var westEndSaleToListPriceRatio = document.getElementById("westEndSaleToListPriceRatio").innerHTML;

    westEndSaleToListPriceRatio = westEndSaleToListPriceRatio.split(",");

    var westEndAverageDom = document.getElementById("westEndAverageDom").innerHTML;
    westEndAverageDom = westEndAverageDom.split(",");

    var westEndAverageCdom = document.getElementById("westEndAverageCdom").innerHTML;
    westEndAverageCdom = westEndAverageCdom.split(",");


    var westEndActiveListVolume = document.getElementById("westEndActiveListVolume").innerHTML;
    westEndActiveListVolume = westEndActiveListVolume.split(",");

    var westEndNewListVolume = document.getElementById("westEndNewListVolume").innerHTML;
    westEndNewListVolume = westEndNewListVolume.split(",");

    var westEndPendedListVolume = document.getElementById("westEndPendedListVolume").innerHTML;
    westEndPendedListVolume = westEndPendedListVolume.split(",");

    var westEndSoldListVolume = document.getElementById("westEndSoldListVolume").innerHTML;
    westEndSoldListVolume = westEndSoldListVolume.split(",");

    var westEndSoldSaleVolume = document.getElementById("westEndSoldSaleVolume").innerHTML;
    westEndSoldSaleVolume = westEndSoldSaleVolume.split(",");





    var eastAspenNewListings = document.getElementById("eastAspenNewListings").innerHTML;

    eastAspenNewListings = eastAspenNewListings.split(",");

    var eastAspenPendedListings = document.getElementById("eastAspenPendedListings").innerHTML;

    eastAspenPendedListings = eastAspenPendedListings.split(",");


    var eastAspenSoldListings = document.getElementById("eastAspenSoldListings").innerHTML;

    eastAspenSoldListings = eastAspenSoldListings.split(",");


    var eastAspenActiveListings = document.getElementById("eastAspenActiveListings").innerHTML;

    eastAspenActiveListings = eastAspenActiveListings.split(",");

    var eastAspenActiveListingsDate = document.getElementById("eastAspenActiveListings-dates").innerHTML;

    eastAspenActiveListingsDate = eastAspenActiveListingsDate.split(",");

    var eastAspenAbsorbtion = document.getElementById("eastAspenAbsorbtion").innerHTML;

    eastAspenAbsorbtion = eastAspenAbsorbtion.split(",");

    var eastAspenActiveAvgPrice = document.getElementById("eastAspenActiveAvgPrice").innerHTML;
    eastAspenActiveAvgPrice = eastAspenActiveAvgPrice.split(",");
    eastAspenActiveAvgPrice = Number(eastAspenActiveAvgPrice[0]).toLocaleString();


    var eastAspenNewAvgPrice = document.getElementById("eastAspenNewAvgPrice").innerHTML;

    eastAspenNewAvgPrice = eastAspenNewAvgPrice.split(",");
    eastAspenNewAvgPrice = Number(eastAspenNewAvgPrice[0]).toLocaleString();

    var eastAspenPendedAvgPrice = document.getElementById("eastAspenPendedAvgPrice").innerHTML;

    eastAspenPendedAvgPrice = eastAspenPendedAvgPrice.split(",");
    eastAspenPendedAvgPrice = Number(eastAspenPendedAvgPrice[0]).toLocaleString();

    var eastAspenSoldAvgPrice = document.getElementById("eastAspenSoldAvgPrice").innerHTML;

    eastAspenSoldAvgPrice = eastAspenSoldAvgPrice.split(",");
    eastAspenSoldAvgPrice = Number(eastAspenSoldAvgPrice[0]).toLocaleString();

    var eastAspenSoldAvgSoldPrice = document.getElementById("eastAspenSoldAvgSoldPrice").innerHTML;

    eastAspenSoldAvgSoldPrice = eastAspenSoldAvgSoldPrice.split(",");
    eastAspenSoldAvgSoldPrice = Number(eastAspenSoldAvgSoldPrice[0]).toLocaleString();

    var eastAspenActiveMedianPrice = document.getElementById("eastAspenActiveMedianPrice").innerHTML;
    eastAspenActiveMedianPrice = eastAspenActiveMedianPrice.split(",");
    eastAspenActiveMedianPrice = Number(eastAspenActiveMedianPrice[0]).toLocaleString();

    var eastAspenNewMedianPrice = document.getElementById("eastAspenNewMedianPrice").innerHTML;

    eastAspenNewMedianPrice = eastAspenNewMedianPrice.split(",");
    eastAspenNewMedianPrice = Number(eastAspenNewMedianPrice[0]).toLocaleString();

    var eastAspenPendedMedianPrice = document.getElementById("eastAspenPendedMedianPrice").innerHTML;

    eastAspenPendedMedianPrice = eastAspenPendedMedianPrice.split(",");
    eastAspenPendedMedianPrice = Number(eastAspenPendedMedianPrice[0]).toLocaleString();

    var eastAspenSoldMedianPrice = document.getElementById("eastAspenSoldMedianPrice").innerHTML;

    eastAspenSoldMedianPrice = eastAspenSoldMedianPrice.split(",");
    eastAspenSoldMedianPrice = Number(eastAspenSoldMedianPrice[0]).toLocaleString();


    var eastAspenSoldMedianSoldPrice = document.getElementById("eastAspenSoldMedianSoldPrice").innerHTML;

    eastAspenSoldMedianSoldPrice = eastAspenSoldMedianSoldPrice.split(",");
    eastAspenSoldMedianSoldPrice = Number(eastAspenSoldMedianSoldPrice[0]).toLocaleString();

    /*  var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

      smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");

      */

    var eastAspenSaleToOriginalListPriceRatio = document.getElementById("eastAspenSaleToOriginalListPriceRatio").innerHTML;

    eastAspenSaleToOriginalListPriceRatio = eastAspenSaleToOriginalListPriceRatio.split(",");

    var eastAspenSaleToListPriceRatio = document.getElementById("eastAspenSaleToListPriceRatio").innerHTML;

    eastAspenSaleToListPriceRatio = eastAspenSaleToListPriceRatio.split(",");

    var eastAspenAverageDom = document.getElementById("eastAspenAverageDom").innerHTML;
    eastAspenAverageDom = eastAspenAverageDom.split(",");

    var eastAspenAverageCdom = document.getElementById("eastAspenAverageCdom").innerHTML;
    eastAspenAverageCdom = eastAspenAverageCdom.split(",");


    var eastAspenActiveListVolume = document.getElementById("eastAspenActiveListVolume").innerHTML;
    eastAspenActiveListVolume = eastAspenActiveListVolume.split(",");

    var eastAspenNewListVolume = document.getElementById("eastAspenNewListVolume").innerHTML;
    eastAspenNewListVolume = eastAspenNewListVolume.split(",");

    var eastAspenPendedListVolume = document.getElementById("eastAspenPendedListVolume").innerHTML;
    eastAspenPendedListVolume = eastAspenPendedListVolume.split(",");

    var eastAspenSoldListVolume = document.getElementById("eastAspenSoldListVolume").innerHTML;
    eastAspenSoldListVolume = eastAspenSoldListVolume.split(",");

    var eastAspenSoldSaleVolume = document.getElementById("eastAspenSoldSaleVolume").innerHTML;
    eastAspenSoldSaleVolume = eastAspenSoldSaleVolume.split(",");

    ///////////



    var redMtnNewListings = document.getElementById("redMtnNewListings").innerHTML;

    redMtnNewListings = redMtnNewListings.split(",");

    var redMtnPendedListings = document.getElementById("redMtnPendedListings").innerHTML;

    redMtnPendedListings = redMtnPendedListings.split(",");


    var redMtnSoldListings = document.getElementById("redMtnSoldListings").innerHTML;

    redMtnSoldListings = redMtnSoldListings.split(",");


    var redMtnActiveListings = document.getElementById("redMtnActiveListings").innerHTML;

    redMtnActiveListings = redMtnActiveListings.split(",");

    var redMtnActiveListingsDate = document.getElementById("redMtnActiveListings-dates").innerHTML;

    redMtnActiveListingsDate = redMtnActiveListingsDate.split(",");

    var redMtnAbsorbtion = document.getElementById("redMtnAbsorbtion").innerHTML;

    redMtnAbsorbtion = redMtnAbsorbtion.split(",");

    var redMtnActiveAvgPrice = document.getElementById("redMtnActiveAvgPrice").innerHTML;
    redMtnActiveAvgPrice = redMtnActiveAvgPrice.split(",");
    redMtnActiveAvgPrice = Number(redMtnActiveAvgPrice[0]).toLocaleString();


    var redMtnNewAvgPrice = document.getElementById("redMtnNewAvgPrice").innerHTML;

    redMtnNewAvgPrice = redMtnNewAvgPrice.split(",");
    redMtnNewAvgPrice = Number(redMtnNewAvgPrice[0]).toLocaleString();

    var redMtnPendedAvgPrice = document.getElementById("redMtnPendedAvgPrice").innerHTML;

    redMtnPendedAvgPrice = redMtnPendedAvgPrice.split(",");
    redMtnPendedAvgPrice = Number(redMtnPendedAvgPrice[0]).toLocaleString();

    var redMtnSoldAvgPrice = document.getElementById("redMtnSoldAvgPrice").innerHTML;

    redMtnSoldAvgPrice = redMtnSoldAvgPrice.split(",");
    redMtnSoldAvgPrice = Number(redMtnSoldAvgPrice[0]).toLocaleString();

    var redMtnSoldAvgSoldPrice = document.getElementById("redMtnSoldAvgSoldPrice").innerHTML;

    redMtnSoldAvgSoldPrice = redMtnSoldAvgSoldPrice.split(",");
    redMtnSoldAvgSoldPrice = Number(redMtnSoldAvgSoldPrice[0]).toLocaleString();

    var redMtnActiveMedianPrice = document.getElementById("redMtnActiveMedianPrice").innerHTML;
    redMtnActiveMedianPrice = redMtnActiveMedianPrice.split(",");
    redMtnActiveMedianPrice = Number(redMtnActiveMedianPrice[0]).toLocaleString();

    var redMtnNewMedianPrice = document.getElementById("redMtnNewMedianPrice").innerHTML;

    redMtnNewMedianPrice = redMtnNewMedianPrice.split(",");
    redMtnNewMedianPrice = Number(redMtnNewMedianPrice[0]).toLocaleString();

    var redMtnPendedMedianPrice = document.getElementById("redMtnPendedMedianPrice").innerHTML;

    redMtnPendedMedianPrice = redMtnPendedMedianPrice.split(",");
    redMtnPendedMedianPrice = Number(redMtnPendedMedianPrice[0]).toLocaleString();

    var redMtnSoldMedianPrice = document.getElementById("redMtnSoldMedianPrice").innerHTML;

    redMtnSoldMedianPrice = redMtnSoldMedianPrice.split(",");
    redMtnSoldMedianPrice = Number(redMtnSoldMedianPrice[0]).toLocaleString();


    var redMtnSoldMedianSoldPrice = document.getElementById("redMtnSoldMedianSoldPrice").innerHTML;

    redMtnSoldMedianSoldPrice = redMtnSoldMedianSoldPrice.split(",");
    redMtnSoldMedianSoldPrice = Number(redMtnSoldMedianSoldPrice[0]).toLocaleString();

    /*  var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

      smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");

      */

    var redMtnSaleToOriginalListPriceRatio = document.getElementById("redMtnSaleToOriginalListPriceRatio").innerHTML;

    redMtnSaleToOriginalListPriceRatio = redMtnSaleToOriginalListPriceRatio.split(",");

    var redMtnSaleToListPriceRatio = document.getElementById("redMtnSaleToListPriceRatio").innerHTML;

    redMtnSaleToListPriceRatio = redMtnSaleToListPriceRatio.split(",");

    var redMtnAverageDom = document.getElementById("redMtnAverageDom").innerHTML;
    redMtnAverageDom = redMtnAverageDom.split(",");

    var redMtnAverageCdom = document.getElementById("redMtnAverageCdom").innerHTML;
    redMtnAverageCdom = redMtnAverageCdom.split(",");


    var redMtnActiveListVolume = document.getElementById("redMtnActiveListVolume").innerHTML;
    redMtnActiveListVolume = redMtnActiveListVolume.split(",");

    var redMtnNewListVolume = document.getElementById("redMtnNewListVolume").innerHTML;
    redMtnNewListVolume = redMtnNewListVolume.split(",");

    var redMtnPendedListVolume = document.getElementById("redMtnPendedListVolume").innerHTML;
    redMtnPendedListVolume = redMtnPendedListVolume.split(",");

    var redMtnSoldListVolume = document.getElementById("redMtnSoldListVolume").innerHTML;
    redMtnSoldListVolume = redMtnSoldListVolume.split(",");

    var redMtnSoldSaleVolume = document.getElementById("redMtnSoldSaleVolume").innerHTML;
    redMtnSoldSaleVolume = redMtnSoldSaleVolume.split(",");


    var westAspenNewListings = document.getElementById("westAspenNewListings").innerHTML;

    westAspenNewListings = westAspenNewListings.split(",");

    var westAspenPendedListings = document.getElementById("westAspenPendedListings").innerHTML;

    westAspenPendedListings = westAspenPendedListings.split(",");


    var westAspenSoldListings = document.getElementById("westAspenSoldListings").innerHTML;

    westAspenSoldListings = westAspenSoldListings.split(",");


    var westAspenActiveListings = document.getElementById("westAspenActiveListings").innerHTML;

    westAspenActiveListings = westAspenActiveListings.split(",");

    var westAspenActiveListingsDate = document.getElementById("westAspenActiveListings-dates").innerHTML;

    westAspenActiveListingsDate = westAspenActiveListingsDate.split(",");

    var westAspenAbsorbtion = document.getElementById("westAspenAbsorbtion").innerHTML;

    westAspenAbsorbtion = westAspenAbsorbtion.split(",");

    var westAspenActiveAvgPrice = document.getElementById("westAspenActiveAvgPrice").innerHTML;
    westAspenActiveAvgPrice = westAspenActiveAvgPrice.split(",");
    westAspenActiveAvgPrice = Number(westAspenActiveAvgPrice[0]).toLocaleString();


    var westAspenNewAvgPrice = document.getElementById("westAspenNewAvgPrice").innerHTML;

    westAspenNewAvgPrice = westAspenNewAvgPrice.split(",");
    westAspenNewAvgPrice = Number(westAspenNewAvgPrice[0]).toLocaleString();

    var westAspenPendedAvgPrice = document.getElementById("westAspenPendedAvgPrice").innerHTML;

    westAspenPendedAvgPrice = westAspenPendedAvgPrice.split(",");
    westAspenPendedAvgPrice = Number(westAspenPendedAvgPrice[0]).toLocaleString();

    var westAspenSoldAvgPrice = document.getElementById("westAspenSoldAvgPrice").innerHTML;

    westAspenSoldAvgPrice = westAspenSoldAvgPrice.split(",");
    westAspenSoldAvgPrice = Number(westAspenSoldAvgPrice[0]).toLocaleString();

    var westAspenSoldAvgSoldPrice = document.getElementById("westAspenSoldAvgSoldPrice").innerHTML;

    westAspenSoldAvgSoldPrice = westAspenSoldAvgSoldPrice.split(",");
    westAspenSoldAvgSoldPrice = Number(westAspenSoldAvgSoldPrice[0]).toLocaleString();

    var westAspenActiveMedianPrice = document.getElementById("westAspenActiveMedianPrice").innerHTML;
    westAspenActiveMedianPrice = westAspenActiveMedianPrice.split(",");
    westAspenActiveMedianPrice = Number(westAspenActiveMedianPrice[0]).toLocaleString();

    var westAspenNewMedianPrice = document.getElementById("westAspenNewMedianPrice").innerHTML;

    westAspenNewMedianPrice = westAspenNewMedianPrice.split(",");
    westAspenNewMedianPrice = Number(westAspenNewMedianPrice[0]).toLocaleString();

    var westAspenPendedMedianPrice = document.getElementById("westAspenPendedMedianPrice").innerHTML;

    westAspenPendedMedianPrice = westAspenPendedMedianPrice.split(",");
    westAspenPendedMedianPrice = Number(westAspenPendedMedianPrice[0]).toLocaleString();

    var westAspenSoldMedianPrice = document.getElementById("westAspenSoldMedianPrice").innerHTML;

    westAspenSoldMedianPrice = westAspenSoldMedianPrice.split(",");
    westAspenSoldMedianPrice = Number(westAspenSoldMedianPrice[0]).toLocaleString();


    var westAspenSoldMedianSoldPrice = document.getElementById("westAspenSoldMedianSoldPrice").innerHTML;

    westAspenSoldMedianSoldPrice = westAspenSoldMedianSoldPrice.split(",");
    westAspenSoldMedianSoldPrice = Number(westAspenSoldMedianSoldPrice[0]).toLocaleString();

    /*  var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

      smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");

      */

    var westAspenSaleToOriginalListPriceRatio = document.getElementById("westAspenSaleToOriginalListPriceRatio").innerHTML;

    westAspenSaleToOriginalListPriceRatio = westAspenSaleToOriginalListPriceRatio.split(",");

    var westAspenSaleToListPriceRatio = document.getElementById("westAspenSaleToListPriceRatio").innerHTML;

    westAspenSaleToListPriceRatio = westAspenSaleToListPriceRatio.split(",");

    var westAspenAverageDom = document.getElementById("westAspenAverageDom").innerHTML;
    westAspenAverageDom = westAspenAverageDom.split(",");

    var westAspenAverageCdom = document.getElementById("westAspenAverageCdom").innerHTML;
    westAspenAverageCdom = westAspenAverageCdom.split(",");


    var westAspenActiveListVolume = document.getElementById("westAspenActiveListVolume").innerHTML;
    westAspenActiveListVolume = westAspenActiveListVolume.split(",");

    var westAspenNewListVolume = document.getElementById("westAspenNewListVolume").innerHTML;
    westAspenNewListVolume = westAspenNewListVolume.split(",");

    var westAspenPendedListVolume = document.getElementById("westAspenPendedListVolume").innerHTML;
    westAspenPendedListVolume = westAspenPendedListVolume.split(",");

    var westAspenSoldListVolume = document.getElementById("westAspenSoldListVolume").innerHTML;
    westAspenSoldListVolume = westAspenSoldListVolume.split(",");

    var westAspenSoldSaleVolume = document.getElementById("westAspenSoldSaleVolume").innerHTML;
    westAspenSoldSaleVolume = westAspenSoldSaleVolume.split(",");


    var mclainFlatsNewListings = document.getElementById("mclainFlatsNewListings").innerHTML;

    mclainFlatsNewListings = mclainFlatsNewListings.split(",");

    var mclainFlatsPendedListings = document.getElementById("mclainFlatsPendedListings").innerHTML;

    mclainFlatsPendedListings = mclainFlatsPendedListings.split(",");


    var mclainFlatsSoldListings = document.getElementById("mclainFlatsSoldListings").innerHTML;

    mclainFlatsSoldListings = mclainFlatsSoldListings.split(",");


    var mclainFlatsActiveListings = document.getElementById("mclainFlatsActiveListings").innerHTML;

    mclainFlatsActiveListings = mclainFlatsActiveListings.split(",");

    var mclainFlatsActiveListingsDate = document.getElementById("mclainFlatsActiveListings-dates").innerHTML;

    mclainFlatsActiveListingsDate = mclainFlatsActiveListingsDate.split(",");

    var mclainFlatsAbsorbtion = document.getElementById("mclainFlatsAbsorbtion").innerHTML;

    mclainFlatsAbsorbtion = mclainFlatsAbsorbtion.split(",");

    var mclainFlatsActiveAvgPrice = document.getElementById("mclainFlatsActiveAvgPrice").innerHTML;
    mclainFlatsActiveAvgPrice = mclainFlatsActiveAvgPrice.split(",");
    mclainFlatsActiveAvgPrice = Number(mclainFlatsActiveAvgPrice[0]).toLocaleString();


    var mclainFlatsNewAvgPrice = document.getElementById("mclainFlatsNewAvgPrice").innerHTML;

    mclainFlatsNewAvgPrice = mclainFlatsNewAvgPrice.split(",");
    mclainFlatsNewAvgPrice = Number(mclainFlatsNewAvgPrice[0]).toLocaleString();

    var mclainFlatsPendedAvgPrice = document.getElementById("mclainFlatsPendedAvgPrice").innerHTML;

    mclainFlatsPendedAvgPrice = mclainFlatsPendedAvgPrice.split(",");
    mclainFlatsPendedAvgPrice = Number(mclainFlatsPendedAvgPrice[0]).toLocaleString();

    var mclainFlatsSoldAvgPrice = document.getElementById("mclainFlatsSoldAvgPrice").innerHTML;

    mclainFlatsSoldAvgPrice = mclainFlatsSoldAvgPrice.split(",");
    mclainFlatsSoldAvgPrice = Number(mclainFlatsSoldAvgPrice[0]).toLocaleString();

    var mclainFlatsSoldAvgSoldPrice = document.getElementById("mclainFlatsSoldAvgSoldPrice").innerHTML;

    mclainFlatsSoldAvgSoldPrice = mclainFlatsSoldAvgSoldPrice.split(",");
    mclainFlatsSoldAvgSoldPrice = Number(mclainFlatsSoldAvgSoldPrice[0]).toLocaleString();

    var mclainFlatsActiveMedianPrice = document.getElementById("mclainFlatsActiveMedianPrice").innerHTML;
    mclainFlatsActiveMedianPrice = mclainFlatsActiveMedianPrice.split(",");
    mclainFlatsActiveMedianPrice = Number(mclainFlatsActiveMedianPrice[0]).toLocaleString();

    var mclainFlatsNewMedianPrice = document.getElementById("mclainFlatsNewMedianPrice").innerHTML;

    mclainFlatsNewMedianPrice = mclainFlatsNewMedianPrice.split(",");
    mclainFlatsNewMedianPrice = Number(mclainFlatsNewMedianPrice[0]).toLocaleString();

    var mclainFlatsPendedMedianPrice = document.getElementById("mclainFlatsPendedMedianPrice").innerHTML;

    mclainFlatsPendedMedianPrice = mclainFlatsPendedMedianPrice.split(",");
    mclainFlatsPendedMedianPrice = Number(mclainFlatsPendedMedianPrice[0]).toLocaleString();

    var mclainFlatsSoldMedianPrice = document.getElementById("mclainFlatsSoldMedianPrice").innerHTML;

    mclainFlatsSoldMedianPrice = mclainFlatsSoldMedianPrice.split(",");
    mclainFlatsSoldMedianPrice = Number(mclainFlatsSoldMedianPrice[0]).toLocaleString();


    var mclainFlatsSoldMedianSoldPrice = document.getElementById("mclainFlatsSoldMedianSoldPrice").innerHTML;

    mclainFlatsSoldMedianSoldPrice = mclainFlatsSoldMedianSoldPrice.split(",");
    mclainFlatsSoldMedianSoldPrice = Number(mclainFlatsSoldMedianSoldPrice[0]).toLocaleString();

    /*  var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

      smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");

      */

    var mclainFlatsSaleToOriginalListPriceRatio = document.getElementById("mclainFlatsSaleToOriginalListPriceRatio").innerHTML;

    mclainFlatsSaleToOriginalListPriceRatio = mclainFlatsSaleToOriginalListPriceRatio.split(",");

    var mclainFlatsSaleToListPriceRatio = document.getElementById("mclainFlatsSaleToListPriceRatio").innerHTML;

    mclainFlatsSaleToListPriceRatio = mclainFlatsSaleToListPriceRatio.split(",");

    var mclainFlatsAverageDom = document.getElementById("mclainFlatsAverageDom").innerHTML;
    mclainFlatsAverageDom = mclainFlatsAverageDom.split(",");

    var mclainFlatsAverageCdom = document.getElementById("mclainFlatsAverageCdom").innerHTML;
    mclainFlatsAverageCdom = mclainFlatsAverageCdom.split(",");


    var mclainFlatsActiveListVolume = document.getElementById("mclainFlatsActiveListVolume").innerHTML;
    mclainFlatsActiveListVolume = mclainFlatsActiveListVolume.split(",");

    var mclainFlatsNewListVolume = document.getElementById("mclainFlatsNewListVolume").innerHTML;
    mclainFlatsNewListVolume = mclainFlatsNewListVolume.split(",");

    var mclainFlatsPendedListVolume = document.getElementById("mclainFlatsPendedListVolume").innerHTML;
    mclainFlatsPendedListVolume = mclainFlatsPendedListVolume.split(",");

    var mclainFlatsSoldListVolume = document.getElementById("mclainFlatsSoldListVolume").innerHTML;
    mclainFlatsSoldListVolume = mclainFlatsSoldListVolume.split(",");

    var mclainFlatsSoldSaleVolume = document.getElementById("mclainFlatsSoldSaleVolume").innerHTML;
    mclainFlatsSoldSaleVolume = mclainFlatsSoldSaleVolume.split(",");

    var snowmassVillageNewListings = document.getElementById("snowmassVillageNewListings").innerHTML;

    snowmassVillageNewListings = snowmassVillageNewListings.split(",");

    var snowmassVillagePendedListings = document.getElementById("snowmassVillagePendedListings").innerHTML;

    snowmassVillagePendedListings = snowmassVillagePendedListings.split(",");


    var snowmassVillageSoldListings = document.getElementById("snowmassVillageSoldListings").innerHTML;

    snowmassVillageSoldListings = snowmassVillageSoldListings.split(",");


    var snowmassVillageActiveListings = document.getElementById("snowmassVillageActiveListings").innerHTML;

    snowmassVillageActiveListings = snowmassVillageActiveListings.split(",");

    var snowmassVillageActiveListingsDate = document.getElementById("snowmassVillageActiveListings-dates").innerHTML;

    snowmassVillageActiveListingsDate = snowmassVillageActiveListingsDate.split(",");

    var snowmassVillageAbsorbtion = document.getElementById("snowmassVillageAbsorbtion").innerHTML;

    snowmassVillageAbsorbtion = snowmassVillageAbsorbtion.split(",");

    var snowmassVillageActiveAvgPrice = document.getElementById("snowmassVillageActiveAvgPrice").innerHTML;
    snowmassVillageActiveAvgPrice = snowmassVillageActiveAvgPrice.split(",");
    snowmassVillageActiveAvgPrice = Number(snowmassVillageActiveAvgPrice[0]).toLocaleString();


    var snowmassVillageNewAvgPrice = document.getElementById("snowmassVillageNewAvgPrice").innerHTML;

    snowmassVillageNewAvgPrice = snowmassVillageNewAvgPrice.split(",");
    snowmassVillageNewAvgPrice = Number(snowmassVillageNewAvgPrice[0]).toLocaleString();

    var snowmassVillagePendedAvgPrice = document.getElementById("snowmassVillagePendedAvgPrice").innerHTML;

    snowmassVillagePendedAvgPrice = snowmassVillagePendedAvgPrice.split(",");
    snowmassVillagePendedAvgPrice = Number(snowmassVillagePendedAvgPrice[0]).toLocaleString();

    var snowmassVillageSoldAvgPrice = document.getElementById("snowmassVillageSoldAvgPrice").innerHTML;

    snowmassVillageSoldAvgPrice = snowmassVillageSoldAvgPrice.split(",");
    snowmassVillageSoldAvgPrice = Number(snowmassVillageSoldAvgPrice[0]).toLocaleString();

    var snowmassVillageSoldAvgSoldPrice = document.getElementById("snowmassVillageSoldAvgSoldPrice").innerHTML;

    snowmassVillageSoldAvgSoldPrice = snowmassVillageSoldAvgSoldPrice.split(",");
    snowmassVillageSoldAvgSoldPrice = Number(snowmassVillageSoldAvgSoldPrice[0]).toLocaleString();

    var snowmassVillageActiveMedianPrice = document.getElementById("snowmassVillageActiveMedianPrice").innerHTML;
    snowmassVillageActiveMedianPrice = snowmassVillageActiveMedianPrice.split(",");
    snowmassVillageActiveMedianPrice = Number(snowmassVillageActiveMedianPrice[0]).toLocaleString();

    var snowmassVillageNewMedianPrice = document.getElementById("snowmassVillageNewMedianPrice").innerHTML;

    snowmassVillageNewMedianPrice = snowmassVillageNewMedianPrice.split(",");
    snowmassVillageNewMedianPrice = Number(snowmassVillageNewMedianPrice[0]).toLocaleString();

    var snowmassVillagePendedMedianPrice = document.getElementById("snowmassVillagePendedMedianPrice").innerHTML;

    snowmassVillagePendedMedianPrice = snowmassVillagePendedMedianPrice.split(",");
    snowmassVillagePendedMedianPrice = Number(snowmassVillagePendedMedianPrice[0]).toLocaleString();

    var snowmassVillageSoldMedianPrice = document.getElementById("snowmassVillageSoldMedianPrice").innerHTML;

    snowmassVillageSoldMedianPrice = snowmassVillageSoldMedianPrice.split(",");
    snowmassVillageSoldMedianPrice = Number(snowmassVillageSoldMedianPrice[0]).toLocaleString();


    var snowmassVillageSoldMedianSoldPrice = document.getElementById("snowmassVillageSoldMedianSoldPrice").innerHTML;

    snowmassVillageSoldMedianSoldPrice = snowmassVillageSoldMedianSoldPrice.split(",");
    snowmassVillageSoldMedianSoldPrice = Number(snowmassVillageSoldMedianSoldPrice[0]).toLocaleString();

    /*  var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

      smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");

      */

    var snowmassVillageSaleToOriginalListPriceRatio = document.getElementById("snowmassVillageSaleToOriginalListPriceRatio").innerHTML;

    snowmassVillageSaleToOriginalListPriceRatio = snowmassVillageSaleToOriginalListPriceRatio.split(",");

    var snowmassVillageSaleToListPriceRatio = document.getElementById("snowmassVillageSaleToListPriceRatio").innerHTML;

    snowmassVillageSaleToListPriceRatio = snowmassVillageSaleToListPriceRatio.split(",");

    var snowmassVillageAverageDom = document.getElementById("snowmassVillageAverageDom").innerHTML;
    snowmassVillageAverageDom = snowmassVillageAverageDom.split(",");

    var snowmassVillageAverageCdom = document.getElementById("snowmassVillageAverageCdom").innerHTML;
    snowmassVillageAverageCdom = snowmassVillageAverageCdom.split(",");


    var snowmassVillageActiveListVolume = document.getElementById("snowmassVillageActiveListVolume").innerHTML;
    snowmassVillageActiveListVolume = snowmassVillageActiveListVolume.split(",");

    var snowmassVillageNewListVolume = document.getElementById("snowmassVillageNewListVolume").innerHTML;
    snowmassVillageNewListVolume = snowmassVillageNewListVolume.split(",");

    var snowmassVillagePendedListVolume = document.getElementById("snowmassVillagePendedListVolume").innerHTML;
    snowmassVillagePendedListVolume = snowmassVillagePendedListVolume.split(",");

    var snowmassVillageSoldListVolume = document.getElementById("snowmassVillageSoldListVolume").innerHTML;
    snowmassVillageSoldListVolume = snowmassVillageSoldListVolume.split(",");

    var snowmassVillageSoldSaleVolume = document.getElementById("snowmassVillageSoldSaleVolume").innerHTML;
    snowmassVillageSoldSaleVolume = snowmassVillageSoldSaleVolume.split(",");
    var brushCreekNewListings = document.getElementById("brushCreekNewListings").innerHTML;

    brushCreekNewListings = brushCreekNewListings.split(",");

    var brushCreekPendedListings = document.getElementById("brushCreekPendedListings").innerHTML;

    brushCreekPendedListings = brushCreekPendedListings.split(",");


    var brushCreekSoldListings = document.getElementById("brushCreekSoldListings").innerHTML;

    brushCreekSoldListings = brushCreekSoldListings.split(",");


    var brushCreekActiveListings = document.getElementById("brushCreekActiveListings").innerHTML;

    brushCreekActiveListings = brushCreekActiveListings.split(",");

    var brushCreekActiveListingsDate = document.getElementById("brushCreekActiveListings-dates").innerHTML;

    brushCreekActiveListingsDate = brushCreekActiveListingsDate.split(",");

    var brushCreekAbsorbtion = document.getElementById("brushCreekAbsorbtion").innerHTML;

    brushCreekAbsorbtion = brushCreekAbsorbtion.split(",");

    var brushCreekActiveAvgPrice = document.getElementById("brushCreekActiveAvgPrice").innerHTML;
    brushCreekActiveAvgPrice = brushCreekActiveAvgPrice.split(",");
    brushCreekActiveAvgPrice = Number(brushCreekActiveAvgPrice[0]).toLocaleString();


    var brushCreekNewAvgPrice = document.getElementById("brushCreekNewAvgPrice").innerHTML;

    brushCreekNewAvgPrice = brushCreekNewAvgPrice.split(",");
    brushCreekNewAvgPrice = Number(brushCreekNewAvgPrice[0]).toLocaleString();

    var brushCreekPendedAvgPrice = document.getElementById("brushCreekPendedAvgPrice").innerHTML;

    brushCreekPendedAvgPrice = brushCreekPendedAvgPrice.split(",");
    brushCreekPendedAvgPrice = Number(brushCreekPendedAvgPrice[0]).toLocaleString();

    var brushCreekSoldAvgPrice = document.getElementById("brushCreekSoldAvgPrice").innerHTML;

    brushCreekSoldAvgPrice = brushCreekSoldAvgPrice.split(",");
    brushCreekSoldAvgPrice = Number(brushCreekSoldAvgPrice[0]).toLocaleString();

    var brushCreekSoldAvgSoldPrice = document.getElementById("brushCreekSoldAvgSoldPrice").innerHTML;

    brushCreekSoldAvgSoldPrice = brushCreekSoldAvgSoldPrice.split(",");
    brushCreekSoldAvgSoldPrice = Number(brushCreekSoldAvgSoldPrice[0]).toLocaleString();

    var brushCreekActiveMedianPrice = document.getElementById("brushCreekActiveMedianPrice").innerHTML;
    brushCreekActiveMedianPrice = brushCreekActiveMedianPrice.split(",");
    brushCreekActiveMedianPrice = Number(brushCreekActiveMedianPrice[0]).toLocaleString();

    var brushCreekNewMedianPrice = document.getElementById("brushCreekNewMedianPrice").innerHTML;

    brushCreekNewMedianPrice = brushCreekNewMedianPrice.split(",");
    brushCreekNewMedianPrice = Number(brushCreekNewMedianPrice[0]).toLocaleString();

    var brushCreekPendedMedianPrice = document.getElementById("brushCreekPendedMedianPrice").innerHTML;

    brushCreekPendedMedianPrice = brushCreekPendedMedianPrice.split(",");
    brushCreekPendedMedianPrice = Number(brushCreekPendedMedianPrice[0]).toLocaleString();

    var brushCreekSoldMedianPrice = document.getElementById("brushCreekSoldMedianPrice").innerHTML;

    brushCreekSoldMedianPrice = brushCreekSoldMedianPrice.split(",");
    brushCreekSoldMedianPrice = Number(brushCreekSoldMedianPrice[0]).toLocaleString();


    var brushCreekSoldMedianSoldPrice = document.getElementById("brushCreekSoldMedianSoldPrice").innerHTML;

    brushCreekSoldMedianSoldPrice = brushCreekSoldMedianSoldPrice.split(",");
    brushCreekSoldMedianSoldPrice = Number(brushCreekSoldMedianSoldPrice[0]).toLocaleString();

    /*  var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

      smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");

      */

    var brushCreekSaleToOriginalListPriceRatio = document.getElementById("brushCreekSaleToOriginalListPriceRatio").innerHTML;

    brushCreekSaleToOriginalListPriceRatio = brushCreekSaleToOriginalListPriceRatio.split(",");

    var brushCreekSaleToListPriceRatio = document.getElementById("brushCreekSaleToListPriceRatio").innerHTML;

    brushCreekSaleToListPriceRatio = brushCreekSaleToListPriceRatio.split(",");

    var brushCreekAverageDom = document.getElementById("brushCreekAverageDom").innerHTML;
    brushCreekAverageDom = brushCreekAverageDom.split(",");

    var brushCreekAverageCdom = document.getElementById("brushCreekAverageCdom").innerHTML;
    brushCreekAverageCdom = brushCreekAverageCdom.split(",");


    var brushCreekActiveListVolume = document.getElementById("brushCreekActiveListVolume").innerHTML;
    brushCreekActiveListVolume = brushCreekActiveListVolume.split(",");

    var brushCreekNewListVolume = document.getElementById("brushCreekNewListVolume").innerHTML;
    brushCreekNewListVolume = brushCreekNewListVolume.split(",");

    var brushCreekPendedListVolume = document.getElementById("brushCreekPendedListVolume").innerHTML;
    brushCreekPendedListVolume = brushCreekPendedListVolume.split(",");

    var brushCreekSoldListVolume = document.getElementById("brushCreekSoldListVolume").innerHTML;
    brushCreekSoldListVolume = brushCreekSoldListVolume.split(",");

    var brushCreekSoldSaleVolume = document.getElementById("brushCreekSoldSaleVolume").innerHTML;
    brushCreekSoldSaleVolume = brushCreekSoldSaleVolume.split(",");

    var woodyCreekNewListings = document.getElementById("woodyCreekNewListings").innerHTML;

    woodyCreekNewListings = woodyCreekNewListings.split(",");

    var woodyCreekPendedListings = document.getElementById("woodyCreekPendedListings").innerHTML;

    woodyCreekPendedListings = woodyCreekPendedListings.split(",");


    var woodyCreekSoldListings = document.getElementById("woodyCreekSoldListings").innerHTML;

    woodyCreekSoldListings = woodyCreekSoldListings.split(",");


    var woodyCreekActiveListings = document.getElementById("woodyCreekActiveListings").innerHTML;

    woodyCreekActiveListings = woodyCreekActiveListings.split(",");

    var woodyCreekActiveListingsDate = document.getElementById("woodyCreekActiveListings-dates").innerHTML;

    woodyCreekActiveListingsDate = woodyCreekActiveListingsDate.split(",");

    var woodyCreekAbsorbtion = document.getElementById("woodyCreekAbsorbtion").innerHTML;

    woodyCreekAbsorbtion = woodyCreekAbsorbtion.split(",");

    var woodyCreekActiveAvgPrice = document.getElementById("woodyCreekActiveAvgPrice").innerHTML;
    woodyCreekActiveAvgPrice = woodyCreekActiveAvgPrice.split(",");
    woodyCreekActiveAvgPrice = Number(woodyCreekActiveAvgPrice[0]).toLocaleString();


    var woodyCreekNewAvgPrice = document.getElementById("woodyCreekNewAvgPrice").innerHTML;

    woodyCreekNewAvgPrice = woodyCreekNewAvgPrice.split(",");
    woodyCreekNewAvgPrice = Number(woodyCreekNewAvgPrice[0]).toLocaleString();

    var woodyCreekPendedAvgPrice = document.getElementById("woodyCreekPendedAvgPrice").innerHTML;

    woodyCreekPendedAvgPrice = woodyCreekPendedAvgPrice.split(",");
    woodyCreekPendedAvgPrice = Number(woodyCreekPendedAvgPrice[0]).toLocaleString();

    var woodyCreekSoldAvgPrice = document.getElementById("woodyCreekSoldAvgPrice").innerHTML;

    woodyCreekSoldAvgPrice = woodyCreekSoldAvgPrice.split(",");
    woodyCreekSoldAvgPrice = Number(woodyCreekSoldAvgPrice[0]).toLocaleString();

    var woodyCreekSoldAvgSoldPrice = document.getElementById("woodyCreekSoldAvgSoldPrice").innerHTML;

    woodyCreekSoldAvgSoldPrice = woodyCreekSoldAvgSoldPrice.split(",");
    woodyCreekSoldAvgSoldPrice = Number(woodyCreekSoldAvgSoldPrice[0]).toLocaleString();

    var woodyCreekActiveMedianPrice = document.getElementById("woodyCreekActiveMedianPrice").innerHTML;
    woodyCreekActiveMedianPrice = woodyCreekActiveMedianPrice.split(",");
    woodyCreekActiveMedianPrice = Number(woodyCreekActiveMedianPrice[0]).toLocaleString();

    var woodyCreekNewMedianPrice = document.getElementById("woodyCreekNewMedianPrice").innerHTML;

    woodyCreekNewMedianPrice = woodyCreekNewMedianPrice.split(",");
    woodyCreekNewMedianPrice = Number(woodyCreekNewMedianPrice[0]).toLocaleString();

    var woodyCreekPendedMedianPrice = document.getElementById("woodyCreekPendedMedianPrice").innerHTML;

    woodyCreekPendedMedianPrice = woodyCreekPendedMedianPrice.split(",");
    woodyCreekPendedMedianPrice = Number(woodyCreekPendedMedianPrice[0]).toLocaleString();

    var woodyCreekSoldMedianPrice = document.getElementById("woodyCreekSoldMedianPrice").innerHTML;

    woodyCreekSoldMedianPrice = woodyCreekSoldMedianPrice.split(",");
    woodyCreekSoldMedianPrice = Number(woodyCreekSoldMedianPrice[0]).toLocaleString();


    var woodyCreekSoldMedianSoldPrice = document.getElementById("woodyCreekSoldMedianSoldPrice").innerHTML;

    woodyCreekSoldMedianSoldPrice = woodyCreekSoldMedianSoldPrice.split(",");
    woodyCreekSoldMedianSoldPrice = Number(woodyCreekSoldMedianSoldPrice[0]).toLocaleString();

    /*  var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

      smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");

      */

    var woodyCreekSaleToOriginalListPriceRatio = document.getElementById("woodyCreekSaleToOriginalListPriceRatio").innerHTML;

    woodyCreekSaleToOriginalListPriceRatio = woodyCreekSaleToOriginalListPriceRatio.split(",");

    var woodyCreekSaleToListPriceRatio = document.getElementById("woodyCreekSaleToListPriceRatio").innerHTML;

    woodyCreekSaleToListPriceRatio = woodyCreekSaleToListPriceRatio.split(",");

    var woodyCreekAverageDom = document.getElementById("woodyCreekAverageDom").innerHTML;
    woodyCreekAverageDom = woodyCreekAverageDom.split(",");

    var woodyCreekAverageCdom = document.getElementById("woodyCreekAverageCdom").innerHTML;
    woodyCreekAverageCdom = woodyCreekAverageCdom.split(",");


    var woodyCreekActiveListVolume = document.getElementById("woodyCreekActiveListVolume").innerHTML;
    woodyCreekActiveListVolume = woodyCreekActiveListVolume.split(",");

    var woodyCreekNewListVolume = document.getElementById("woodyCreekNewListVolume").innerHTML;
    woodyCreekNewListVolume = woodyCreekNewListVolume.split(",");

    var woodyCreekPendedListVolume = document.getElementById("woodyCreekPendedListVolume").innerHTML;
    woodyCreekPendedListVolume = woodyCreekPendedListVolume.split(",");

    var woodyCreekSoldListVolume = document.getElementById("woodyCreekSoldListVolume").innerHTML;
    woodyCreekSoldListVolume = woodyCreekSoldListVolume.split(",");

    var woodyCreekSoldSaleVolume = document.getElementById("woodyCreekSoldSaleVolume").innerHTML;
    woodyCreekSoldSaleVolume = woodyCreekSoldSaleVolume.split(",");

    var oldSnowmassNewListings = document.getElementById("oldSnowmassNewListings").innerHTML;

    oldSnowmassNewListings = oldSnowmassNewListings.split(",");

    var oldSnowmassPendedListings = document.getElementById("oldSnowmassPendedListings").innerHTML;

    oldSnowmassPendedListings = oldSnowmassPendedListings.split(",");


    var oldSnowmassSoldListings = document.getElementById("oldSnowmassSoldListings").innerHTML;

    oldSnowmassSoldListings = oldSnowmassSoldListings.split(",");


    var oldSnowmassActiveListings = document.getElementById("oldSnowmassActiveListings").innerHTML;

    oldSnowmassActiveListings = oldSnowmassActiveListings.split(",");

    var oldSnowmassActiveListingsDate = document.getElementById("oldSnowmassActiveListings-dates").innerHTML;

    oldSnowmassActiveListingsDate = oldSnowmassActiveListingsDate.split(",");

    var oldSnowmassAbsorbtion = document.getElementById("oldSnowmassAbsorbtion").innerHTML;

    oldSnowmassAbsorbtion = oldSnowmassAbsorbtion.split(",");

    var oldSnowmassActiveAvgPrice = document.getElementById("oldSnowmassActiveAvgPrice").innerHTML;
    oldSnowmassActiveAvgPrice = oldSnowmassActiveAvgPrice.split(",");
    oldSnowmassActiveAvgPrice = Number(oldSnowmassActiveAvgPrice[0]).toLocaleString();


    var oldSnowmassNewAvgPrice = document.getElementById("oldSnowmassNewAvgPrice").innerHTML;

    oldSnowmassNewAvgPrice = oldSnowmassNewAvgPrice.split(",");
    oldSnowmassNewAvgPrice = Number(oldSnowmassNewAvgPrice[0]).toLocaleString();

    var oldSnowmassPendedAvgPrice = document.getElementById("oldSnowmassPendedAvgPrice").innerHTML;

    oldSnowmassPendedAvgPrice = oldSnowmassPendedAvgPrice.split(",");
    oldSnowmassPendedAvgPrice = Number(oldSnowmassPendedAvgPrice[0]).toLocaleString();

    var oldSnowmassSoldAvgPrice = document.getElementById("oldSnowmassSoldAvgPrice").innerHTML;

    oldSnowmassSoldAvgPrice = oldSnowmassSoldAvgPrice.split(",");
    oldSnowmassSoldAvgPrice = Number(oldSnowmassSoldAvgPrice[0]).toLocaleString();

    var oldSnowmassSoldAvgSoldPrice = document.getElementById("oldSnowmassSoldAvgSoldPrice").innerHTML;

    oldSnowmassSoldAvgSoldPrice = oldSnowmassSoldAvgSoldPrice.split(",");
    oldSnowmassSoldAvgSoldPrice = Number(oldSnowmassSoldAvgSoldPrice[0]).toLocaleString();

    var oldSnowmassActiveMedianPrice = document.getElementById("oldSnowmassActiveMedianPrice").innerHTML;
    oldSnowmassActiveMedianPrice = oldSnowmassActiveMedianPrice.split(",");
    oldSnowmassActiveMedianPrice = Number(oldSnowmassActiveMedianPrice[0]).toLocaleString();

    var oldSnowmassNewMedianPrice = document.getElementById("oldSnowmassNewMedianPrice").innerHTML;

    oldSnowmassNewMedianPrice = oldSnowmassNewMedianPrice.split(",");
    oldSnowmassNewMedianPrice = Number(oldSnowmassNewMedianPrice[0]).toLocaleString();

    var oldSnowmassPendedMedianPrice = document.getElementById("oldSnowmassPendedMedianPrice").innerHTML;

    oldSnowmassPendedMedianPrice = oldSnowmassPendedMedianPrice.split(",");
    oldSnowmassPendedMedianPrice = Number(oldSnowmassPendedMedianPrice[0]).toLocaleString();

    var oldSnowmassSoldMedianPrice = document.getElementById("oldSnowmassSoldMedianPrice").innerHTML;

    oldSnowmassSoldMedianPrice = oldSnowmassSoldMedianPrice.split(",");
    oldSnowmassSoldMedianPrice = Number(oldSnowmassSoldMedianPrice[0]).toLocaleString();


    var oldSnowmassSoldMedianSoldPrice = document.getElementById("oldSnowmassSoldMedianSoldPrice").innerHTML;

    oldSnowmassSoldMedianSoldPrice = oldSnowmassSoldMedianSoldPrice.split(",");
    oldSnowmassSoldMedianSoldPrice = Number(oldSnowmassSoldMedianSoldPrice[0]).toLocaleString();

    /*  var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

      smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");

      */

    var oldSnowmassSaleToOriginalListPriceRatio = document.getElementById("oldSnowmassSaleToOriginalListPriceRatio").innerHTML;

    oldSnowmassSaleToOriginalListPriceRatio = oldSnowmassSaleToOriginalListPriceRatio.split(",");

    var oldSnowmassSaleToListPriceRatio = document.getElementById("oldSnowmassSaleToListPriceRatio").innerHTML;

    oldSnowmassSaleToListPriceRatio = oldSnowmassSaleToListPriceRatio.split(",");

    var oldSnowmassAverageDom = document.getElementById("oldSnowmassAverageDom").innerHTML;
    oldSnowmassAverageDom = oldSnowmassAverageDom.split(",");

    var oldSnowmassAverageCdom = document.getElementById("oldSnowmassAverageCdom").innerHTML;
    oldSnowmassAverageCdom = oldSnowmassAverageCdom.split(",");


    var oldSnowmassActiveListVolume = document.getElementById("oldSnowmassActiveListVolume").innerHTML;
    oldSnowmassActiveListVolume = oldSnowmassActiveListVolume.split(",");

    var oldSnowmassNewListVolume = document.getElementById("oldSnowmassNewListVolume").innerHTML;
    oldSnowmassNewListVolume = oldSnowmassNewListVolume.split(",");

    var oldSnowmassPendedListVolume = document.getElementById("oldSnowmassPendedListVolume").innerHTML;
    oldSnowmassPendedListVolume = oldSnowmassPendedListVolume.split(",");

    var oldSnowmassSoldListVolume = document.getElementById("oldSnowmassSoldListVolume").innerHTML;
    oldSnowmassSoldListVolume = oldSnowmassSoldListVolume.split(",");

    var oldSnowmassSoldSaleVolume = document.getElementById("oldSnowmassSoldSaleVolume").innerHTML;
    oldSnowmassSoldSaleVolume = oldSnowmassSoldSaleVolume.split(",");

    var basaltProperNewListings = document.getElementById("basaltProperNewListings").innerHTML;

    basaltProperNewListings = basaltProperNewListings.split(",");

    var basaltProperPendedListings = document.getElementById("basaltProperPendedListings").innerHTML;

    basaltProperPendedListings = basaltProperPendedListings.split(",");


    var basaltProperSoldListings = document.getElementById("basaltProperSoldListings").innerHTML;

    basaltProperSoldListings = basaltProperSoldListings.split(",");


    var basaltProperActiveListings = document.getElementById("basaltProperActiveListings").innerHTML;

    basaltProperActiveListings = basaltProperActiveListings.split(",");

    var basaltProperActiveListingsDate = document.getElementById("basaltProperActiveListings-dates").innerHTML;

    basaltProperActiveListingsDate = basaltProperActiveListingsDate.split(",");

    var basaltProperAbsorbtion = document.getElementById("basaltProperAbsorbtion").innerHTML;

    basaltProperAbsorbtion = basaltProperAbsorbtion.split(",");

    var basaltProperActiveAvgPrice = document.getElementById("basaltProperActiveAvgPrice").innerHTML;
    basaltProperActiveAvgPrice = basaltProperActiveAvgPrice.split(",");
    basaltProperActiveAvgPrice = Number(basaltProperActiveAvgPrice[0]).toLocaleString();


    var basaltProperNewAvgPrice = document.getElementById("basaltProperNewAvgPrice").innerHTML;

    basaltProperNewAvgPrice = basaltProperNewAvgPrice.split(",");
    basaltProperNewAvgPrice = Number(basaltProperNewAvgPrice[0]).toLocaleString();

    var basaltProperPendedAvgPrice = document.getElementById("basaltProperPendedAvgPrice").innerHTML;

    basaltProperPendedAvgPrice = basaltProperPendedAvgPrice.split(",");
    basaltProperPendedAvgPrice = Number(basaltProperPendedAvgPrice[0]).toLocaleString();

    var basaltProperSoldAvgPrice = document.getElementById("basaltProperSoldAvgPrice").innerHTML;

    basaltProperSoldAvgPrice = basaltProperSoldAvgPrice.split(",");
    basaltProperSoldAvgPrice = Number(basaltProperSoldAvgPrice[0]).toLocaleString();

    var basaltProperSoldAvgSoldPrice = document.getElementById("basaltProperSoldAvgSoldPrice").innerHTML;

    basaltProperSoldAvgSoldPrice = basaltProperSoldAvgSoldPrice.split(",");
    basaltProperSoldAvgSoldPrice = Number(basaltProperSoldAvgSoldPrice[0]).toLocaleString();

    var basaltProperActiveMedianPrice = document.getElementById("basaltProperActiveMedianPrice").innerHTML;
    basaltProperActiveMedianPrice = basaltProperActiveMedianPrice.split(",");
    basaltProperActiveMedianPrice = Number(basaltProperActiveMedianPrice[0]).toLocaleString();

    var basaltProperNewMedianPrice = document.getElementById("basaltProperNewMedianPrice").innerHTML;

    basaltProperNewMedianPrice = basaltProperNewMedianPrice.split(",");
    basaltProperNewMedianPrice = Number(basaltProperNewMedianPrice[0]).toLocaleString();

    var basaltProperPendedMedianPrice = document.getElementById("basaltProperPendedMedianPrice").innerHTML;

    basaltProperPendedMedianPrice = basaltProperPendedMedianPrice.split(",");
    basaltProperPendedMedianPrice = Number(basaltProperPendedMedianPrice[0]).toLocaleString();

    var basaltProperSoldMedianPrice = document.getElementById("basaltProperSoldMedianPrice").innerHTML;

    basaltProperSoldMedianPrice = basaltProperSoldMedianPrice.split(",");
    basaltProperSoldMedianPrice = Number(basaltProperSoldMedianPrice[0]).toLocaleString();


    var basaltProperSoldMedianSoldPrice = document.getElementById("basaltProperSoldMedianSoldPrice").innerHTML;

    basaltProperSoldMedianSoldPrice = basaltProperSoldMedianSoldPrice.split(",");
    basaltProperSoldMedianSoldPrice = Number(basaltProperSoldMedianSoldPrice[0]).toLocaleString();

    /*  var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

      smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");

      */

    var basaltProperSaleToOriginalListPriceRatio = document.getElementById("basaltProperSaleToOriginalListPriceRatio").innerHTML;

    basaltProperSaleToOriginalListPriceRatio = basaltProperSaleToOriginalListPriceRatio.split(",");

    var basaltProperSaleToListPriceRatio = document.getElementById("basaltProperSaleToListPriceRatio").innerHTML;

    basaltProperSaleToListPriceRatio = basaltProperSaleToListPriceRatio.split(",");

    var basaltProperAverageDom = document.getElementById("basaltProperAverageDom").innerHTML;
    basaltProperAverageDom = basaltProperAverageDom.split(",");

    var basaltProperAverageCdom = document.getElementById("basaltProperAverageCdom").innerHTML;
    basaltProperAverageCdom = basaltProperAverageCdom.split(",");


    var basaltProperActiveListVolume = document.getElementById("basaltProperActiveListVolume").innerHTML;
    basaltProperActiveListVolume = basaltProperActiveListVolume.split(",");

    var basaltProperNewListVolume = document.getElementById("basaltProperNewListVolume").innerHTML;
    basaltProperNewListVolume = basaltProperNewListVolume.split(",");

    var basaltProperPendedListVolume = document.getElementById("basaltProperPendedListVolume").innerHTML;
    basaltProperPendedListVolume = basaltProperPendedListVolume.split(",");

    var basaltProperSoldListVolume = document.getElementById("basaltProperSoldListVolume").innerHTML;
    basaltProperSoldListVolume = basaltProperSoldListVolume.split(",");

    var basaltProperSoldSaleVolume = document.getElementById("basaltProperSoldSaleVolume").innerHTML;
    basaltProperSoldSaleVolume = basaltProperSoldSaleVolume.split(",");



    var elJebelNewListings = document.getElementById("elJebelNewListings").innerHTML;

    elJebelNewListings = elJebelNewListings.split(",");

    var elJebelPendedListings = document.getElementById("elJebelPendedListings").innerHTML;

    elJebelPendedListings = elJebelPendedListings.split(",");


    var elJebelSoldListings = document.getElementById("elJebelSoldListings").innerHTML;

    elJebelSoldListings = elJebelSoldListings.split(",");


    var elJebelActiveListings = document.getElementById("elJebelActiveListings").innerHTML;

    elJebelActiveListings = elJebelActiveListings.split(",");

    var elJebelActiveListingsDate = document.getElementById("elJebelActiveListings-dates").innerHTML;

    elJebelActiveListingsDate = elJebelActiveListingsDate.split(",");

    var elJebelAbsorbtion = document.getElementById("elJebelAbsorbtion").innerHTML;

    elJebelAbsorbtion = elJebelAbsorbtion.split(",");

    var elJebelActiveAvgPrice = document.getElementById("elJebelActiveAvgPrice").innerHTML;
    elJebelActiveAvgPrice = elJebelActiveAvgPrice.split(",");
    elJebelActiveAvgPrice = Number(elJebelActiveAvgPrice[0]).toLocaleString();


    var elJebelNewAvgPrice = document.getElementById("elJebelNewAvgPrice").innerHTML;

    elJebelNewAvgPrice = elJebelNewAvgPrice.split(",");
    elJebelNewAvgPrice = Number(elJebelNewAvgPrice[0]).toLocaleString();

    var elJebelPendedAvgPrice = document.getElementById("elJebelPendedAvgPrice").innerHTML;

    elJebelPendedAvgPrice = elJebelPendedAvgPrice.split(",");
    elJebelPendedAvgPrice = Number(elJebelPendedAvgPrice[0]).toLocaleString();

    var elJebelSoldAvgPrice = document.getElementById("elJebelSoldAvgPrice").innerHTML;

    elJebelSoldAvgPrice = elJebelSoldAvgPrice.split(",");
    elJebelSoldAvgPrice = Number(elJebelSoldAvgPrice[0]).toLocaleString();

    var elJebelSoldAvgSoldPrice = document.getElementById("elJebelSoldAvgSoldPrice").innerHTML;

    elJebelSoldAvgSoldPrice = elJebelSoldAvgSoldPrice.split(",");
    elJebelSoldAvgSoldPrice = Number(elJebelSoldAvgSoldPrice[0]).toLocaleString();

    var elJebelActiveMedianPrice = document.getElementById("elJebelActiveMedianPrice").innerHTML;
    elJebelActiveMedianPrice = elJebelActiveMedianPrice.split(",");
    elJebelActiveMedianPrice = Number(elJebelActiveMedianPrice[0]).toLocaleString();

    var elJebelNewMedianPrice = document.getElementById("elJebelNewMedianPrice").innerHTML;

    elJebelNewMedianPrice = elJebelNewMedianPrice.split(",");
    elJebelNewMedianPrice = Number(elJebelNewMedianPrice[0]).toLocaleString();

    var elJebelPendedMedianPrice = document.getElementById("elJebelPendedMedianPrice").innerHTML;

    elJebelPendedMedianPrice = elJebelPendedMedianPrice.split(",");
    elJebelPendedMedianPrice = Number(elJebelPendedMedianPrice[0]).toLocaleString();

    var elJebelSoldMedianPrice = document.getElementById("elJebelSoldMedianPrice").innerHTML;

    elJebelSoldMedianPrice = elJebelSoldMedianPrice.split(",");
    elJebelSoldMedianPrice = Number(elJebelSoldMedianPrice[0]).toLocaleString();


    var elJebelSoldMedianSoldPrice = document.getElementById("elJebelSoldMedianSoldPrice").innerHTML;

    elJebelSoldMedianSoldPrice = elJebelSoldMedianSoldPrice.split(",");
    elJebelSoldMedianSoldPrice = Number(elJebelSoldMedianSoldPrice[0]).toLocaleString();

    /*  var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

      smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");

      */

    var elJebelSaleToOriginalListPriceRatio = document.getElementById("elJebelSaleToOriginalListPriceRatio").innerHTML;

    elJebelSaleToOriginalListPriceRatio = elJebelSaleToOriginalListPriceRatio.split(",");

    var elJebelSaleToListPriceRatio = document.getElementById("elJebelSaleToListPriceRatio").innerHTML;

    elJebelSaleToListPriceRatio = elJebelSaleToListPriceRatio.split(",");

    var elJebelAverageDom = document.getElementById("elJebelAverageDom").innerHTML;
    elJebelAverageDom = elJebelAverageDom.split(",");

    var elJebelAverageCdom = document.getElementById("elJebelAverageCdom").innerHTML;
    elJebelAverageCdom = elJebelAverageCdom.split(",");


    var elJebelActiveListVolume = document.getElementById("elJebelActiveListVolume").innerHTML;
    elJebelActiveListVolume = elJebelActiveListVolume.split(",");

    var elJebelNewListVolume = document.getElementById("elJebelNewListVolume").innerHTML;
    elJebelNewListVolume = elJebelNewListVolume.split(",");

    var elJebelPendedListVolume = document.getElementById("elJebelPendedListVolume").innerHTML;
    elJebelPendedListVolume = elJebelPendedListVolume.split(",");

    var elJebelSoldListVolume = document.getElementById("elJebelSoldListVolume").innerHTML;
    elJebelSoldListVolume = elJebelSoldListVolume.split(",");

    var elJebelSoldSaleVolume = document.getElementById("elJebelSoldSaleVolume").innerHTML;
    elJebelSoldSaleVolume = elJebelSoldSaleVolume.split(",");


    var carbondaleProperNewListings = document.getElementById("carbondaleProperNewListings").innerHTML;

    carbondaleProperNewListings = carbondaleProperNewListings.split(",");

    var carbondaleProperPendedListings = document.getElementById("carbondaleProperPendedListings").innerHTML;

    carbondaleProperPendedListings = carbondaleProperPendedListings.split(",");


    var carbondaleProperSoldListings = document.getElementById("carbondaleProperSoldListings").innerHTML;

    carbondaleProperSoldListings = carbondaleProperSoldListings.split(",");


    var carbondaleProperActiveListings = document.getElementById("carbondaleProperActiveListings").innerHTML;

    carbondaleProperActiveListings = carbondaleProperActiveListings.split(",");

    var carbondaleProperActiveListingsDate = document.getElementById("carbondaleProperActiveListings-dates").innerHTML;

    carbondaleProperActiveListingsDate = carbondaleProperActiveListingsDate.split(",");

    var carbondaleProperAbsorbtion = document.getElementById("carbondaleProperAbsorbtion").innerHTML;

    carbondaleProperAbsorbtion = carbondaleProperAbsorbtion.split(",");

    var carbondaleProperActiveAvgPrice = document.getElementById("carbondaleProperActiveAvgPrice").innerHTML;
    carbondaleProperActiveAvgPrice = carbondaleProperActiveAvgPrice.split(",");
    carbondaleProperActiveAvgPrice = Number(carbondaleProperActiveAvgPrice[0]).toLocaleString();


    var carbondaleProperNewAvgPrice = document.getElementById("carbondaleProperNewAvgPrice").innerHTML;

    carbondaleProperNewAvgPrice = carbondaleProperNewAvgPrice.split(",");
    carbondaleProperNewAvgPrice = Number(carbondaleProperNewAvgPrice[0]).toLocaleString();

    var carbondaleProperPendedAvgPrice = document.getElementById("carbondaleProperPendedAvgPrice").innerHTML;

    carbondaleProperPendedAvgPrice = carbondaleProperPendedAvgPrice.split(",");
    carbondaleProperPendedAvgPrice = Number(carbondaleProperPendedAvgPrice[0]).toLocaleString();

    var carbondaleProperSoldAvgPrice = document.getElementById("carbondaleProperSoldAvgPrice").innerHTML;

    carbondaleProperSoldAvgPrice = carbondaleProperSoldAvgPrice.split(",");
    carbondaleProperSoldAvgPrice = Number(carbondaleProperSoldAvgPrice[0]).toLocaleString();

    var carbondaleProperSoldAvgSoldPrice = document.getElementById("carbondaleProperSoldAvgSoldPrice").innerHTML;

    carbondaleProperSoldAvgSoldPrice = carbondaleProperSoldAvgSoldPrice.split(",");
    carbondaleProperSoldAvgSoldPrice = Number(carbondaleProperSoldAvgSoldPrice[0]).toLocaleString();

    var carbondaleProperActiveMedianPrice = document.getElementById("carbondaleProperActiveMedianPrice").innerHTML;
    carbondaleProperActiveMedianPrice = carbondaleProperActiveMedianPrice.split(",");
    carbondaleProperActiveMedianPrice = Number(carbondaleProperActiveMedianPrice[0]).toLocaleString();

    var carbondaleProperNewMedianPrice = document.getElementById("carbondaleProperNewMedianPrice").innerHTML;

    carbondaleProperNewMedianPrice = carbondaleProperNewMedianPrice.split(",");
    carbondaleProperNewMedianPrice = Number(carbondaleProperNewMedianPrice[0]).toLocaleString();

    var carbondaleProperPendedMedianPrice = document.getElementById("carbondaleProperPendedMedianPrice").innerHTML;

    carbondaleProperPendedMedianPrice = carbondaleProperPendedMedianPrice.split(",");
    carbondaleProperPendedMedianPrice = Number(carbondaleProperPendedMedianPrice[0]).toLocaleString();

    var carbondaleProperSoldMedianPrice = document.getElementById("carbondaleProperSoldMedianPrice").innerHTML;

    carbondaleProperSoldMedianPrice = carbondaleProperSoldMedianPrice.split(",");
    carbondaleProperSoldMedianPrice = Number(carbondaleProperSoldMedianPrice[0]).toLocaleString();


    var carbondaleProperSoldMedianSoldPrice = document.getElementById("carbondaleProperSoldMedianSoldPrice").innerHTML;

    carbondaleProperSoldMedianSoldPrice = carbondaleProperSoldMedianSoldPrice.split(",");
    carbondaleProperSoldMedianSoldPrice = Number(carbondaleProperSoldMedianSoldPrice[0]).toLocaleString();

    /*  var smugglerSoldMedianSoldPrice = document.getElementById("smugglerSoldMedianSoldPrice").innerHTML;

      smugglerSoldMedianSoldPrice = smugglerSoldMedianSoldPrice.split(",");

      */

    var carbondaleProperSaleToOriginalListPriceRatio = document.getElementById("carbondaleProperSaleToOriginalListPriceRatio").innerHTML;

    carbondaleProperSaleToOriginalListPriceRatio = carbondaleProperSaleToOriginalListPriceRatio.split(",");

    var carbondaleProperSaleToListPriceRatio = document.getElementById("carbondaleProperSaleToListPriceRatio").innerHTML;

    carbondaleProperSaleToListPriceRatio = carbondaleProperSaleToListPriceRatio.split(",");

    var carbondaleProperAverageDom = document.getElementById("carbondaleProperAverageDom").innerHTML;
    carbondaleProperAverageDom = carbondaleProperAverageDom.split(",");

    var carbondaleProperAverageCdom = document.getElementById("carbondaleProperAverageCdom").innerHTML;
    carbondaleProperAverageCdom = carbondaleProperAverageCdom.split(",");


    var carbondaleProperActiveListVolume = document.getElementById("carbondaleProperActiveListVolume").innerHTML;
    carbondaleProperActiveListVolume = carbondaleProperActiveListVolume.split(",");

    var carbondaleProperNewListVolume = document.getElementById("carbondaleProperNewListVolume").innerHTML;
    carbondaleProperNewListVolume = carbondaleProperNewListVolume.split(",");

    var carbondaleProperPendedListVolume = document.getElementById("carbondaleProperPendedListVolume").innerHTML;
    carbondaleProperPendedListVolume = carbondaleProperPendedListVolume.split(",");

    var carbondaleProperSoldListVolume = document.getElementById("carbondaleProperSoldListVolume").innerHTML;
    carbondaleProperSoldListVolume = carbondaleProperSoldListVolume.split(",");

    var carbondaleProperSoldSaleVolume = document.getElementById("carbondaleProperSoldSaleVolume").innerHTML;
    carbondaleProperSoldSaleVolume = carbondaleProperSoldSaleVolume.split(",");
    var polygons = [{
            name: "Smuggler<br>",
            dates: "<p>Date:" + smugglerActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings: " + smugglerActiveListings[0] + "<br>",
            newListings: "New Listings: " + smugglerNewListings[0] + "<br>",
            pendingListings: "Pending Listings: " + smugglerPendedListings[0] + "<br>",
            soldListings: "Sold Listings: " + smugglerSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + smugglerAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price: $" + smugglerActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price: $" + smugglerNewAvgPrice,
            PendedAvgPrice: "<br>Pended Avg Price: $" + smugglerPendedAvgPrice,
            SoldAvgPrice: "<br>Avg sold Price: $" + smugglerSoldAvgPrice,
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price: $" + smugglerSoldAvgSoldPrice,
            ActiveMedianPrice: " <br>Active Median Price: $" + smugglerActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price: $" + smugglerNewMedianPrice,
            PendedMedianPrice: "<br>PendedMedianPrice: $" + smugglerPendedMedianPrice,
            SoldMedianPrice: "<br>SoldMedianPrice: $" + smugglerSoldMedianPrice,
            SoldMedianSoldPrice: "<br>Sold Median Sold Price: $" + smugglerSoldMedianSoldPrice,
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + smugglerSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + sumgglerSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + smugglerAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + smugglerAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + smugglerActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + smugglerNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + smugglerPendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + smugglerSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + smugglerSoldSaleVolume[0],
            coordinates: [{
                lat: 39.19333,
                lng: -106.79816
            }, {
                lat: 39.19482,
                lng: -106.79781
            }, {
                lat: 39.19677,
                lng: -106.79884
            }, {
                lat: 39.19927,
                lng: -106.80311
            }, {
                lat: 39.19967,
                lng: -106.80516
            }, {
                lat: 39.19999,
                lng: -106.80722
            }, {
                lat: 39.19972,
                lng: -106.80927
            }, {
                lat: 39.19824,
                lng: -106.81321
            }, {
                lat: 39.1959,
                lng: -106.81663
            }, {
                lat: 39.1944,
                lng: -106.81632
            }, {
                lat: 39.19289,
                lng: -106.81618
            }, {
                lat: 39.18977,
                lng: -106.81171
            }, {
                lat: 39.18982,
                lng: -106.8024
            }, {
                lat: 39.19228,
                lng: -106.79869
            }, ]
        },
        {
            name: "Central Core<br>",
            dates: "<p>Date:" + centralCoreActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings:" + centralCoreActiveListings[0] + "<br>",
            newListings: "New Listings:" + centralCoreNewListings[0] + "<br>",
            pendingListings: "Pending Listings:" + centralCorePendedListings[0] + "<br>",
            soldListings: "Sold Listings:" + centralCoreSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + centralCoreAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price $" + centralCoreActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price" + centralCoreNewAvgPrice[0],
            PendedAvgPrice: "<br>Pended Avg Price" + centralCorePendedAvgPrice[0],
            SoldAvgPrice: "<br>Avg sold Price" + centralCoreSoldAvgPrice[0],
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price" + centralCoreSoldAvgSoldPrice[0],
            ActiveMedianPrice: " <br>Active Median Price $" + centralCoreActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price" + centralCoreNewMedianPrice[0],
            PendedMedianPrice: "<br>PendedMedianPrice" + centralCorePendedMedianPrice[0],
            SoldMedianPrice: "<br>SoldMedianPrice" + centralCoreSoldMedianPrice[0],
            SoldMedianSoldPrice: "<br>Sold Median Sold Price" + centralCoreSoldMedianSoldPrice[0],
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + centralCoreSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + centralCoreSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + centralCoreAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + centralCoreAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + centralCoreActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + centralCoreNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + centralCorePendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + centralCoreSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + centralCoreSoldSaleVolume[0],
            coordinates: [{
                lat: 39.18834,
                lng: -106.81163
            }, {
                lat: 39.19025,
                lng: -106.81446
            }, {
                lat: 39.19156,
                lng: -106.81873
            }, {
                lat: 39.192,
                lng: -106.82377
            }, {
                lat: 39.19051,
                lng: -106.82942
            }, {
                lat: 39.18914,
                lng: -106.82996
            }, {
                lat: 39.18763,
                lng: -106.82982
            }, {
                lat: 39.18331,
                lng: -106.82699
            }, {
                lat: 39.18184,
                lng: -106.81553
            }]
        }, {
            name: "West End<br>",
            dates: "<p>Date:" + westEndActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings:" + westEndActiveListings[0] + "<br>",
            newListings: "New Listings:" + westEndNewListings[0] + "<br>",
            pendingListings: "Pending Listings:" + westEndPendedListings[0] + "<br>",
            soldListings: "Sold Listings:" + westEndSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + westEndAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price $" + westEndActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price: $" + westEndNewAvgPrice,
            PendedAvgPrice: "<br>Pended Avg Price: $" + westEndPendedAvgPrice,
            SoldAvgPrice: "<br>Avg sold Price: $" + westEndSoldAvgPrice,
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price: $" + westEndSoldAvgSoldPrice,
            ActiveMedianPrice: " <br>Active Median Price $" + westEndActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price: $" + westEndNewMedianPrice,
            PendedMedianPrice: "<br>PendedMedianPrice: $" + westEndPendedMedianPrice,
            SoldMedianPrice: "<br>SoldMedianPrice: $" + westEndSoldMedianPrice,
            SoldMedianSoldPrice: "<br>Sold Median Sold Price: $" + westEndSoldMedianSoldPrice,
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + westEndSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + westEndSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + westEndAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + westEndAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + westEndActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + westEndNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + westEndPendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + westEndSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + westEndSoldSaleVolume[0],
            coordinates: [{
                lat: 39.202447,
                lng: -106.829973
            }, {
                lat: 39.187813,
                lng: -106.832548
            }, {
                lat: 39.185817,
                lng: -106.828428
            }, {
                lat: 39.186216,
                lng: -106.82654
            }, {
                lat: 39.193933,
                lng: -106.823794
            }, {
                lat: 39.19952,
                lng: -106.821562
            }]
        }, {
            name: "East Aspen<br>",
            dates: "<p>Date:" + eastAspenActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings:" + eastAspenActiveListings[0] + "<br>",
            newListings: "New Listings:" + eastAspenNewListings[0] + "<br>",
            pendingListings: "Pending Listings:" + eastAspenPendedListings[0] + "<br>",
            soldListings: "Sold Listings:" + eastAspenSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + eastAspenAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price $" + eastAspenActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price: $" + eastAspenNewAvgPrice,
            PendedAvgPrice: "<br>Pended Avg Price: $" + eastAspenPendedAvgPrice,
            SoldAvgPrice: "<br>Avg sold Price: $" + eastAspenSoldAvgPrice,
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price: $" + eastAspenSoldAvgSoldPrice,
            ActiveMedianPrice: " <br>Active Median Price $" + eastAspenActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price: $" + eastAspenNewMedianPrice,
            PendedMedianPrice: "<br>PendedMedianPrice: $" + eastAspenPendedMedianPrice,
            SoldMedianPrice: "<br>SoldMedianPrice: $" + eastAspenSoldMedianPrice,
            SoldMedianSoldPrice: "<br>Sold Median Sold Price: $" + eastAspenSoldMedianSoldPrice,
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + eastAspenSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + eastAspenSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + eastAspenAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + eastAspenAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + eastAspenActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + eastAspenNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + eastAspenPendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + eastAspenSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + eastAspenSoldSaleVolume[0],
            coordinates: [{
                lat: 39.188033,
                lng: -106.806871
            }, {
                lat: 39.186836,
                lng: -106.7964
            }, {
                lat: 39.177388,
                lng: -106.795198
            }, {
                lat: 39.174461,
                lng: -106.802537
            }, {
                lat: 39.179917,
                lng: -106.811463
            }]
        }, {
            name: "Red Mtn<br>",
            dates: "<p>Date:" + redMtnActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings:" + redMtnActiveListings[0] + "<br>",
            newListings: "New Listings:" + redMtnNewListings[0] + "<br>",
            pendingListings: "Pending Listings:" + redMtnPendedListings[0] + "<br>",
            soldListings: "Sold Listings:" + redMtnSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + redMtnAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price $" + redMtnActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price: $" + redMtnNewAvgPrice,
            PendedAvgPrice: "<br>Pended Avg Price: $" + redMtnPendedAvgPrice,
            SoldAvgPrice: "<br>Avg sold Price: $" + redMtnSoldAvgPrice,
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price: $" + redMtnSoldAvgSoldPrice,
            ActiveMedianPrice: " <br>Active Median Price $" + redMtnActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price: $" + redMtnNewMedianPrice,
            PendedMedianPrice: "<br>PendedMedianPrice: $" + redMtnPendedMedianPrice,
            SoldMedianPrice: "<br>SoldMedianPrice: $" + redMtnSoldMedianPrice,
            SoldMedianSoldPrice: "<br>Sold Median Sold Price: $" + redMtnSoldMedianSoldPrice,
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + redMtnSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + redMtnSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + redMtnAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + redMtnAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + redMtnActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + redMtnNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + redMtnPendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + redMtnSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + redMtnSoldSaleVolume[0],
            coordinates: [{
                lat: 39.212316,
                lng: -106.813942
            }, {
                lat: 39.210055,
                lng: -106.806217
            }, {
                lat: 39.203803,
                lng: -106.803127
            }, {
                lat: 39.198216,
                lng: -106.80656
            }, {
                lat: 39.195289,
                lng: -106.814113
            }, {
                lat: 39.196886,
                lng: -106.81995
            }, {
                lat: 39.20101,
                lng: -106.824241
            }, {
                lat: 39.204468,
                lng: -106.824756
            }, {
                lat: 39.209523,
                lng: -106.822525
            }]
        }, {
            name: "WestAspen<br>",
            dates: "<p>Date:" + westAspenActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings:" + westAspenActiveListings[0] + "<br>",
            newListings: "New Listings:" + westAspenNewListings[0] + "<br>",
            pendingListings: "Pending Listings:" + westAspenPendedListings[0] + "<br>",
            soldListings: "Sold Listings:" + westAspenSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + westAspenAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price $" + westAspenActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price: $" + westAspenNewAvgPrice,
            PendedAvgPrice: "<br>Pended Avg Price: $" + westAspenPendedAvgPrice,
            SoldAvgPrice: "<br>Avg sold Price: $" + westAspenSoldAvgPrice,
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price: $" + westAspenSoldAvgSoldPrice,
            ActiveMedianPrice: " <br>Active Median Price $" + westAspenActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price: $" + westAspenNewMedianPrice,
            PendedMedianPrice: "<br>PendedMedianPrice: $" + westAspenPendedMedianPrice,
            SoldMedianPrice: "<br>SoldMedianPrice: $" + westAspenSoldMedianPrice,
            SoldMedianSoldPrice: "<br>Sold Median Sold Price: $" + westAspenSoldMedianSoldPrice,
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + westAspenSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + westAspenSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + westAspenAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + westAspenAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + westAspenActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + westAspenNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + westAspenPendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + westAspenSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + westAspenSoldSaleVolume[0],
            coordinates: [{
                lat: 39.213052,
                lng: -106.854218
            }, {
                lat: 39.20986,
                lng: -106.868637
            }, {
                lat: 39.19842,
                lng: -106.876877
            }, {
                lat: 39.186979,
                lng: -106.874131
            }, {
                lat: 39.180326,
                lng: -106.865891
            }, {
                lat: 39.178463,
                lng: -106.853875
            }, {
                lat: 39.182189,
                lng: -106.840142
            }, {
                lat: 39.189906,
                lng: -106.832589
            }, {
                lat: 39.200549,
                lng: -106.832589
            }, {
                lat: 39.208264,
                lng: -106.838768
            }, {
                lat: 39.213584,
                lng: -106.851815
            }, {
                lat: 39.211456,
                lng: -106.861428
            }]
        }, {
            name: "mclainFlats<br>",
            dates: "<p>Date:" + mclainFlatsActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings:" + mclainFlatsActiveListings[0] + "<br>",
            newListings: "New Listings:" + mclainFlatsNewListings[0] + "<br>",
            pendingListings: "Pending Listings:" + mclainFlatsPendedListings[0] + "<br>",
            soldListings: "Sold Listings:" + mclainFlatsSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + mclainFlatsAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price $" + mclainFlatsActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price: $" + mclainFlatsNewAvgPrice,
            PendedAvgPrice: "<br>Pended Avg Price: $" + mclainFlatsPendedAvgPrice,
            SoldAvgPrice: "<br>Avg sold Price: $" + mclainFlatsSoldAvgPrice,
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price: $" + mclainFlatsSoldAvgSoldPrice,
            ActiveMedianPrice: " <br>Active Median Price $" + mclainFlatsActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price: $" + mclainFlatsNewMedianPrice,
            PendedMedianPrice: "<br>PendedMedianPrice: $" + mclainFlatsPendedMedianPrice,
            SoldMedianPrice: "<br>SoldMedianPrice: $" + mclainFlatsSoldMedianPrice,
            SoldMedianSoldPrice: "<br>Sold Median Sold Price: $" + mclainFlatsSoldMedianSoldPrice,
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + mclainFlatsSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + mclainFlatsSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + mclainFlatsAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + mclainFlatsAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + mclainFlatsActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + mclainFlatsNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + mclainFlatsPendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + mclainFlatsSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + mclainFlatsSoldSaleVolume[0],
            coordinates: [{
                lat: 39.212004,
                lng: -106.843254
            }, {
                lat: 39.234612,
                lng: -106.868659
            }, {
                lat: 39.240994,
                lng: -106.86557
            }, {
                lat: 39.242323,
                lng: -106.851493
            }, {
                lat: 39.233016,
                lng: -106.842224
            }, {
                lat: 39.225836,
                lng: -106.83673
            }, {
                lat: 39.216526,
                lng: -106.83673
            }]
        }, {
            name: "snowmassVillage<br>",
            dates: "<p>Date:" + snowmassVillageActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings:" + snowmassVillageActiveListings[0] + "<br>",
            newListings: "New Listings:" + snowmassVillageNewListings[0] + "<br>",
            pendingListings: "Pending Listings:" + snowmassVillagePendedListings[0] + "<br>",
            soldListings: "Sold Listings:" + snowmassVillageSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + snowmassVillageAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price $" + snowmassVillageActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price: $" + snowmassVillageNewAvgPrice,
            PendedAvgPrice: "<br>Pended Avg Price: $" + snowmassVillagePendedAvgPrice,
            SoldAvgPrice: "<br>Avg sold Price: $" + snowmassVillageSoldAvgPrice,
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price: $" + snowmassVillageSoldAvgSoldPrice,
            ActiveMedianPrice: " <br>Active Median Price $" + snowmassVillageActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price: $" + snowmassVillageNewMedianPrice,
            PendedMedianPrice: "<br>PendedMedianPrice: $" + snowmassVillagePendedMedianPrice,
            SoldMedianPrice: "<br>SoldMedianPrice: $" + snowmassVillageSoldMedianPrice,
            SoldMedianSoldPrice: "<br>Sold Median Sold Price: $" + snowmassVillageSoldMedianSoldPrice,
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + snowmassVillageSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + snowmassVillageSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + snowmassVillageAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + snowmassVillageAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + snowmassVillageActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + snowmassVillageNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + snowmassVillagePendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + snowmassVillageSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + snowmassVillageSoldSaleVolume[0],
            coordinates: [{
                lat: 39.231061,
                lng: -106.927559
            }, {
                lat: 39.212975,
                lng: -106.962578
            }, {
                lat: 39.194884,
                lng: -106.957772
            }, {
                lat: 39.199673,
                lng: -106.935113
            }, {
                lat: 39.210315,
                lng: -106.911767
            }, {
                lat: 39.225742,
                lng: -106.917946
            }]
        }, {
            name: "brushCreek<br>",
            dates: "<p>Date:" + brushCreekActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings:" + brushCreekActiveListings[0] + "<br>",
            newListings: "New Listings:" + brushCreekNewListings[0] + "<br>",
            pendingListings: "Pending Listings:" + brushCreekPendedListings[0] + "<br>",
            soldListings: "Sold Listings:" + brushCreekSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + brushCreekAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price $" + brushCreekActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price: $" + brushCreekNewAvgPrice,
            PendedAvgPrice: "<br>Pended Avg Price: $" + brushCreekPendedAvgPrice,
            SoldAvgPrice: "<br>Avg sold Price: $" + brushCreekSoldAvgPrice,
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price: $" + brushCreekSoldAvgSoldPrice,
            ActiveMedianPrice: " <br>Active Median Price $" + brushCreekActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price: $" + brushCreekNewMedianPrice,
            PendedMedianPrice: "<br>PendedMedianPrice: $" + brushCreekPendedMedianPrice,
            SoldMedianPrice: "<br>SoldMedianPrice: $" + brushCreekSoldMedianPrice,
            SoldMedianSoldPrice: "<br>Sold Median Sold Price: $" + brushCreekSoldMedianSoldPrice,
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + brushCreekSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + brushCreekSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + brushCreekAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + brushCreekAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + brushCreekActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + brushCreekNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + brushCreekPendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + brushCreekSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + brushCreekSoldSaleVolume[0],
            coordinates: [{
                lat: 39.231593,
                lng: -106.922753
            }, {
                lat: 39.26084,
                lng: -106.892541
            }, {
                lat: 39.25765,
                lng: -106.881554
            }, {
                lat: 39.245952,
                lng: -106.879494
            }, {
                lat: 39.219359,
                lng: -106.910393
            }]
        }, {
            name: "woodyCreek<br>",
            dates: "<p>Date:" + woodyCreekActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings:" + woodyCreekActiveListings[0] + "<br>",
            newListings: "New Listings:" + woodyCreekNewListings[0] + "<br>",
            pendingListings: "Pending Listings:" + woodyCreekPendedListings[0] + "<br>",
            soldListings: "Sold Listings:" + woodyCreekSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + woodyCreekAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price $" + woodyCreekActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price: $" + woodyCreekNewAvgPrice,
            PendedAvgPrice: "<br>Pended Avg Price: $" + woodyCreekPendedAvgPrice,
            SoldAvgPrice: "<br>Avg sold Price: $" + woodyCreekSoldAvgPrice,
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price: $" + woodyCreekSoldAvgSoldPrice,
            ActiveMedianPrice: " <br>Active Median Price $" + woodyCreekActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price: $" + woodyCreekNewMedianPrice,
            PendedMedianPrice: "<br>PendedMedianPrice: $" + woodyCreekPendedMedianPrice,
            SoldMedianPrice: "<br>SoldMedianPrice: $" + woodyCreekSoldMedianPrice,
            SoldMedianSoldPrice: "<br>Sold Median Sold Price: $" + woodyCreekSoldMedianSoldPrice,
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + woodyCreekSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + woodyCreekSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + woodyCreekAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + woodyCreekAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + woodyCreekActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + woodyCreekNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + woodyCreekPendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + woodyCreekSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + woodyCreekSoldSaleVolume[0],
            coordinates: [{
                lat: 39.303654,
                lng: -106.884619
            }, {
                lat: 39.296215,
                lng: -106.903158
            }, {
                lat: 39.283461,
                lng: -106.911398
            }, {
                lat: 39.267515,
                lng: -106.909338
            }, {
                lat: 39.258477,
                lng: -106.901098
            }, {
                lat: 39.253692,
                lng: -106.888052
            }, {
                lat: 39.254224,
                lng: -106.866079
            }, {
                lat: 39.25954,
                lng: -106.852346
            }, {
                lat: 39.271767,
                lng: -106.84548
            }, {
                lat: 39.284524,
                lng: -106.846166
            }, {
                lat: 39.292496,
                lng: -106.852346
            }, {
                lat: 39.298872,
                lng: -106.861273
            }, {
                lat: 39.302592,
                lng: -106.868139
            }]
        }, {
            name: "oldSnowmass<br>",
            dates: "<p>Date:" + oldSnowmassActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings:" + oldSnowmassActiveListings[0] + "<br>",
            newListings: "New Listings:" + oldSnowmassNewListings[0] + "<br>",
            pendingListings: "Pending Listings:" + oldSnowmassPendedListings[0] + "<br>",
            soldListings: "Sold Listings:" + oldSnowmassSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + oldSnowmassAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price $" + oldSnowmassActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price: $" + oldSnowmassNewAvgPrice,
            PendedAvgPrice: "<br>Pended Avg Price: $" + oldSnowmassPendedAvgPrice,
            SoldAvgPrice: "<br>Avg sold Price: $" + oldSnowmassSoldAvgPrice,
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price: $" + oldSnowmassSoldAvgSoldPrice,
            ActiveMedianPrice: " <br>Active Median Price $" + oldSnowmassActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price: $" + oldSnowmassNewMedianPrice,
            PendedMedianPrice: "<br>PendedMedianPrice: $" + oldSnowmassPendedMedianPrice,
            SoldMedianPrice: "<br>SoldMedianPrice: $" + oldSnowmassSoldMedianPrice,
            SoldMedianSoldPrice: "<br>Sold Median Sold Price: $" + oldSnowmassSoldMedianSoldPrice,
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + oldSnowmassSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + oldSnowmassSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + oldSnowmassAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + oldSnowmassAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + oldSnowmassActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + oldSnowmassNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + oldSnowmassPendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + oldSnowmassSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + oldSnowmassSoldSaleVolume[0],
            coordinates: [{
                lat: 39.344491,
                lng: -106.991661
            }, {
                lat: 39.337587,
                lng: -107.002647
            }, {
                lat: 39.330152,
                lng: -107.006767
            }, {
                lat: 39.320591,
                lng: -107.00608
            }, {
                lat: 39.312622,
                lng: -107.002647
            }, {
                lat: 39.306778,
                lng: -106.993721
            }, {
                lat: 39.304653,
                lng: -106.983421
            }, {
                lat: 39.306247,
                lng: -106.971061
            }, {
                lat: 39.311029,
                lng: -106.960075
            }, {
                lat: 39.317404,
                lng: -106.953895
            }, {
                lat: 39.328027,
                lng: -106.951835
            }, {
                lat: 39.338118,
                lng: -106.955955
            }, {
                lat: 39.34396,
                lng: -106.966255
            }, {
                lat: 39.346084,
                lng: -106.974495
            }]
        }, {
            name: "basaltProper<br>",
            dates: "<p>Date:" + basaltProperActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings:" + basaltProperActiveListings[0] + "<br>",
            newListings: "New Listings:" + basaltProperNewListings[0] + "<br>",
            pendingListings: "Pending Listings:" + basaltProperPendedListings[0] + "<br>",
            soldListings: "Sold Listings:" + basaltProperSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + basaltProperAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price $" + basaltProperActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price: $" + basaltProperNewAvgPrice,
            PendedAvgPrice: "<br>Pended Avg Price: $" + basaltProperPendedAvgPrice,
            SoldAvgPrice: "<br>Avg sold Price: $" + basaltProperSoldAvgPrice,
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price: $" + basaltProperSoldAvgSoldPrice,
            ActiveMedianPrice: " <br>Active Median Price $" + basaltProperActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price: $" + basaltProperNewMedianPrice,
            PendedMedianPrice: "<br>PendedMedianPrice: $" + basaltProperPendedMedianPrice,
            SoldMedianPrice: "<br>SoldMedianPrice: $" + basaltProperSoldMedianPrice,
            SoldMedianSoldPrice: "<br>Sold Median Sold Price: $" + basaltProperSoldMedianSoldPrice,
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + basaltProperSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + basaltProperSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + basaltProperAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + basaltProperAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + basaltProperActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + basaltProperNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + basaltProperPendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + basaltProperSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + basaltProperSoldSaleVolume[0],
            coordinates: [{
                lat: 39.375498,
                lng: -107.031466
            }, {
                lat: 39.374834,
                lng: -107.035243
            }, {
                lat: 39.372711,
                lng: -107.04005
            }, {
                lat: 39.370853,
                lng: -107.043139
            }, {
                lat: 39.368862,
                lng: -107.043998
            }, {
                lat: 39.365677,
                lng: -107.043483
            }, {
                lat: 39.361563,
                lng: -107.041938
            }, {
                lat: 39.358245,
                lng: -107.039878
            }, {
                lat: 39.356254,
                lng: -107.036616
            }, {
                lat: 39.355989,
                lng: -107.029407
            }, {
                lat: 39.357847,
                lng: -107.024257
            }, {
                lat: 39.360634,
                lng: -107.019279
            }, {
                lat: 39.363687,
                lng: -107.018764
            }, {
                lat: 39.367403,
                lng: -107.019107
            }, {
                lat: 39.371782,
                lng: -107.018935
            }, {
                lat: 39.373773,
                lng: -107.020137
            }, {
                lat: 39.374834,
                lng: -107.023742
            }, {
                lat: 39.375498,
                lng: -107.027862
            }]
        }

        , {
            name: "elJebel<br>",
            dates: "<p>Date:" + elJebelActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings:" + elJebelActiveListings[0] + "<br>",
            newListings: "New Listings:" + elJebelNewListings[0] + "<br>",
            pendingListings: "Pending Listings:" + elJebelPendedListings[0] + "<br>",
            soldListings: "Sold Listings:" + elJebelSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + elJebelAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price $" + elJebelActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price: $" + elJebelNewAvgPrice,
            PendedAvgPrice: "<br>Pended Avg Price: $" + elJebelPendedAvgPrice,
            SoldAvgPrice: "<br>Avg sold Price: $" + elJebelSoldAvgPrice,
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price: $" + elJebelSoldAvgSoldPrice,
            ActiveMedianPrice: " <br>Active Median Price $" + elJebelActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price: $" + elJebelNewMedianPrice,
            PendedMedianPrice: "<br>PendedMedianPrice: $" + elJebelPendedMedianPrice,
            SoldMedianPrice: "<br>SoldMedianPrice: $" + elJebelSoldMedianPrice,
            SoldMedianSoldPrice: "<br>Sold Median Sold Price: $" + elJebelSoldMedianSoldPrice,
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + elJebelSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + elJebelSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + elJebelAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + elJebelAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + elJebelActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + elJebelNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + elJebelPendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + elJebelSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + elJebelSoldSaleVolume[0],
            coordinates: [{
                lat: 39.418212,
                lng: -107.098844
            }, {
                lat: 39.42166,
                lng: -107.089917
            }, {
                lat: 39.418743,
                lng: -107.077558
            }, {
                lat: 39.402032,
                lng: -107.067601
            }, {
                lat: 39.379478,
                lng: -107.052838
            }, {
                lat: 39.368066,
                lng: -107.045629
            }, {
                lat: 39.363554,
                lng: -107.065198
            }, {
                lat: 39.375763,
                lng: -107.085797
            }]
        }, {
            name: "carbondaleProper<br>",
            dates: "<p>Date:" + carbondaleProperActiveListingsDate[0] + "<br/></p>Inventory<hr>",
            listings: "Active Listings:" + carbondaleProperActiveListings[0] + "<br>",
            newListings: "New Listings:" + carbondaleProperNewListings[0] + "<br>",
            pendingListings: "Pending Listings:" + carbondaleProperPendedListings[0] + "<br>",
            soldListings: "Sold Listings:" + carbondaleProperSoldListings[0] + "</p>",
            absorbtionRate: "Absorbtion Rate<hr>" + carbondaleProperAbsorbtion[0],
            ActiveAvgPrice: "<br><br>PRICE <hr>Active Average list price $" + carbondaleProperActiveAvgPrice,
            NewAvgPrice: "<br>New Active Average Price: $" + carbondaleProperNewAvgPrice,
            PendedAvgPrice: "<br>Pended Avg Price: $" + carbondaleProperPendedAvgPrice,
            SoldAvgPrice: "<br>Avg sold Price: $" + carbondaleProperSoldAvgPrice,
            SoldAvgSoldPrice: " <br>Sold Avg Sold Price: $" + carbondaleProperSoldAvgSoldPrice,
            ActiveMedianPrice: " <br>Active Median Price $" + carbondaleProperActiveMedianPrice,
            NewMedianPrice: "<br>New Median Price: $" + carbondaleProperNewMedianPrice,
            PendedMedianPrice: "<br>PendedMedianPrice: $" + carbondaleProperPendedMedianPrice,
            SoldMedianPrice: "<br>SoldMedianPrice: $" + carbondaleProperSoldMedianPrice,
            SoldMedianSoldPrice: "<br>Sold Median Sold Price: $" + carbondaleProperSoldMedianSoldPrice,
            SaleToOriginalListPriceRatio: "<br><br>RATIO <hr> SaleToOriginalListPriceRatio" + carbondaleProperSaleToOriginalListPriceRatio[0],
            SaleToListPriceRatio: " <br>SaleToListPriceRatio" + carbondaleProperSaleToListPriceRatio[0],
            AverageDom: "<br><br>Days on Market <hr>Average Day on Market " + carbondaleProperAverageDom[0],
            AverageCdom: "<br>Average C Day on Market " + carbondaleProperAverageCdom[0],
            ActiveListVolume: "<br>ActiveListVolume " + carbondaleProperActiveListVolume[0],
            NewListVolume: "<br><br>VOLUME <hr>NewListVolume " + carbondaleProperNewListVolume[0],
            PendedListVolume: "<br>PendedListVolume " + carbondaleProperPendedListVolume[0],
            SoldListVolume: "<br>SoldListVolume " + carbondaleProperSoldListVolume[0],
            SoldSaleVolume: "<br>SoldSaleVolume " + carbondaleProperSoldSaleVolume[0],
            coordinates: [{
                lat: 39.435019,
                lng: -107.250672
            }, {
                lat: 39.448806,
                lng: -107.203293
            }, {
                lat: 39.434488,
                lng: -107.173767
            }, {
                lat: 39.404253,
                lng: -107.166214
            }, {
                lat: 39.37825,
                lng: -107.182694
            }, {
                lat: 39.377189,
                lng: -107.2081
            }, {
                lat: 39.381966,
                lng: -107.234192
            }]
        }








    ];


    // foreach your polygons
    for (var i = 0; i < polygons.length; i++) {
        var item = polygons[i];

        var coors = item["coordinates"];
        var name = item["name"] + item["dates"] + item["listings"] + item["newListings"] + item["pendingListings"] + item["soldListings"] + item["absorbtionRate"] + item["ActiveAvgPrice"] + item["NewAvgPrice"] + item["PendedAvgPrice"] + item["SoldAvgPrice"] + item["SoldAvgSoldPrice"] + item["ActiveMedianPrice"] + item["NewMedianPrice"] + item["PendedMedianPrice"] + item["SoldMedianPrice"] + item["SoldMedianSoldPrice"] + item["SaleToOriginalListPriceRatio"] + item["SaleToListPriceRatio"] + item["AverageDom"] + item["AverageCdom"] + item["ActiveListVolume"] + item["NewListVolume"] + item["PendedListVolume"] + item["SoldListVolume"] + item["SoldSaleVolume"];




        var Polygon = new google.maps.Polygon({
            path: coors,
            strokeColor: '#66b3ff',
            strokeOpacity: 0.8,
            strokeWeight: 5,
            editable: false,
            fillColor: 'blue',
            fillOpacity: 0.5,
        });
        Polygon.setMap(map);

        // call function to set window
        attachPolygonInfoWindow(Polygon, coors, name);
    }

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the ' +
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
        'south west of the nearest large town, Alice Springs; 450&#160;km ' +
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
        'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
        'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
        'Aboriginal people of the area. It has many springs, waterholes, ' +
        'rock caves and ancient paintings. Uluru is listed as a World ' +
        'Heritage Site.</p>' +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
        '(last visited June 22, 2009).</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });

    // var marker = new google.maps.Marker({
    //    position: { lat: 39.191097, lng: -106.817535 },
    //    map: map,
    //    title: 'Uluru (Ayers Rock)'
    // });
    // marker.addListener('click', function () {
    //     infowindow.open(map, marker);
    //});
}


function attachPolygonInfoWindow(polygon, coors, html) {

    polygon.infoWindow = new google.maps.InfoWindow({
        content: html


    });

    polygon.infoWindow.setPosition(getHighestWindowPosition(coors));

    google.maps.event.addListener(polygon, 'mouseover', function () {
        polygon.infoWindow.open(map, polygon);
    });
    google.maps.event.addListener(polygon, 'mouseout', function () {
        polygon.infoWindow.close();
    });
}

// function to get highest position of polygon to show window nice on top
function getHighestWindowPosition(coors) {

    var lat = -5000,
        lng = 0,
        i = 0,
        n = coors.length;

    for (; i !== n; ++i) {
        if (coors[i].lat > lat) {
            lat = coors[i].lat;
            lng = coors[i].lng;
        }
    }
    return {
        lat: lat,
        lng: lng
    };
}