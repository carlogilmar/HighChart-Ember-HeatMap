import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
	model(){

		let chartOptions = {
    	chart: {
    	    type: 'column'
    	},
    	title: {
    	    text: 'Gráfica General De Prospectos'
    	},
    	xAxis: {
				categories: ['Cultura EBC', 'Comunicación Interpersonal', 'Comunicación Intrapersonal', 'Gestión de Clase', 'Gestión Tecnológica', 'Liderazgo', 'Orientación al alumno', 'Vinculación laboral']
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
