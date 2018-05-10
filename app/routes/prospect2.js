import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import Highcharts from 'ember-highcharts/components/high-charts';

export default Route.extend({

	model(){

		let chartOptions = {
      exporting: {
        allowHTML: true,
        fallbackToExportServer: true
      },
			colors: ['rgba(55, 163, 235, 0.68)','rgba(74, 191, 191, 0.7)','rgba(255, 207, 87, 0.94)','rgba(255, 97, 131, 0.77)'],
			chart: {
				type: 'column'
			},
			title: {
				text: 'Gráfica General de Resultados 2017'
			},
			xAxis: {
				categories: ['Cultura EBC', 'Comunicación Interpersonal', 'Comunicación Intrapersonal', 'Gestión de Clase', 'Gestión Tecnológica', 'Liderazgo', 'Orientación al alumno', 'Vinculación laboral']
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Respuestas de la Evaluación'
				},
				stackLabels: {
					enabled: true,
					style: {
						fontWeight: 'bold',
						color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
					}
				}
			},
			tooltip: {
				headerFormat: '<b>{point.x}</b><br/>',
				pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
			},
			plotOptions: {
				column: {
					stacking: 'normal',
					dataLabels: {
						enabled: true,
						color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
					}
				}
			},
        series: [
			{
            name: 'Nivel Produciendo',
            data: [25,25,25,25,25,25,25,25]
        }, {
            name: 'Nivel Gestándose',
            data: [25,25,25,25,25,25,25,25]
            }, {
            name: 'Nivel Impreciso',
            data: [25,25,25,25,25,25,25,25]
        }, {
            name: 'Nivel Latente',
            data: [25,25,25,25,25,25,25,25]
        }]
	};

		return RSVP.hash({
			options: chartOptions,
		});

	}

});
