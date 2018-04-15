// Draw a chart...
function drawChart() {

  const europe  = ['Europe', 20];
  const asia    = ['Asia', 40];
  const america = ['America', 30];
  const other   = ['Other', 100];

  const drawPieChart = function(){
    const data = google.visualization.arrayToDataTable([
      ['Region', 'Population (in millions)'],
      europe, asia, america, other
    ]);

    const options = {
      title: 'Region - Population',
      legend: 'none',
      pieSliceText: 'label',
      slices: {  0: {offset: 0.2},
                 2: {offset: 0.3},
      },
    };

    const chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  };

  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawPieChart);

};

// Draw a generic pie chart...
function drawGenericPieChart(title, content, element) {

  const drawPieChart = function(){
    const data = google.visualization.arrayToDataTable(content);

    const options = {
      title: title,
      legend: 'none',
      pieSliceText: 'label',
    };

    const chart = new google.visualization.PieChart(document.getElementById(element));
    chart.draw(data, options);
  };

  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawPieChart);

};

// Draw trend graph...
function drawGenericTrendChart(title, hAxis, vAxis, content, element){

  const drawTrendChart = function() {
    const data = google.visualization.arrayToDataTable(content);

    const options = {
      title: title,
      hAxis: {title: hAxis},
      vAxis: {title: vAxis},
      legend: 'none',
      trendlines: { 0: {} }    // Draw a trendline for data series 0.
    };

    const chart = new google.visualization.ScatterChart(document.getElementById(element));
    chart.draw(data, options);
  };

  google.charts.setOnLoadCallback(drawTrendChart);
};

// Create data points to be used in chart:
const createDataPoints = function(objectArray, hAxisTitle, vAxisTitle, hAxisProperty, vAxisProperty){
  let dataPoints = [];
  let dataPoint = [hAxisTitle, vAxisTitle];
  dataPoints.push(dataPoint);
  for(let object of objectArray){
    let dataPoint = [];
    dataPoint.push(parseFloat(object[hAxisProperty]));
    dataPoint.push(parseFloat(object[vAxisProperty]));
    dataPoints.push(dataPoint);
  };
  return dataPoints;
};
