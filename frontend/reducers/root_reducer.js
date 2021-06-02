import { combineReducers } from 'redux';


const dummyReducer = (state) => {
    return {}
}

const RootReducer = combineReducers({
  dummyReducer
});

export default RootReducer;