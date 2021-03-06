import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
	model(){

		let chartOptions = {
			colors: ['rgba(55, 163, 235, 0.68)','rgba(74, 191, 191, 0.7)','rgba(255, 207, 87, 0.94)','rgba(255, 97, 131, 0.77)'],
			chart: {
				type: 'area'
			},
			title: {
				text: 'Resultados Generales de todas las Evaluaciones de Reclutamiento 2017'
			},
			xAxis: {
				categories: ['Cultura EBC', 'Comunicación Interpersonal', 'Comunicación Intrapersonal', 'Gestión de Clase', 'Gestión Tecnológica', 'Liderazgo', 'Orientación al alumno', 'Vinculación laboral'],
				title: {
					enabled: false
				}
			},
			yAxis: {
				title: {
					text: 'Percent'
				}
			},
			tooltip: {
				pointFormat: '<span style="color:{series.color}">{series.name}</span>: ({point.y} Prospectos)<br/>',
				split: true
			},
			plotOptions: {
				area: {
					stacking: 'percent',
					lineColor: '#ffffff',
					lineWidth: 1,
					marker: {
						lineWidth: 1,
						lineColor: '#ffffff'
					}
				}
			},
			series: [{
				name: 'Produciendo',
				data: [25,10,40,25,10,40,25,10]

			}, {
				name: 'Gestándose',
				data: [10,40,25,10,40,25,10,40]

			}, {
				name: 'Impreciso',
				data: [40,25,10,40,25,10,40,25]

			}, {
				name: 'Latente',
				data: [25,25,25,25,25,25,25,25]

			}]
		};

		return RSVP.hash({
			options: chartOptions,
		});
	}
});
