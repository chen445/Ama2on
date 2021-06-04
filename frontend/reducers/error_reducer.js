import { combineReducers } from 'redux';

import sessionErrors from './session_errors_reducer';
import productErrors from './product_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrors,
  product: productErrors,
});

export default errorsReducer;

