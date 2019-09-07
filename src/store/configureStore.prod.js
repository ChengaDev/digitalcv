import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

/**
 * Create the redux store using the root reducer, initial state, and any required middlewares
 * @param {object} initialState 
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        );
        composeEnhancers(applyMiddleware(thunk))
}