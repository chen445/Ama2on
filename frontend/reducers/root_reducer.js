import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './error_reducer';
import entitiesReducer from './entities_reducer'

const RootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
});

export default RootReducer;


