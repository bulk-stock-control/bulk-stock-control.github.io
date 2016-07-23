import * as types from './action-types';
import axios from 'axios';
import { storeId, accessToken } from '../index.js';

export function getProductsFromBase(params = {}) {
	const { keyword = '' } = params;
	return (dispatch) => {
		dispatch(startLoadingProducts());
		axios(`
			https://app.ecwid.com/api/v3/
			${storeId}
			/products?
			keyword=${keyword}&
			token=${accessToken}`)
			.then((response) => {
				dispatch(finishLoadingProducts(response.data));
			});
	}
}

function startLoadingProducts () {
	return {
		type: 'GET_PRODUCT_FROM_BASE',
		isLoading: true,
		payload: {},
	};
}
function finishLoadingProducts (payload) {
	return {
		type: 'GET_PRODUCT_FROM_BASE',
		isLoading: false,
		payload,
	};
}


export function setProductLimited(productId) {
		return (dispatch) => {
			axios.put(`https://app.ecwid.com/api/v3/${storeId}/products/${productId}?token=${accessToken}`, {
			"unlimited": false,
		})
			.then(() => {
				axios(`https://app.ecwid.com/api/v3/${storeId}/products/${productId}?token=${accessToken}`)
					.then((response)=> {
						dispatch({
							type: 'SET_PRODUCT_LIMITED',
							payload: response.data,
						})
					})
			})


	}
}

export function setProductUnLimited(productId) {
	return (dispatch) => {
		axios.put(`https://app.ecwid.com/api/v3/${storeId}/products/${productId}?token=${accessToken}`, {
		"unlimited": true,
	})
		.then((response)=> {
			dispatch({
				type: 'SET_PRODUCT_UNLIMITED',
				productId,
			})

		})
	}
}

export function saveProductToBase(product, quantity) {
	return dispatch => {
		axios.put(`https://app.ecwid.com/api/v3/${storeId}/products/${product.id}?token=${accessToken}`, {
			...product,
			quantity,
		} )
			.then(response => dispatch({
				type: 'SAVE_PRODUCT_TO_BASE',
				payload: {
					...product,
					quantity,
				},
			}));
	}
}
