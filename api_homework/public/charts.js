// Draw a generic pie chart...
function drawGenericPieChart(title, content, element) {

  const drawPieChart = function(){
    const data = google.visualization.arrayToDataTable(content);

    const options = {
      title: title,
      legend: 'none',
      pieSliceText: 'label'
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
      trendlines: { 0: {} },    // Draw a trendline for data series 0.
      pointSize: 2,
      animation: {
                duration: 1500,
                startup: true
            }
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
