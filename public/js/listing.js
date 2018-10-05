var property = {};
$(function () {
    // var source = $("#search-results").append();
    // var dataTemplate = Handlebars.compile(source);
    // $results = $('#results')

    // var template = document.getElementById('cat-list-template').innerHTML;
    // var renderCats = Handlebars.compile(template);
    $('#search').on('click', function (e) {

        console.log('HIIII');
        var idimg = $(this).attr('id');
        // $.post('/listing', function (data) {
        //     console.log("pooop2" + JSON.stringify(data[0].directions));
        var propertyData = {}

        // });
        $.ajax({
            method: 'get',
            dataType: "text",
            url: '/search',
            success: function (data) {
                console.log('poooooooop' + data);
                var placeHolder = $("#cat-list-template");
                var test = data[0].Zoning;
                var image = "you suckkk";
                var source = $("#image-template").html();
                var template = Handlebars.compile(source);
                var html = template(image);
                console.log(html);
                placeHolder.append(html);


            }
        });
    });

});