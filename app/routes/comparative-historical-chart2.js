import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

	model(){
		let chartOptions = {
			title: {
				text: 'Grafica General de Historicos'
			},

			subtitle: {
				text: 'Evaluaciones'
			},

			yAxis: {
				title: {
					text: 'Nivel'
				}
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle'
			},

			plotOptions: {
				series: {
					label: {
						connectorAllowed: false
					},
					pointStart: 2010
				}
			},

			series: [{
				name: 'LEO',
				data: [1,2,3,4,4,3,2,1]
			}, {
				name: 'CHI',
				data: [2,1,3,2,1,4,4,3]
			}, {
				name: 'EMP',
				data: [1,2,2,3,1,2,3,4]
			}, {
				name: 'QRO',
				data: [1,2,3,4,4,2,1,3]
			}, {
				name: 'TLA',
				data: [3,2,4,3,4,1,2,3]
			}, {
				name: 'TOL',
				data: [2,3,1,4,3,2,1,4]
			}, {
				name: 'VIR',
				data: [1,2,2,4,4,2,1,3]
			}, {
				name: 'SLP',
				data: [1,2,2,2,4,3,2,1]
			}, {
				name: 'AGS',
				data: [1,2,4,3,1,2,2,4]
			}, {
				name: 'PCH',
				data: [3,2,1,3,2,2,1,3]
			}, {
				name: 'MER',
				data: [1,4,1,2,4,2,3,2]
			}, {
				name: 'GDL',
				data: [4,3,2,1,2,2,4,4]
			}, {
				name: 'CMX',
				data: [1,4,1,2,4,3,1,2]
			}],

			responsive: {
				rules: [{
					condition: {
						maxWidth: 500
					},
					chartOptions: {
						legend: {
							layout: 'horizontal',
							align: 'center',
							verticalAlign: 'bottom'
						}
					}
				}]
			}
		};
			return RSVP.hash({
				options: chartOptions,
			});
	}
});
