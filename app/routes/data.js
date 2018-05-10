import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

	model(){
		let chartOptions = {
			chart: {
				type: 'line'
			},
			title: {
				text: 'Comparación Media (promedio) y Mediana'
			},
			subtitle: {
				text: 'Resultados Agrupados de Rutas Docentes'
			},
			xAxis: {
				categories: ['Cultura EBC', 'Comunicacion Interpersonal', 'Comunicacion Intrapersonal', 'Gestion de Clase', 'Gestion Tecnologica', 'Liderazgo', 'Orientacion al alumno', 'Vinculacion laboral']
			},
			yAxis: {
				title: {
					text: 'Nivel'
				}
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
					enableMouseTracking: false
				}
			},
			series: [{
				name: 'Promedio',
        data: [1.25, 3.25, 3.25, 2.5, 2.25, 2.5, 1.75, 1.75]
			}, {
				name: 'Mediana',
				data: [1, 4, 3.5, 2.5, 2.5, 3, 1.5, 1.5]
			}]
		};

		return RSVP.hash({
			options: chartOptions,
		});
	}
});
