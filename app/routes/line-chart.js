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
        categories: ['','Latente', 'Impreciso', 'Gestándose', 'Produciendo']
			},
      tooltip: {
        shared: true,
        valueSuffix: ' units'
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
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
