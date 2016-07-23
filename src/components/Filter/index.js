import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input';

const SKU = [123,123,123,123,123];

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchSKU: '',
			searchName: '',
			searchQuant: '',
		};
	}

	searchSKU() {}
	searchName() {}
	searchQuant() {}

	render() {
		const filteredSKU = SKU.filter(createFilter(this.state.searchSKU))
		return (
			<div className="ecwid-g-r">
		    <div className="ecwid-u-1-3">
      		<SearchInput
						className="search-input form-control"
						onChange={this.searchSKU}
					/>
      	</div>
				<div className="ecwid-u-1-3">
      		<SearchInput
						className="form-control"
						onChange={this.searchName}
					/>
      	</div>
				<div className="ecwid-u-1-3">
      		<SearchInput
						className="form-control"
						onChange={this.searchQuant}
					/>
      	</div>
			</div>
		);
	}
}

export default Filter;
