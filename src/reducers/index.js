import { combineReducers } from 'redux';
// Reducers
import productReducer from './product-reducer';
// Combine Reducers
var reducers = combineReducers({
    productReducer,
});
export default reducers;
