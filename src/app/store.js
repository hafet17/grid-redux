import { combineReducers, createStore } from 'redux'

import gridReducer from '../features/Grid/reducer'

// ------ GABUNGKAN REDUCERS --------
let rootReducers = combineReducers({
    grid: gridReducer // <--- berikan nama state untuk reducer `gridReducer`, misalnya `grid`
});
// ------ END GABUNGKAN REDUCERS -------

let store = createStore(rootReducers); // <--- buat store memanfaatkan fungsi createStore 

export default store
