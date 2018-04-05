import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

	model(){
		let chartOptions = {
			colors: ['rgba(55, 163, 235, 0.68)','rgba(74, 191, 191, 0.7)','rgba(255, 207, 87, 0.94)','rgba(255, 97, 131, 0.77)'],
			chart: {
				type: 'line'
			},
			title: {
				text: 'Grafica General de Historicos'
			},
			subtitle: {
				text: 'Campus CMX'
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
			},{
				name: 'Evaluacion 3',
				data: [2,2,2,2,2,2,2,2]
			},{
				name: 'Evaluacion 4',
				data: [1,1,2,4,4,4,3,1]
			},{
				name: 'Evaluacion 5',
				data: [1,1,1,1,1,1,4,3]
			}]
		};

		return RSVP.hash({
			options: chartOptions,
		});
	}
});
