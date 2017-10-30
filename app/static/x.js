Plotly.d3.csv('data/crypto.csv', function(rows){
  console.log(rows);
  var actual = {
      type: 'scatter',                    // set the chart type
      mode: 'lines',                      // connect points with lines
      x: rows.map(function(row){          // set the x-data
        return row['ID'];
      }),
      y: rows.map(function(row){          // set the x-data
        return row['BitCoin_Price'];
      }),
      line: {                             // set the width of the line.
        width: 1,
        color:'red'
      }
    };

    var layout = {
      yaxis: {title: "Price($)"},       // set the y axis title
      xaxis: {
        title: "Time(days)",
        showgrid: false,                  // customize the date format to "month, day"
      },
      // margin: {                           // update the left, bottom, right, top margin
      //   l: 40, b: 10, r: 10, t: 20
      // }
    };

    Plotly.d3.csv('data/result.csv', function(rows){
      var predicted = {
      type: 'scatter',                    // set the chart type
      mode: 'lines',                      // connect points with lines
      x: rows.map(function(row){          // set the x-data
        return row['ID2'];
      }),
      y: rows.map(function(row){          // set the x-data
        return row['BitCoin_Price'];
      }),
      line: {                             // set the width of the line.
        width: 1,
        color:'blue'
      }
    };

    var layout = {
      yaxis: {title: "Price($)"},       // set the y axis title
      xaxis: {
        title: "Time(days)",
        showgrid: false,                 // customize the date format to "month, day"
      },
      // margin: {                           // update the left, bottom, right, top margin
      //   l: 40, b: 10, r: 10, t: 20
      // }
    };
    data = [actual, predicted];
    Plotly.plot(document.getElementById('graph'), data, layout, {showLink: false});
  });
  });