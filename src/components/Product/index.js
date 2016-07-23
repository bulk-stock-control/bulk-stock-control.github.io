import React from 'react';
import QuantityManager from '../../containers/quantityManager';
import UlimitedTriger from '../../containers/ulimitedTriger';


export default class Product extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			edit: false,
		}
	}

	getContent() {
		if (this.state.edit) {
			return this.getEditor();
		}
		return this.getVisual.call(this);
	}
	getEditor() {
		return this.getTrigger( this.props.data );
	}
	getVisual(){
		return (
			<div className="ecwid-g-r">
				<div className="ecwid-u-3-4">
    			{this.props.data.name} <br/>
					<small>{this.props.data.sku}</small>
    		</div>
				<div className="ecwid-u-1-4" style={{ textAlign: 'center' }}>
					{this.props.data.unlimited ? 'UNLIMITED' : this.props.data.quantity}
    			{" "}
					<button
						className="btn btn-success btn-small"
						onClick={this.makeEditable.bind(this)}
					>
     				<i className="icon-edit"/>
     			</button>
    		</div>
			</div>
		);
	}
	getTrigger(product) {
		if (product.unlimited) {
			return (
				<UlimitedTriger
					productId={product.id}
					unlimited={product.unlimited}
					cancelEdit={this.makeNotEditable.bind(this)}
				/>
			);
		}
		return (
			<QuantityManager
				quantity={product.quantity}
				productId={product.id}
				product={product}
				cancelEdit={this.makeNotEditable.bind(this)}
			/>);
	}
	makeEditable() {
		this.setState({
			edit: true,
		});
	}
	makeNotEditable() {
		this.setState({
			edit: false,
		});
	}

	render() {
		return (
			<div className="product__row">
   			{this.getContent.call(this)}
   		</div>
		);
	}
}
