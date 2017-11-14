 google.load("visualization", "1", {
    packages: ["corechart"],
    "callback": drawChart3
});
 google.setOnLoadCallback(drawChart3);

 var chart3;
var test = 5000;

 function drawChart3() {

    var data3 = google.visualization.arrayToDataTable([
        ['Income Category', 'expanse Per Day'],
        ['Operation', 100000],
        ['Seat Rent', 28000],
        ['Medicine', 100000],
        ['Others', 18000]



        ]);

    var options3 = {
        pieHole: 0.3,

        chartArea: {
            width: '100%',
            height: '100%'
        },

        forceIFrame: 'false',




        pieSliceText: 'value',

        sliceVisibilityThreshold: 1 / 20, // Only > 5% will be shown.

        titlePosition: 'none'

    };


    chart3 = new google.visualization.PieChart(document.getElementById('expanse-day'));

    chart3.draw(data3, options3);
}


$(document).ready(function () {
    //On button click, load new data
    $(".expanse-day").click(function () {

        var data3 = google.visualization.arrayToDataTable([
            ['Income Category', 'expanse Per Day'],
            ['Operation', 20000],
            ['Seat Rent', 2800],
            ['Medicine', 10000],
            ['Others', 5800]
            ]);

        var options3 = {
            pieHole: 0.3,

            chartArea: {
                width: '100%',
                height: '100%'
            },

            forceIFrame: 'false',



            pieSliceText: 'value',

            sliceVisibilityThreshold: 1 / 20, // Only > 5% will be shown.

            titlePosition: 'none'

        };
        chart3.draw(data3, options3);

    });

});
$(document).ready(function () {
    //On button click, load new data
    $(".expanse-week").click(function () {

        var data3 = google.visualization.arrayToDataTable([
            ['Income Category', 'expanse Per Week'],
            ['Operation', 200000],
            ['Seat Rent', 28000],
            ['Medicine', 100000],
            ['Others', 58000]
            ]);

        var options3 = {
            pieHole: 0.3,

            chartArea: {
                width: '100%',
                height: '100%'
            },

            forceIFrame: 'false',



            pieSliceText: 'value',

            sliceVisibilityThreshold: 1 / 20, // Only > 5% will be shown.

            titlePosition: 'none'

        };
        chart3.draw(data3, options3);

    });

});

$(document).ready(function () {
    //On button click, load new data
    $(".expanse-month").click(function () {

        var data3 = google.visualization.arrayToDataTable([
            ['Income Category', 'expanse Per Month'],
            ['Operation', 800000],
            ['Seat Rent', 28000],
            ['Medicine', 200000],
            ['Others', 58000]
            ]);

        var options3 = {
            pieHole: 0.3,

            chartArea: {
                width: '100%',
                height: '100%'
            },

            forceIFrame: 'false',



            pieSliceText: 'value',

            sliceVisibilityThreshold: 1 / 20, // Only > 5% will be shown.

            titlePosition: 'none'

        };
        chart3.draw(data3, options3);

    });

});


$(document).ready(function () {
   // var test = 400000;
    //On button click, load new data
    $(".expanse-year").click(function () {

        var data3 = google.visualization.arrayToDataTable([
            ['Income Category', 'expanse Per Day'],
            ['Operation', test],
            ['Seat Rent', 218000],
            ['Medicine', 1020000],
            ['Others', 18000]
            ]);

        var options3 = {
            pieHole: 0.3,

            chartArea: {
                width: '100%',
                height: '100%'
            },

            forceIFrame: 'false',



            pieSliceText: 'value',

            sliceVisibilityThreshold: 1 / 20, // Only > 5% will be shown.

            titlePosition: 'none'

        };
        chart3.draw(data3, options3);

    });

});