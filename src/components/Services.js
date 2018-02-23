import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import data from '../token.json';

class Services extends Component {

	render() {
		var config = {
			chart: { type: 'bar', height: "200"},
			title: { text: '' },
			credits: {enabled: false},

			xAxis: {
				gridLineWidth: 1,
				gridLineColor: "#eff2f7",
				categories: ['transporte'],
				title: {
					text: null
				}
			},
			yAxis: {
				gridLineWidth: 1,
				gridLineColor: "#eff2f7",
				title: {
					align: 'high',
					text: '%',
					offset: 0,
					text: 'Evolución',
					rotation: 0,
					y: -20
				},
				min: 0,
				max:100,
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				valueSuffix: ' %'
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				}
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'top',
				x: -40,
				y:  -10,
				floating: true,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true
			},
			credits: {
				enabled: false
			},
			series: [{
				color: "#ca1c24",
				name: 'Parkings',
				data: [this.props.servicesParkings]
			}, {
				color: "#2d303b",
				name: 'Transporte Público',
				data: [this.props.servicesTransport]
			}]
		}

		var config2 = {
			chart: { type: 'bar', height: "200"},
			title: { text: '' },
			credits: {enabled: false},

			xAxis: {
				categories: ['Educación'],
				title: {
					text: null
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: '%',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				valueSuffix: ' %'
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				}
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'top',
				x: -40,
				y: -10,
				floating: true,
				borderWidth: 1,
				backgroundColor: '#FFFFFF',
				shadow: true
			},
			credits: {
				enabled: false
			},
			series: [{
				color: "#ca1c24",
				name: 'Guarderias',
				data: [this.props.servicesDaycare]
			},
			{
				color: "#2d303b",
				name: 'Colegios',
				data: [this.props.servicesSchools]
			}]
		}

		return (
			<div className="services">
				<div className="services__title">
					<h3>Servicios</h3>
				</div>
				<div className="services__container">
					<div className="transport_graphic">
						<ReactHighcharts config = {config} ></ReactHighcharts>
					</div>
					<div className="education_graphic">
						<ReactHighcharts config = {config2} ></ReactHighcharts>
					</div>
				</div>
			</div>
		);
	}
}

export default Services;
