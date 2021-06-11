import { connect } from "react-redux";
import { logout } from "../../actions/session";
import NavBar from "./nav_bar";
import { fetchCartItems } from "../../actions/cart_items";

const calculateCartItems = (cartItems) => {
    let s = 0;
    cartItems.forEach(cartItem => {
        s += cartItem.quantity;
    });
    return s;
};

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  numberOfCartItems: state.entities.cartItems
    ? calculateCartItems(Object.values(state.entities.cartItems))
    : null,
});

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(logout()),
  fetchCartItems: () => dispatch(fetchCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
