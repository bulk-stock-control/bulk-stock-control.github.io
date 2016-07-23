import React, { Component } from 'react';
import { setProductUnLimited, saveProductToBase } from '../../actions/product-actions.js';
import { connect } from 'react-redux';


class QuantityManager extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: this.props.quantity,
		}
		this.handlerChange.bind(this);
	}

	handlerChange(event) {
		let value = event.target.value;
		value = parseInt(value);
		this.setState({
			quantity: value,
		});
	}

	inciment() {
		const newValue = this.state.quantity + 1;
		this.setState({
			quantity: newValue,
		});

	}

	decriment() {
		const newValue = this.state.quantity - 1;
		this.setState({
			quantity: newValue,
		});
	}

	setUnlimited() {
		this.props.setProductUnLimited(this.props.productId);
	}

	handlerSave() {
		this.props.saveProductToBase(this.props.product, this.state.quantity);
		this.props.cancelEdit();
	}

	render() {
		return (
			<div className="ecwid-g-r">
   			<div className="ecwid-u-1-4"></div>
   			<div className="ecwid-u-2-4">
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div>
							<button
								onClick={this.decriment.bind(this)}
								className="btn btn-primary btn-small"
							>
								-
							</button>
						</div>
						<div>
							<input
								type="number"
								className="form-control btn-small"
								value={this.state.quantity}
								onChange={this.handlerChange.bind(this)}
							/>
						</div>
						<div>
							<button
								onClick={this.inciment.bind(this)}
								className="btn btn-primary btn-small"
							>
								+
							</button>
						</div>
						<div>
							<button
								onClick={this.setUnlimited.bind(this)}
								className="btn btn-info btn-small"
							>
								Set Unlimited
							</button>
						</div>
						<div>
							<button
								className="btn btn-success"
								onClick={this.handlerSave.bind(this)}
							>
								Save
							</button>
						</div>
					</div>
      	</div>
   			<div className="ecwid-u-1-4"></div>
   		</div>
		);
	}
}

export default connect(null, { setProductUnLimited, saveProductToBase })(QuantityManager);
