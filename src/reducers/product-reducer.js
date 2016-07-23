import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  products: {
    items: [],
  },
	isLoading: false,
};

const productReducer = function(state = initialState, action) {

  switch(action.type) {

		case types.GET_PRODUCT_FROM_BASE:
      return {
				...state,
				products: action.payload,
				isLoading: action.isLoading
			};
    case types.SET_PRODUCT_LIMITED:
      {const productIndex = _.findIndex(state.products.items, obj => obj.id === action.payload.id);
      const newItems = state.products.items.map((el, key) => {
        if (key === productIndex) {
          return {
            ...el,
            unlimited: false,
            quantity: 0,
          };
        }
        return el;
      });
      return {
        ...state,
        products: {items: newItems},
      };}
    case types.SET_PRODUCT_UNLIMITED: {
      const productIndex = _.findIndex(state.products.items, obj => obj.id === action.productId);
      const newItems = state.products.items.map((el, key) => {
        if (key === productIndex) {
          return {
            ...el,
            unlimited: true,
          };
        }
        return el;
      });
      return {
        ...state,
        products: {items: newItems},
      };}
    case types.SAVE_PRODUCT_TO_BASE: {
      const productIndex = _.findIndex(state.products.items, obj => obj.id === action.payload.id);
      debugger;
      const newItems = state.products.items.map((el, key) => {
        if (key === productIndex) {
          return {
            ...action.payload,
          };
        }
        return el;
      });
      return {
        ...state,
        products: {items: newItems},
      };
    }

		default: return state
  }

  return state;

}

export default productReducer;
