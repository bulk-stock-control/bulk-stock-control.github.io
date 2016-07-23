import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../Product';
import QuantityManager from '../../containers/quantityManager';
import UlimitedTriger from '../../containers/ulimitedTriger';

class Grid extends Component {

	getPropductsRows(products) {
		if(!!products) {
			return products.map((el, key) => (
				<Product data={el}  key={key} />
			))
		}
		return null;
	}

	getTrigger(unlimited, quantity, productId) {
		if (unlimited) {
			return <UlimitedTriger productId={productId} unlimited />;
		}
		return (<QuantityManager quantity={quantity} productId={productId} />);
	}

	render() {
		return (
			<div>
				{this.getPropductsRows(this.props.products.items)}
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		products: state.productReducer.products,
	};
}
export default connect(mapStateToProps, {})(Grid);
