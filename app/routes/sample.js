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
				text: 'Evaluación 2017'
			},
			xAxis: {
				categories: ['Cultura EBC', 'Comunicación Interpersonal', 'Comunicación Intrapersonal', 'Gestión de Clase', 'Gestión Tecnológica', 'Liderazgo', 'Orientación al alumno', 'Vinculación laboral']
			},
			yAxis: {
				categories: ['Campus LEO', 'Campus CHI', 'Campus EMP', 'Campus QRO', 'Campus TLA', 'Campus TOL', 'Campus VIR', 'Campus SLP', 'Campus AGS', 'Campus PCH', 'Campus MER', 'Campus GDL', 'Campus CMX'],
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
							[0,0,1],[0,1,1],[0,2,4],[0,3,4],[0,4,4],[0,5,1],[0,6,3],[0,7,1],[0,8,2],[0,9,2],[0,10,1],[0,11,4],[0,12,1],
							[1,0,2],[1,1,4],[1,2,1],[1,3,1],[1,4,3],[1,5,2],[1,6,4],[1,7,3],[1,8,3],[1,9,1],[1,10,2],[1,11,2],[1,12,3],
							[2,0,3],[2,1,1],[2,2,2],[2,3,4],[2,4,2],[2,5,3],[2,6,1],[2,7,2],[2,8,1],[2,9,4],[2,10,3],[2,11,3],[2,12,4],
							[3,0,4],[3,1,3],[3,2,4],[3,3,1],[3,4,1],[3,5,4],[3,6,2],[3,7,2],[3,8,2],[3,9,3],[3,10,2],[3,11,2],[3,12,1],
							[4,0,3],[4,1,4],[4,2,3],[4,3,1],[4,4,1],[4,5,2],[4,6,4],[4,7,3],[4,8,4],[4,9,1],[4,10,3],[4,11,3],[4,12,2],
							[5,0,4],[5,1,2],[5,2,2],[5,3,4],[5,4,2],[5,5,3],[5,6,3],[5,7,4],[5,8,2],[5,9,2],[5,10,4],[5,11,4],[5,12,3],
							[6,0,3],[6,1,4],[6,2,4],[6,3,3],[6,4,3],[6,5,1],[6,6,1],[6,7,1],[6,8,3],[6,9,3],[6,10,4],[6,11,1],[6,12,4],
							[7,0,1],[7,1,1],[7,2,1],[7,3,2],[7,4,3],[7,5,4],[7,6,2],[7,7,4],[7,8,1],[7,9,4],[7,10,2],[7,11,2],[7,12,1],
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
