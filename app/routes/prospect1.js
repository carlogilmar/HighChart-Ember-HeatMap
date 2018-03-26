import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

	model(){
		let chartOptions = {
			chart: {
				type: 'column'
			},
			title: {
				text: ' Gráfica General de Resultados'
			},
			subtitle: {
				text: ' Reclutamiento 2017 <br> Total de Evaluaciones: 100'
			},
			xAxis: {
				categories: ['Cultura EBC', 'Comunicación Interpersonal', 'Comunicación Intrapersonal', 'Gestión de Clase', 'Gestión Tecnológica', 'Liderazgo', 'Orientación al alumno', 'Vinculación laboral'],
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Cantidad de Respuestas'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
					'<td style="padding:0"><b>{point.y}</b></td></tr>',
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
