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
				text: 'Evaluación'
			},
			xAxis: {
				categories: ['Cultura EBC', 'Comunicación Interpersonal', 'Comunicación Intrapersonal', 'Gestión de Clase', 'Gestión Tecnológica', 'Liderazgo', 'Orientación al alumno', 'Vinculación laboral']
			},
			yAxis: {
				categories: ['Campus CMX', 'Campus LEO', 'Campus GDL', 'Campus SNL', 'Campus EMP', 'Campus VIR', 'Campus CMX', 'Campus LEO', 'Campus GDL', 'Campus SNL', 'Campus EMP', 'Campus VIR', 'Campus CMX'],
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
							[0,0,1],[0,1,1],[0,2,4],[0,3,4],[0,4,4],[0,5,1],[0,6,1],[0,7,4],[0,8,4],[0,9,4],[0,10,1],[0,11,4],[0,12,4],
							[1,0,2],[1,1,4],[1,2,1],[1,3,1],[1,4,3],[1,5,1],[1,6,1],[1,7,4],[1,8,4],[1,9,4],[1,10,1],[1,11,4],[1,12,4],
							[2,0,3],[2,1,1],[2,2,2],[2,3,4],[2,4,2],[2,5,1],[2,6,1],[2,7,4],[2,8,4],[2,9,4],[2,10,1],[2,11,4],[2,12,4],
							[3,0,4],[3,1,3],[3,2,4],[3,3,1],[3,4,1],[3,5,1],[3,6,1],[3,7,4],[3,8,4],[3,9,4],[3,10,1],[3,11,4],[3,12,4],
							[4,0,3],[4,1,4],[4,2,3],[4,3,1],[4,4,1],[4,5,1],[4,6,1],[4,7,4],[4,8,4],[4,9,4],[4,10,1],[4,11,4],[4,12,4],
							[5,0,4],[5,1,2],[5,2,2],[5,3,4],[5,4,2],[5,5,1],[5,6,1],[5,7,4],[5,8,4],[5,9,4],[5,10,1],[5,11,4],[5,12,4],
							[6,0,3],[6,1,4],[6,2,4],[6,3,3],[6,4,3],[6,5,1],[6,6,1],[6,7,4],[6,8,4],[6,9,4],[6,10,1],[6,11,4],[6,12,4],
							[7,0,1],[7,1,1],[7,2,1],[7,3,2],[7,4,3],[7,5,1],[7,6,1],[7,7,4],[7,8,4],[7,9,4],[7,10,1],[7,11,4],[7,12,4]
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
