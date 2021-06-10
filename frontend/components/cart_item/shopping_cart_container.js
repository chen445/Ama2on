import { connect } from "react-redux";
import ShopCart from "./shoping_cart";
import {
  createCartItem,
  deleteCartItem,
  fetchCartItems,
} from "../../actions/cart_items";

const mapStateToProps = (state) => ({
  cartItems: state.entities.cartItems
});

const mapDispatchToProps = (dispatch) => ({
  deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
  fetchCartItems: () => dispatch(fetchCartItems()),
  createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);
