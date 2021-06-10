import { RECEIVE_CART_ITEM_ERRORS} from "../actions/cart_items";

const cartItemsErrors = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART_ITEM_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
export default cartItemsErrors;
