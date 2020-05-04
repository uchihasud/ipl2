
function fetchAndVisualizeData() {
    fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
  }

  fetchAndVisualizeData();

  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
    visualizeMatchesWonByTeam(data.matchesWonByTeam);
    visualizeExtraRuns_2016(data.extraRuns);
    visualizeTopBowler(data.economicalBowler);
    visualizeStrikeRatesPerYear(data.strikeRate)
    return;
  }
  
  function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
    const seriesData = [];
    for (let year in matchesPlayedPerYear) {
      seriesData.push([year, matchesPlayedPerYear[year]]);
    }
    
  
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column"
      },
      title: {
        text: "1. Matches Played Per Year"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'//shows link to get csv
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Matches"
        }
      },
      tooltip: {
        pointFormat: 'Matches Played: <b>{point.y} </b>'
    },
      series: [
        {
          name: "Years",
          data: seriesData,
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
        }
      ]
    });
  }


  function visualizeMatchesWonByTeam(matchesWonByTeam) {
    
    const seriesData = [];
    let obj={};
    let arr=[];
    let teams=['Rajasthan Royals','Kolkata Knight Riders','Chennai Super Kings','Sunrisers Hyderabad','Delhi Daredevils','Delhi Capitals','Royal Challengers Bangalore','Mumbai Indians','Pune Warriors','Kings XI Punjab','Deccan Chargers','Kochi Tuskers Kerala','Rising Pune Supergiant','Gujarat Lions'];
    for(let t of teams)
    {
    for (let year in matchesWonByTeam) {
        obj.name=t;
        if(matchesWonByTeam[year][t]===undefined)
        {
            arr.push(0);
        }
        else
        {
      arr.push(matchesWonByTeam[year][t]);
        }
    }
    obj.data=arr;
    
    seriesData.push(obj);
    arr=[];
    obj={};
    }
    
    

    Highcharts.chart("matches-won-per-team-per-year", {
        chart: {
            type: 'column'
        },
        title: {
            text: '2. Number of Matches Won By Each Team Over All The Years'
        },
        subtitle: {
            text: 'Source: ipl.com'
        },
        xAxis: {
            categories: [
                '2008',
                '2009',
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Matches Won'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: seriesData
    });
}

function visualizeExtraRuns_2016(extraRuns) {
  
  const seriesData = [];
  for (let team in extraRuns) {
    seriesData.push([team, extraRuns[team]]);
  } 
  console.log(seriesData);
  Highcharts.chart("extra-runs", {
    chart: {
      type: "column"
    },
    title: {
      text: "3. Extra run conceded by each team in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.iplt20.com">ipl.com</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    tooltip: {
      pointFormat: 'Extra Runs: <b>{point.y} </b>'
  },
    series: [
      {
        name: "Teams",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
      }
    ]
  });
}


function visualizeTopBowler(economicalBowler) {
  
  const seriesData = [];
  for (let player in economicalBowler) {
    seriesData.push([player, +(economicalBowler[player])]);
  } 
 console.log(seriesData);
  Highcharts.chart("eco-bowl", {
    chart: {
      type: "column"
    },
    title: {
      text: "4. Top 10 economical bowler in 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.iplt20.com">ipl.com</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    tooltip: {
      pointFormat: 'Economy: <b>{point.y:.2f} </b>'
  },
    series: [
      {
        name: "Bowler",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.2f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
      }
    ]
  });
}




function visualizeStrikeRatesPerYear(strikeRatesPerYear) {
    
  const seriesData = [];
  let obj={};
  let arr=[];
  let players=['V Kohli','CH Gayle','RG Sharma','MS Dhoni','AB de Villiers'];
  for(let p of players)
  {
  for (let year in strikeRatesPerYear) {
      obj.name=p;
      if(strikeRatesPerYear[year][p]===undefined)
      {
          arr.push(0);
      }
      else
      {
    arr.push(+(strikeRatesPerYear[year][p]));
      }
  }
  obj.data=arr;
  
  seriesData.push(obj);
  arr=[];
  obj={};
  }
  
  

  Highcharts.chart("st-rate", {
      chart: {
          type: 'column'
      },
      title: {
          text: '5. Strike Rates Of Given Players Over All The Years'
      },
      subtitle: {
          text: 'Source: ipl.com'
      },
      xAxis: {
          categories: [
              '2008',
              '2009',
              '2010',
              '2011',
              '2012',
              '2013',
              '2014',
              '2015',
              '2016',
              '2017',
              '2018',
              '2019'
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Strike Rates'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: seriesData
  });
}
