import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

	model(){

		let chartOptions = {
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
    	}
			]

		};

		return RSVP.hash({
			options: chartOptions,
		});

	}

});
