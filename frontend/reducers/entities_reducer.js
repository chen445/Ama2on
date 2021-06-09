import {combineReducers} from 'redux';

import usersReducer from './users_reducer'
import productReducer from './product_reducer'
import reviewReducer from './review_reducer'

export default combineReducers({
    users: usersReducer,
    products: productReducer,
    reviews: reviewReducer,
})
