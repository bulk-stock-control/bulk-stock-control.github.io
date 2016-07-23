import React, { Component } from 'react';
import { getProductsFromBase } from '../../actions/product-actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchObject: {
				keyword: '',
			},
		};
	}

	searchKeyword(event) {
		const inputValue = event.target.value;
		this.setState((state) => {
			const newState = this.state;
			newState.searchObject.keyword = inputValue;
			return newState
		});
		this.getProducts.call(this, { ...this.state.searchObject, keyword: inputValue });
	}
	searchName() {}
	searchQuant() {}

	getProducts() {
		return this.props.getProductsFromBase(this.state.searchObject)
	}

	render() {

		return (
			<div className="ecwid-g-r">
		    <div className="ecwid-u-1-3">
					<input
						type="text"
						className="form-control"
						onChange={this.searchKeyword.bind(this)}
						defaultValue={this.state.searchObject.keyword}
					/>
      	</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: state.productReducer.products,
	};
}
export default connect(mapStateToProps, { getProductsFromBase })(Filter);
