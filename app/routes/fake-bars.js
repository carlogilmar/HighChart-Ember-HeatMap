import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
	model(){

		let chartOptions = {
			colors: ['rgba(54, 162, 235, 0.2)','rgba(75, 192, 192, 0.2)','rgba(255, 206, 86, 0.2)','rgba(255, 99, 132, 0.2)'],
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
    	        text: '% de Prospectos Totales que realizaron la Evaluación'
    	    }
    	},
    	tooltip: {
    	    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} Prospectos</b> ({point.percentage:.0f}%)<br/>',
    	    shared: true
    	},
    	plotOptions: {
    	    column: {
    	        stacking: 'percent'
    	    },
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
