google.load("visualization", "1", {
    packages: ["corechart"],
    "callback": drawChart
});
google.setOnLoadCallback(drawChart);

var chart;

function drawChart() {

    var data = google.visualization.arrayToDataTable([
                ['Income/expanse', 'Income Per Day'],
                ['Income', 5000],
                ['Expanse', 2000]

            ]);

    var options = {
        pieHole: 0.3,
        showLables: 'true',
        legend: {
            position: 'right',
            alignment: 'center'
        },
        chartArea: {
            width: '100%',
            height: '100%'
        },    

        forceIFrame: 'false',
        pieSliceText: 'value',
        sliceVisibilityThreshold: 1 / 20, // Only > 5% will be shown.
        titlePosition: 'none'
    };


    chart = new google.visualization.PieChart(document.getElementById('day'));

    chart.draw(data, options);
}


$(document).ready(function () {
    //On button click, load new data
    $(".day").click(function () {

        var data = google.visualization.arrayToDataTable([
                    ['Income/expanse', 'Income Per Day'],
                    ['Income', 5000],
                    ['Expanse', 2000]
                ]);

        var options = {
        pieHole: 0.3,
        showLables: 'true',
        legend: {
            position: 'right',
            alignment: 'center'
        },
        chartArea: {
            width: '100%',
            height: '100%'
        },    

        forceIFrame: 'false',
        pieSliceText: 'value',
        sliceVisibilityThreshold: 1 / 20, // Only > 5% will be shown.
        titlePosition: 'none'
    };
        chart.draw(data, options);

    });

});
$(document).ready(function () {
    //On button click, load new data
    $(".week").click(function () {

        var data = google.visualization.arrayToDataTable([
                    ['Income/expanse', 'Income Per Week'],
                    ['Income', 5000],
                    ['Expanse', 3000]
                ]);

        var options = {
        pieHole: 0.3,
        showLables: 'true',
        legend: {
            position: 'right',
            alignment: 'center'
        },
        chartArea: {
            width: '100%',
            height: '100%'
        },    

        forceIFrame: 'false',
        pieSliceText: 'value',
        sliceVisibilityThreshold: 1 / 20, // Only > 5% will be shown.
        titlePosition: 'none'
    };
        chart.draw(data, options);

    });

});
$(document).ready(function () {
    //On button click, load new data
    $(".month").click(function () {

        var data = google.visualization.arrayToDataTable([
                    ['Income/expanse', 'Income Per Month'],
                    ['Income', 50000],
                    ['Expanse', 10000]
                ]);

        var options = {
        pieHole: 0.3,
        showLables: 'true',
        legend: {
            position: 'right',
            alignment: 'center'
        },
        chartArea: {
            width: '100%',
            height: '100%'
        },    

        forceIFrame: 'false',
        pieSliceText: 'value',
        sliceVisibilityThreshold: 1 / 20, // Only > 5% will be shown.
        titlePosition: 'none'
    };
        chart.draw(data, options);

    });

});
$(document).ready(function () {
    //On button click, load new data
    $(".year").click(function () {

        var data = google.visualization.arrayToDataTable([
                    ['Income/expanse', 'Income Per year'],
                    ['Income', 100000],
                    ['Expanse', 28000]
                ]);

        var options = {
        pieHole: 0.3,
        showLables: 'true',
        legend: {
            position: 'right',
            alignment: 'center'
        },
        chartArea: {
            width: '100%',
            height: '100%'
        },    

        forceIFrame: 'false',
        pieSliceText: 'value',
        sliceVisibilityThreshold: 1 / 20, // Only > 5% will be shown.
        titlePosition: 'none'
    };
        chart.draw(data, options);

    });

});
