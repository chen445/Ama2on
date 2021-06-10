import React from "react";
import { Link } from "react-router-dom";

class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedQty: {},
    };
    this.empty = this.empty.bind(this);
    this.update = this.update.bind(this);
    this.getQty = this.getQty.bind(this);
    this.changeQty = this.changeQty.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  update(cartItemId) {
    const cartItem = this.props.cartItems[cartItemId];
    if (
      !this.state.updatedQty[cartItemId] ||
      this.state.updatedQty[cartItemId] === cartItem.quantity
    ) {
      return;
    }

    let updatedCartItem = {
      product_id: cartItem.product_id,
      quantity: this.state.updatedQty[cartItemId] - cartItem.quantity,
    };

    this.props.createCartItem(updatedCartItem).then(() => {
      let updatedQty = Object.assign({}, this.state.updatedQty);
      updatedQty[cartItemId] = undefined;
      this.setState({
        updatedQty,
      });
    });
  }

  getQty(cartItemId) {
    if (this.state.updatedQty[cartItemId] !== undefined) {
      return this.state.updatedQty[cartItemId];
    } else {
      return this.props.cartItems[cartItemId].quantity;
    }
  }

  changeQty(newQty, cartItemId) {
    let updatedQty = Object.assign({}, this.state.updatedQty);
    updatedQty[cartItemId] = newQty;
    this.setState({
      updatedQty,
    });
  }

  empty() {
    return (
      <div>
        Your Ama2on Cart is empty. Check your Saved for later items below or
        continue shopping.
      </div>
    );
  }

  delete(cartItemId) {
    this.props.deleteCartItem(cartItemId);
  }

  render() {
    if (!this.props.cartItems || Object.values(this.props.cartItems).length === 0) {
      return this.empty();
    }

    let subTotal = 0;
    Object.values(this.props.cartItems).forEach((cartItem) => {
      subTotal += parseFloat(cartItem.price) * parseFloat(cartItem.quantity);
    });

    return (
      <div className="cart-form">
        <div className="cart-display">
          <h1>Shopping Cart</h1>
          <span>Price</span>
          {Object.values(this.props.cartItems).map((cartItem, i) => {
            return (
              <div className="cart-left-section">
                <div className="cart-img">
                  <Link to={`/products/${cartItem.product_id}`}>
                    <img src={cartItem.mainPhoto} alt="product-img" />
                  </Link>
                </div>
                <div className="cart-description">
                  <div>
                    <Link to={`/products/${cartItem.product_id}`}>
                      {cartItem.productName}
                    </Link>
                  </div>
                  <h4> In Stock </h4>
                  <h3>Free Return</h3>
                  <label>
                    Qty
                    <input
                      type="text"
                      value={this.getQty(cartItem.id)}
                      onChange={(event) =>
                        this.changeQty(event.currentTarget.value, cartItem.id)
                      }
                    />
                  </label>
                  <button
                    className="update-cart"
                    onClick={() => this.update(cartItem.id)}
                  >
                    Update
                  </button>
                  <button
                    className="delete-cart"
                    onClick={() => this.delete(cartItem.id)}
                  >
                    Delete
                  </button>
                </div>
                <div className="cart-price">
                  <h3>${parseFloat(cartItem.price).toFixed(2)}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-right-section">
          <div className="check-out">
              <h4>SubTotal:</h4>
              <span>${subTotal.toFixed(2)}</span>

            <br />
            <button>Process Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopCart;
