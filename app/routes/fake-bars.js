import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
	model(){

		let chartOptions = {
    	chart: {
    	    type: 'column'
    	},
    	title: {
    	    text: 'Gráfica General Por '
    	},
    	xAxis: {
    	    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    	},
    	yAxis: {
    	    min: 0,
    	    title: {
    	        text: 'Total fruit consumption'
    	    }
    	},
    	tooltip: {
    	    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    	    shared: true
    	},
    	plotOptions: {
    	    column: {
    	        stacking: 'percent'
    	    }
    	},
    	series: [
			{
    	    name: 'Nivel Produciendo',
    	    data: [5, 3, 4, 7, 2]
    	}, {
    	    name: 'Nivel Gestándose',
    	    data: [2, 2, 3, 2, 1]
    	}, {
    	    name: 'Nivel Impreciso',
    	    data: [1, 4, 3, 2, 1]
    	}, {
    	    name: 'Nivel Latente',
    	    data: [3, 4, 4, 2, 5]
    	}
			]
		};

		return RSVP.hash({
			options: chartOptions,
		});
	}
});
