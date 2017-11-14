 google.load("visualization", "1", {
    packages: ["corechart"],
    "callback": drawChart2
});
google.setOnLoadCallback(drawChart2);

var chart2;

function drawChart2() {

    var data2 = google.visualization.arrayToDataTable([
                ['Income Category', 'Income Per Day'],
               ['Operation', 100000],
                    ['Seat Rent', 28000],
                ['Medicine', 100000],
                    ['Others', 18000]



            ]);

    var options2 = {
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


    chart2 = new google.visualization.PieChart(document.getElementById('income-day'));

    chart2.draw(data2, options2);
}


$(document).ready(function () {
    //On button click, load new data
    $(".income-day").click(function () {

        var data2 = google.visualization.arrayToDataTable([
                    ['Income Category', 'Income Per Day'],
                    ['Operation', 20000],
                    ['Seat Rent', 2800],
                ['Medicine', 10000],
                    ['Others', 5800]
                ]);

        var options2 = {
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
        chart2.draw(data2, options2);

    });

});
$(document).ready(function () {
    //On button click, load new data
    $(".income-week").click(function () {

        var data2 = google.visualization.arrayToDataTable([
                    ['Income Category', 'Income Per Week'],
                    ['Operation', 200000],
                    ['Seat Rent', 28000],
                ['Medicine', 100000],
                    ['Others', 58000]
                ]);

        var options2 = {
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
        chart2.draw(data2, options2);

    });

});

$(document).ready(function () {
    //On button click, load new data
    $(".income-month").click(function () {

        var data2 = google.visualization.arrayToDataTable([
                    ['Income Category', 'Income Per Month'],
                    ['Operation', 800000],
                    ['Seat Rent', 28000],
                ['Medicine', 200000],
                    ['Others', 58000]
                ]);

        var options2 = {
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
        chart2.draw(data2, options2);

    });

});


$(document).ready(function () {
    //On button click, load new data
    $(".income-year").click(function () {

        var data2 = google.visualization.arrayToDataTable([
                    ['Income Category', 'Income Per Day'],
                    ['Operation', 1100000],
                    ['Seat Rent', 218000],
                ['Medicine', 1020000],
                    ['Others', 18000]
                ]);

        var options2 = {
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
        chart2.draw(data2, options2);

    });

});