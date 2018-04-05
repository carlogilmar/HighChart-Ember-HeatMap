import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

	model(){
		let chartOptions = {
			chart: {
				type: 'line'
			},
			title: {
				text: 'Grafica General de Historicos'
			},
			subtitle: {
				text: 'Evaluaciones'
			},
			xAxis: {
				categories: ['Cultura EBC', 'Comunicacion Interpersonal', 'Comunicacion Intrapersonal', 'Gestion de Clase', 'Gestion Tecnologica', 'Liderazgo', 'Orientacion al alumno', 'Vinculacion laboral']
			},
			yAxis: {
				title: {
					text: 'Nivel'
				}
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
				name: 'Evaluacion 1',
				data: [1,2,3,4,4,3,2,1]
			}, {
				name: 'Evaluacion 2',
				data: [2,1,3,2,1,4,4,3]
			}]
		};

		return RSVP.hash({
			options: chartOptions,
		});
	}

});
