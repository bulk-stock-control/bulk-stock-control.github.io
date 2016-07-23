import * as types from '../actions/action-types';
const initialState = {
  prosucts: [],
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

		default: return state
  }

  return state;

}

export default productReducer;
