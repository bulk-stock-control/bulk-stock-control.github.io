import React from 'react';
import { setProductLimited } from '../../actions/product-actions.js';
import { connect } from 'react-redux';

class ulimitedTriger extends React.Component {
	handlerClick() {
		this.props.setProductLimited(this.props.productId)
	}
	render() {
		return (
			<div className="ecwid-g-r">
   			<div className="ecwid-u-1-4"></div>
   			<div className="ecwid-u-2-4">
					<button
						className="btn btn-info"
						onClick={this.handlerClick.bind(this)}
					>
						Set limited
					</button>
					<button className="btn btn-success" onClick={this.props.cancelEdit}>Save</button>
				</div>
   			<div className="ecwid-u-1-4"></div>
   		</div>
		);
	}
}

export default connect(null, {setProductLimited})(ulimitedTriger)
