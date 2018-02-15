import React, { Component } from 'react';

import data from '../token.json';

class Income extends Component {

	componentDidMount(){
		let url = 'http://reds.urbandataanalytics.com/urban/api/v1.0/indicators?keys=renthog_06_13_M&operations=null&geo_json={"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.6938510999999608,40.4291744]},"properties":{"admin_levels":[3,6]}}]}&period_codes=2017Q3';
		let headers = new Headers();

		headers.append('Authorization', 'Token ' + data.token);

	fetch(url, {method:'GET',
		headers: headers
	})
	.then(response => response.json())
	.then(json => console.log(json));

	}

	render() {
		return (
			<div className="testfetch">

			</div>
		);
	}
}

export default Income;
