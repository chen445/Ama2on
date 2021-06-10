import * as APICartItem from "../util/cart_items_api_util";

export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS";
export const RECEIVE_CART_ITEM_ERRORS = "RECEIVE_CART_ITEM_ERRORS";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

export const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem,
});

export const receiveCartItems = (cartItems) => ({
  type: RECEIVE_ALL_CART_ITEMS,
  cartItems,
});

export const removeCartItem = (cartItemId) => ({
  type: DELETE_CART_ITEM,
  cartItemId,
});

export const receiveCartItemErrors = (errors) => ({
  type: RECEIVE_CART_ITEM_ERRORS,
  errors,
});

export const fetchCartItems = () => (dispatch) =>
  APICartItem.fetchCartItems().then(
    (cartItems) => dispatch(receiveCartItems(cartItems)),
    (error) => dispatch(receiveCartItemErrors(error.responseJSON))
);

export const createCartItem = (cartItem) => (dispatch) =>
  APICartItem.createCartItem(cartItem).then(
    (cartItem) => dispatch(receiveCartItem(cartItem)),
    (error) => dispatch(receiveCartItemErrors(error.responseJSON))
);


  export const deleteCartItem = (cartItemId) => (dispatch) =>
    APICartItem.deleteCartItem(cartItemId).then(
      () => dispatch(removeCartItem(cartItemId)),
      (error) => dispatch(receiveCartItemErrors(error.responseJSON))
);




