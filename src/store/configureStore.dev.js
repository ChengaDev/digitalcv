import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

/**
 * Create the redux store using the root reducer, initial state, and any required middlewares
 * In this dev mode configureStore, we can also add middlewares required only for development
 * @param {object} initialState 
 */
export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}