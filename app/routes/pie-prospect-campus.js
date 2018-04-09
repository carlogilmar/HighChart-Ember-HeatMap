import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model(){
    Highcharts.setOptions({
      colors: ['rgba(55, 163, 235, 0.68)','rgba(74, 191, 191, 0.7)','rgba(255, 207, 87, 0.94)','rgba(255, 97, 131, 0.77)']
    });

    let chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: 240
      },
      title: {
        text: ' ',
        margin: 0,
        style: {
          fontWeight: 'bold',
          fontSize: '20px'
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      exporting: { enabled: false },
      plotOptions: {
        pie: {
          size: 170,
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y:f}',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            },
            connectorColor: 'gray',
            connectorPadding: -35,
            connectorWidth: 0,
            distance: -30
          }
        }
      },
      series: [{
        name: 'Porcentaje',
        data: [
        { name: 'Latente', y: 23 },
        { name: 'Impreciso', y: 25 },
        { name: 'Gestandose', y: 24 },
        { name: 'Produciendo', y: 35 }
        ]
      }]
    };

    return RSVP.hash({
      options: chartOptions,
    });
  }
});
