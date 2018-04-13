// Draw a chart...
function drawChart(countries) {

  europe  = ['Europe', 20];
  asia    = ['Asia', 40];
  america = ['America', 30];
  other   = ['Other', 100];

  const drawPieChart = function(){
        console.log("DRAW CHART...");
        var data = google.visualization.arrayToDataTable([
          ['Region', 'Population (in millions)'],
          europe, asia, america, other
        ]);

        var options = {
          title: 'Region - Population',
          legend: 'none',
          pieSliceText: 'label',
          slices: {  0: {offset: 0.2},
                     2: {offset: 0.3},
          },
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        console.log(chart);
        chart.draw(data, options);
  };

  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawPieChart);

};
