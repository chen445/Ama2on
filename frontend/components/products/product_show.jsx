import React from "react";
import { Link } from "react-router-dom";
import ReviewShowContainer from "../Review/review_show_container";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeImg: 0, quantity: 1 , showpop: false};

    this.renderStars = this.renderStars.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.popup = this.popup.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", (event) => {
      this.setState({showpop: false})
    });
    this.props.fetchProduct(this.props.match.params.productId);
  }


  popup(){
    if (!this.state.showpop){
      return null;
    }else{
      return (
        <div className="pop-up">
          <div className="pop-up-content">
            <h3>Added to your bag</h3>
            <div>
              <Link to="/">Continue Shopping</Link>
              <Link to="/cart">View Cart</Link>
            </div>
          </div>
        </div>
      );
    }

  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  starClass(starIndex, rating) {
    return starIndex > rating
      ? "product-show-star-unchecked"
      : "product-show-star-checked";
  }

  renderStars(rating) {
    const stars = ["★", "★", "★", "★", "★"];
    return (
      <div style={{ marginTop: "12px", marginBottom: "12px" }}>
        {stars.map((star, i) => (
          <span key={i} className={this.starClass(i + 1, rating)}>
            {" "}
            {star}
          </span>
        ))}
      </div>
    );
  }

  addToCart() {
    const cartItem = {
      product_id: this.props.product.id,
      quantity: this.state.quantity,
    };
    this.props.createCartItem(cartItem).then(()=>this.setState({showpop: true}));
  }

  render() {
    if (!this.props.product) {
      return null;
    }
    return (
      <div className="detail-show">
        <div className="product-show">
          <div className="produnct-images-container">
            <div className="sub-slider">
              {this.props.product.photosUrl.map((photo, i) => (
                <img
                  onMouseEnter={() => {
                    this.setState({
                      activeImg: i,
                    });
                  }}
                  className="sub-photos"
                  key={photo.photoUrl}
                  src={photo.photoUrl}
                  alt="product-detail-photo"
                ></img>
              ))}
            </div>
            <div className="slide-wrapper">
              <img
                className="main-photo"
                src={
                  this.props.product.photosUrl[this.state.activeImg].photoUrl
                }
              />
            </div>
          </div>
          <div className="product-description">
            <h1>{this.props.product.product_name}</h1>
            {this.renderStars(this.props.product.average_rating)}
            <h2 className="seller">
              Sold by {this.props.product.seller_first_name}
            </h2>
            <div className="price">
              <h4>Price:</h4>
              <h6>${this.props.product.price.toFixed(2)}</h6>
              <h5>& FREE Shipping</h5>
            </div>
            <div className="description">
              <p>
                About this item <br />
              </p>
              <span>{this.props.product.product_description}</span>
            </div>
          </div>
          <div className="product-checkout">
            <h3>${this.props.product.price.toFixed(2)}</h3>
            <h4>& FREE Return</h4>
            <br />
            <h5>In Stock</h5>
            <div className="dropdown-content">
              <label className="dropdown">Qty</label>
              <select
                className="product-quanitity"
                onChange={this.update("quantity")}
              >
                <option value="1" defaultValue="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
              </select>
            </div>
            <button className="addTocart" onClick={() => this.addToCart()}>
              Add to Cart
            </button>
            <button className="buynow">Buy Now</button>
            {this.popup()}
          </div>
        </div>

        <ReviewShowContainer avgRating={this.props.product.average_rating} />
      </div>
    );
  }
}

export default ProductShow;
