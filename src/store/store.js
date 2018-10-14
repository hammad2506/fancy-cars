import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import carsReducer from '../reducers/cars';
import filtersReducer from '../reducers/filters';

const store = () => (
    createStore(combineReducers({
        cars: carsReducer,
        filters: filtersReducer
    }), applyMiddleware(thunk))
);

export default store;
