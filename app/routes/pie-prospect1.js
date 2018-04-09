import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model(){
    var colors = Highcharts.getOptions().colors,
    categories = [
    "Cultura EBC",
    "Comunicacion Interpersonal",
    "Comunicacion Intrapersonal",
    "Gestion de Clase",
    "Gestion Tecnologica",
    "Liderazgo",
    "Orientacion al alumno",
    "Vinculacion laboral"
    ],
    data = [
    {
      "y": 10,
      "color": colors[2],
      "dataForCharts": {
        "name": "Cultura EBC",
        "categories": [
        "Produciendo",
        "Gestándose",
        "Impreciso",
        "Latente"
        ],
        "data": [
        25,
        10,
        40,
        25
        ]
      }
    },
    {
      "y": 10,
      "color": colors[1],
      "dataForCharts": {
        "name": "Comunicacion Interpersonal",
        "categories": [
        "Produciendo",
        "Gestándose",
        "Impreciso",
        "Latente"
        ],
        "data": [
        25,
        10,
        40,
        25
        ]
      }
    },
    {
      "y": 10,
      "color": colors[0],
      "dataForCharts": {
        "name": "Comunicacion Intrapersonal",
        "categories": [
        "Produciendo",
        "Gestándose",
        "Impreciso",
        "Latente"
        ],
        "data": [
        25,
        10,
        40,
        25
        ]
      }
    },
    {
      "y": 10,
      "color": colors[3],
      "dataForCharts": {
        "name": "Gestion de Clase",
        "categories": [
        "Produciendo",
        "Gestándose",
        "Impreciso",
        "Latente"
        ],
        "data": [
        25,
        10,
        40,
        25
        ]
      }
    },
    {
      "y": 10,
      "color": colors[5],
      "dataForCharts": {
        "name": "Gestion Tecnologica",
        "categories": [
        "Produciendo",
        "Gestándose",
        "Impreciso",
        "Latente"
        ],
        "data": [
        25,
        10,
        40,
        25
        ]
      }
    },
    {
      "y": 10,
      "color": colors[4],
      "dataForCharts": {
        "name": "Liderazgo",
        "categories": [
        "Produciendo",
        "Gestándose",
        "Impreciso",
        "Latente"
        ],
        "data": [
        25,
        10,
        40,
        25
        ]
      }
    },
    {
      "y": 10,
      "color": colors[6],
      "dataForCharts": {
        "name": 'Orientacion al alumno',
        "categories": [
        "Produciendo",
        "Gestándose",
        "Impreciso",
        "Latente"
        ],
        "data": [
        25,
        10,
        40,
        25
        ]
      }
    },
    {
      "y": 10,
      "color": colors[6],
      "dataForCharts": {
        "name": 'Vinculacion laboral',
        "categories": [
        "Produciendo",
        "Gestándose",
        "Impreciso",
        "Latente"
        ],
        "data": [
        25,
        10,
        40,
        25
        ]
      }
    }
    ],
    competitions = [],
    level = [],
    i,
    j,
    dataLen = data.length,
    drillDataLen,
    brightness;

    for (i = 0; i < dataLen; i += 1) {
            competitions.push({
              name: categories[i],
              y: data[i].y,
              color: data[i].color
            });
        drillDataLen = data[i].dataForCharts.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
          brightness = 0.2 - (j / drillDataLen) / 5;
          level.push({
            name: data[i].dataForCharts.categories[j],
            y: data[i].dataForCharts.data[j],
            color: Highcharts.Color(data[i].color).brighten(brightness).get()
          });
        }
      }

      let chartOptions = {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Grafica de pie de un campus por categorias'
        },
        subtitle: {
          text: 'Evaluaciones'
        },
        plotOptions: {
          pie: {
            shadow: false,
            center: ['50%', '50%']
          }
        },
        tooltip: {
          valueSuffix: '%'
        },
        series: [{
          name: 'Competencia',
          data: competitions,
          size: '60%',
          dataLabels: {
            formatter: function () {
              return this.y > 5 ? this.point.name : null;
            },
            color: '#ffffff',
            distance: -30
          }
        }, {
          name: 'nivel',
          data: level,
          size: '80%',
          innerSize: '60%',
          dataLabels: {
            formatter: function () {
                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                this.y + '%' : null;
              }
            },
            id: 'nivel'
          }],
          responsive: {
            rules: [{
              condition: {
                maxWidth: 400
              },
              chartOptions: {
                series: [{
                  id: 'nivel',
                  dataLabels: {
                    enabled: false
                  }
                }]
              }
            }]
          }
        };

        return RSVP.hash({
          options: chartOptions,
        });
      }
    });
