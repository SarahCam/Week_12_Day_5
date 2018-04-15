// Draw a chart...
function drawChart(countries) {

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

// Draw a chart...
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
