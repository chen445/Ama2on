import { connect } from "react-redux";
import { logout } from "../../actions/session";
import NavBar from "./nav_bar";

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
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
