import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

	model(){
		var colors = Highcharts.getOptions().colors,
		categories = [
		"Produciendo",
		"Gestandose", 
		"Impreciso",
		"Latente"
		],
		data = [
		{
			"y": 23.37,
			"color": colors[2],
			"dataForCharts": {
				"name": "Produciendo",
				"categories": [
				"Cultura EBC",
				"Comunicacion Interpersonal",
				"Comunicacion Intrapersonal",
				"Gestion de Clase",
				"Gestion Tecnologica",
				"Liderazgo",
				"Orientacion al alumno",
				"Vinculacion laboral"
				],
				"data": [
				3,
				2,
				4,
				3,
				2,
				2,
				1,
				1
				]
			}
		},
		{
			"y": 22.07,
			"color": colors[1],
			"dataForCharts": {
				"name": "Gestandose",
				"categories": [
				"Cultura EBC",
				"Comunicacion Interpersonal",
				"Comunicacion Intrapersonal",
				"Gestion de Clase",
				"Gestion Tecnologica",
				"Liderazgo",
				"Orientacion al alumno",
				"Vinculacion laboral"
				],
				"data": [
				3,
				2,
				4,
				3,
				1,
				1,
				2,
				1
				]
			}
		},
		{
			"y": 24.67,
			"color": colors[0],
			"dataForCharts": {
				"name": "Impreciso",
				"categories": [
				"Cultura EBC",
				"Comunicacion Interpersonal",
				"Comunicacion Intrapersonal",
				"Gestion de Clase",
				"Gestion Tecnologica",
				"Liderazgo",
				"Orientacion al alumno",
				"Vinculacion laboral"
				],
				"data": [
				3,
				1,
				4,
				3,
				2,
				2,
				2,
				2
				]
			}
		},
		{
			"y": 29.87,
			"color": colors[3],
			"dataForCharts": {
				"name": "Latente",
				"categories": [
				"Cultura EBC",
				"Comunicacion Interpersonal",
				"Comunicacion Intrapersonal",
				"Gestion de Clase",
				"Gestion Tecnologica",
				"Liderazgo",
				"Orientacion al alumno",
				"Vinculacion laboral"
				],
				"data": [
				3,
				1,
				4,
				3,
				2,
				2,
				4,
				4
				]
			}
		}
		],
		competitions = [],
		level = [],
		i,
		j,
		k,
		suma = 0,
		dataLen = data.length,
		drillDataLen,
		brightness;

		for (i = 0; i < dataLen; i++) {
			let datos = data[i]
			let counter = datos.dataForCharts.data.length
			for (k = 0; k < counter; k++){
				suma = suma + datos.dataForCharts.data[k]
			}
		}

		for (i = 0; i < dataLen; i += 1) {
			competitions.push({
				name: categories[i],
				y: data[i].y,
				color: data[i].color
			});
			drillDataLen = data[i].dataForCharts.data.length;
			for (j = 0; j < drillDataLen; j += 1) {
				brightness = 0.2 - (j / drillDataLen) / 5;
				level.push({
					name: data[i].dataForCharts.categories[j],
					y: data[i].dataForCharts.data[j],
					color: Highcharts.Color(data[i].color).brighten(brightness).get()
				});
			}
		}

		let chartOptions = {
			chart: {
				type: 'pie'
			},
			title: {
				text: 'Grafica de pie de un campus por categorias'
			},
			subtitle: {
				text: 'Evaluacion'
			},
			plotOptions: {
				pie: {
					shadow: false,
					center: ['50%', '50%']
				}
			},
			tooltip: {
				valueSuffix: '%'
			},
			series: [{
				name: 'Competencia',
				data: competitions,
				size: '60%',
				dataLabels: {
					formatter: function () {
						return this.y > 5 ? this.point.name : null;
					},
					color: '#ffffff',
					distance: -30
				}
			}, {
				name: 'nivel',
				data: level,
				size: '80%',
				innerSize: '60%',
				dataLabels: {
					formatter: function () {
						return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
						this.y + '%' : null;
					}
				},
				id: 'nivel'
			}],
			responsive: {
				rules: [{
					condition: {
						maxWidth: 40
					},
					chartOptions: {
						series: [{
							id: 'nivel',
							dataLabels: {
								enabled: false
							}
						}]
					}
				}]
			}
		};
		return RSVP.hash({
			options: chartOptions,
		});
	}
});
