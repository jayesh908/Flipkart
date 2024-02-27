import { combineReducers } from "redux";
import { productreducer } from "./Productreducer";
 const reducers =combineReducers({
    allproducts:productreducer,

})
export default reducers