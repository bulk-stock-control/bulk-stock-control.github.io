import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductsFromBase } from '../../actions/product-actions';

import Filter from '../Filter';
import Grid from '../Grid';

class Main extends Component {
	componentWillMount () {
		this.props.getProductsFromBase();
	}

	render() {
		return (
			<div className="ecwid-g-r normalized">
		    <div className="ecwid-u-1"><Grid /></div>
			</div>
		);
	}
}


export default connect(null, {getProductsFromBase})(Main);
