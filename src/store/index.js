import {createStore,combineReducers} from "redux"
import productsReducer from "./reducers/productsReducer"
const root = combineReducers({
    productsReducer
});
const store = createStore(root);
export default store; 
