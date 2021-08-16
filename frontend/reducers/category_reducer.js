import { RECEIVE_CATEGORY, RECEIVE_ALL_CATEGORY } from "../actions/category";

const categoryReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORY:
      return Object.assign({}, state, {
        [action.category.id]: action.category,
      });
    case RECEIVE_ALL_CATEGORY:
      return Object.assign({}, action.categories);
    default:
      return state;
  }
};

export default categoryReducer;
