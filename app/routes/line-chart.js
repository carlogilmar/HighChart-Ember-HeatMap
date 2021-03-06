import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
	model(){

		let chartOptions = {
			chart: {
				type: 'line',
			},
			title: {
				text: 'Evaluación 2017'
			},
      subtitle:{
        text: "Prospecto Carlo Gilmar Padilla Santana"
      },
			xAxis: {
				categories: ['Cultura EBC', 'Comunicación Interpersonal', 'Comunicación Intrapersonal', 'Gestión de Clase', 'Gestión Tecnológica', 'Liderazgo', 'Orientación al alumno', 'Vinculación laboral']
			},
			yAxis: {
				title:{
          text: "Nivel"
        },
        categories: ['','1 Latente', '2 Impreciso', '3 Gestándose', '4 Produciendo']
			},
      tooltip: {
				formatter: function () {
          return "Nivel <b>"+ this.series.yAxis.categories[this.point.y]+"</b>"
				}
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: true
        }
      },
      series: [{
        name: 'Carlo Gilmar',
        data: [1,2,3,4,4,3,2,1]
      }]
		};

		return RSVP.hash({
			options: chartOptions,
		});
	}
});
