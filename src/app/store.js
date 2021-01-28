import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import gridReducer from '../features/Grid/reducer'

// ------ GABUNGKAN REDUCERS --------
let rootReducers = combineReducers({
    grid: gridReducer // <--- berikan nama state untuk reducer `gridReducer`, misalnya `grid`
});
// ------ END GABUNGKAN REDUCERS -------

// buat `composeEnhancers` (2) 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk))); // <--- buat store memanfaatkan fungsi createStore 

export default store
