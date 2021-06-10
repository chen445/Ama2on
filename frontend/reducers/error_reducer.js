import { combineReducers } from 'redux';

import sessionErrors from './session_errors_reducer';
import productErrors from './product_errors_reducer';
import reviewErrors from './review_errors_reducers';
import cartItemsErrors from './cart_items_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrors,
  product: productErrors,
  review: reviewErrors,
  cartItem: cartItemsErrors,
});

export default errorsReducer;

