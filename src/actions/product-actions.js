import * as types from './action-types';
import axios from 'axios';
import { storeId, accessToken } from '../index.js';

export function getProductsFromBase() {
	return (dispatch) => {
		dispatch(startLoadingProducts());
		axios(`https://app.ecwid.com/api/v3/${storeId}/products?token=${accessToken}`)
			.then((response) => {
				dispatch(finishLoadingProducts(response.data));
			});
	}
}

function startLoadingProducts () {
	return {
		type: 'GET_PRODUCT_FROM_BASE',
		isLoading: true,
		payload: [],
	};
}

function finishLoadingProducts (payload) {
	return {
		type: 'GET_PRODUCT_FROM_BASE',
		isLoading: false,
		payload,
	};
}
