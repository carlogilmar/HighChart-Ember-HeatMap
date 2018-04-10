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
				text: 'Campus CMX'
			},
			xAxis: {
				categories: ['Cultura EBC', 'Comunicación Interpersonal', 'Comunicación Intrapersonal', 'Gestión de Clase', 'Gestión Tecnológica', 'Liderazgo', 'Orientación al alumno', 'Vinculación laboral']
			},
			yAxis: {
        categories: ['Evaluación 1', 'Evaluación 2', 'Evaluación 3', 'Evaluación 4'],
				title: 'Campus'
			},
			colorAxis: {
				min: 0,
				gridLineColor:'#ffffff',
        		minColor: '#FFFFFF',
        		maxColor: '#0066ff'
			},
			legend: {
				align: 'right',
				layout: 'vertical',
				margin: 0,
				verticalAlign: 'top',
				y: 25,
				symbolHeight: 320
			},
			plotOptions:{
            	series:{
                	turboThreshold:5000//set it to a larger threshold, it is by default to 1000
            	}
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
							[0,0,4],[0,1,1],[0,2,4],[0,3,4],
							[1,0,2],[1,1,4],[1,2,1],[1,3,1],
							[2,0,3],[2,1,1],[2,2,2],[2,3,4],
							[3,0,4],[3,1,3],[3,2,4],[3,3,1],
							[4,0,3],[4,1,4],[4,2,3],[4,3,1],
							[5,0,4],[5,1,2],[5,2,2],[5,3,4],
							[6,0,3],[6,1,4],[6,2,4],[6,3,3],
							[7,0,1],[7,1,1],[7,2,1],[7,3,2]
						],
			dataLabels: {
				enabled: true,
				color: 'white',
				style: {
					textShadow: 'none'
				},
			}
		}];

		return RSVP.hash({
			options: chartOptions,
			data: chartData
		});
	}
});
