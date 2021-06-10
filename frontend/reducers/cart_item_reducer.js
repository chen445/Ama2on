import { RECEIVE_ALL_CART_ITEMS, RECEIVE_CART_ITEM, DELETE_CART_ITEM } from "../actions/cart_items";

const cartItemReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART_ITEM:
      return Object.assign({}, state, {
        [action.cartItem.id]: action.cartItem,
      });
    case RECEIVE_ALL_CART_ITEMS:
      return Object.assign({}, action.cartItems);
    case DELETE_CART_ITEM:
      const nextState = Object.assign({}, state);
      delete nextState[action.cartItemId];
      return nextState;
    default:
      return state;
  }
};

export default cartItemReducer;
