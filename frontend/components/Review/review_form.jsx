import React from "react";
import { BsStar } from "react-icons/bs";
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.review.title,
      body: this.props.review.body,
      rating: this.props.review.rating,
    };

    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.navigateToProductShow = this.navigateToProductShow.bind(this);
    this.renderProductImage = this.renderProductImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  navigateToProductShow() {
    const url = `/products/${this.props.match.params.productId}`;
    this.props.history.push(url);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleClick(e) {

    e.preventDefault();
    const productId = parseInt(this.props.match.params.productId);
    const review = Object.assign({}, this.state, { product_id: productId });
    this.props.createReview(review).then(() => {
        this.navigateToProductShow();
    }).error((e)=>{
        console.log("has an error: " + e);
    });
  }

  errors(errorField) {
    return this.props.errors[errorField] ? (
      <ul className="display-error">
        <li>{this.props.errors[errorField]}</li>
      </ul>
    ) : (
      ""
    );
  }

  starClass(starIndex) {
    return starIndex > this.state.rating ? "star-unchecked" : "star-checked";
  }

  errorClassName(errorField) {
    if (this.props.errors[errorField]) return "error";
    else return "";
  }

  renderProductImage() {
      if (!this.props.product) {
        return null;
      }

      return (
        <div className="product-review-info">
          <img className="reviewproduct" src={this.props.product.mainPhoto} />
          <h4>{this.props.product.product_name}</h4>
        </div>
      );
  }


  render() {
    const stars = ["★","★","★","★","★"];

    return (
      <div className="create-form">
        <h1>Create Review</h1>
        {this.renderProductImage()}
        <form onSubmit={this.handleClick} className="comments-details">
          <div className="starts">
            <h2>Overall Rating</h2>
            <br />
            {stars.map((star, i) => (
              <li
                onClick={() => {
                  this.setState({
                    rating: i + 1,
                  });
                }}
                key={i}
              >
                <span className={this.starClass(i + 1)}> {star}</span>
              </li>
            ))}
          </div>
          {this.errors("startError")}
          <label className="headline">
            <h2>Add a headline</h2>
            <br />
            <input
              type="text"
              value={this.state.title}
              placeholder="What's most important to know?"
              onChange={this.update("title")}
            />
          </label>
          {this.errors("titleError")}
          <div className="headline">
            <h2>Add a written review</h2>
            <br />
            <textarea
              type="text"
              value={this.state.body}
              placeholder="What did you like or dislike?"
              onChange={this.update("body")}
            />
            {this.errors("bodyError")}
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
