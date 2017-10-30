Plotly.d3.csv('data/crypto.csv', function(rows){
  console.log(rows);
  // var trace1 = {
  //     type: 'scatter',                    // set the chart type
  //     mode: 'lines',                      // connect points with lines
  //     x: rows.map(function(row){          // set the x-data
  //       return row['ID'];
  //     }),
  //     y: rows.map(function(row){          // set the x-data
  //       return row['BitCoin_Price'];
  //     }),
  //     line: {                             // set the width of the line.
  //       width: 1,
  //       color:'red'
  //     }
  //   };

  //   var layout = {
  //     yaxis: {title: "Wind Speed"},       // set the y axis title
  //     xaxis: {
  //       showgrid: false,                  // remove the x-axis grid lines
  //       tickformat: "%B, %Y"              // customize the date format to "month, day"
  //     },
  //     margin: {                           // update the left, bottom, right, top margin
  //       l: 40, b: 10, r: 10, t: 20
  //     }
  //   };

  //   Plotly.d3.csv('../data/result.csv', function(rows){
  //     var trace2 = {
  //     type: 'scatter',                    // set the chart type
  //     mode: 'lines',                      // connect points with lines
  //     x: rows.map(function(row){          // set the x-data
  //       return row['ID2'];
  //     }),
  //     y: rows.map(function(row){          // set the x-data
  //       return row['BitCoin_Price'];
  //     }),
  //     line: {                             // set the width of the line.
  //       width: 1,
  //       color:'blue'
  //     }
  //   };

  //   var layout = {
  //     yaxis: {title: "Wind Speed"},       // set the y axis title
  //     xaxis: {
  //       showgrid: false,                  // remove the x-axis grid lines
  //       tickformat: "%B, %Y"              // customize the date format to "month, day"
  //     },
  //     margin: {                           // update the left, bottom, right, top margin
  //       l: 40, b: 10, r: 10, t: 20
  //     }
  //   };
  //   data = [trace1, trace2];
  //   Plotly.plot(document.getElementById('graph'), data, layout, {showLink: false});
  // });
 });