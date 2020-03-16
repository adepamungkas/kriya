import { combineReducers } from 'redux';
import productReducer from './product/productReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    product:productReducer,
    user: userReducer
})

export default rootReducer