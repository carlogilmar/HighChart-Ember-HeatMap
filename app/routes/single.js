import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
	model(){

		let levels = { 1:"Nivel Latente", 2:"Nivel Impreciso", 3:"Nivel Gestándose", 4:"Nivel Produciendo" };

		let chartOptions = {
			chart: {
				type: 'heatmap',
				marginTop: 40,
				marginBottom: 40
			},
			title: {
				text: 'Evaluación 2017 en Campus CMX'
			},
			xAxis: {
				categories: ['Cultura EBC', 'Comunicación Interpersonal', 'Comunicación Intrapersonal', 'Gestión de Clase', 'Gestión Tecnológica', 'Liderazgo', 'Orientación al alumno', 'Vinculación laboral']
			},
			yAxis: {
				categories: ['Campus CMX'],
				title: ''
			},
			colorAxis: {
				min: 0,
				gridLineColor:'#ffffff',
				minColor: '#ffe6e6',
				maxColor: '#9e0142'
			},
			legend: {
				align: 'right',
				layout: 'vertical',
				margin: 0,
				verticalAlign: 'top',
				y: 25,
				symbolHeight: 320
			},
			tooltip: {
				formatter: function () {
					return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> en <b>' + this.series.yAxis.categories[this.point.y] + '</b> con <b>'+
						levels[this.point.value];
				}
			},
		};

		let chartData = [{
			name: 'Evaluaciones Generales',
			borderWidth: 1,
			data: [
							[0,0,1],
							[1,0,2],
							[2,0,3],
							[3,0,4],
							[4,0,3],
							[5,0,4],
							[6,0,3],
							[7,0,1]
						],
			dataLabels: {
				enabled: true,
				color: 'white',
				style: {
					textShadow: 'none'
				}
			}
		}];

		return RSVP.hash({
			options: chartOptions,
			data: chartData
		});
	}
});
