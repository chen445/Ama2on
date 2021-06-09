import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import { percentage } from "../../util/averating";
import { Link } from "react-router-dom";

class ReviewShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsByRating: undefined,
    };

    this.renderReviews = this.renderReviews.bind(this);
    this.leftSection = this.leftSection.bind(this);
    this.renderStars = this.renderStars.bind(this);
    this.starClass = this.starClass.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.productId);
  }

  starClass(starIndex, rating) {
    return starIndex > rating
      ? "review-index-star-unchecked"
      : "review-index-star-checked";
  }

  renderStars(rating) {
    const stars = ["★", "★", "★", "★", "★"];
    return (
      <div style={{marginTop: "17px"}}>
        {stars.map((star, i) => (
          <span key={i} className={this.starClass(i + 1, rating)}>
            {" "}
            {star}
          </span>
        ))}
      </div>
    );
  }

  renderReviews() {
    if (!this.props.reviews) {
      return null;
    }

    const reviews =
      this.state.reviewsByRating === undefined
        ? this.props.reviews
        : this.props.reviews.filter(
            (r) => r.rating === this.state.reviewsByRating
          );

    return (
      <div className="reviews">
        <h2>Top reviews</h2>
        {reviews.map((review) => {
          return (
            <div key={review.id} className="customer-review">
              
                  <li> <FaUserCircle size={35} /> {review.reviewerFirstName} {""}
                   {review.reviewerLastName} </li>
                <li>{this.renderStars(this.props.reviews.rating)} {review.title}</li>
              <li>Reviewed on {review.createTime}</li>
              <li>{review.body}</li>
            </div>
          );
        })}
      </div>
    );
  }

  leftSection() {
    let ratings = [];
    if (!this.reviews) {
      ratings = this.props.reviews.map((r) => r.rating);
    }
    const percentageResult = percentage(ratings);

    return (
      <div className="review-index-left-section-1">
        <h2>Customer Reviews</h2>
        <div className="display-star">
          {this.renderStars(this.props.avgRating)}{" "}
          <p>{this.props.avgRating} out of 5</p>
        </div>
        <div style={{ marginBottom: "20px", color: "grey" }}>
          Total {ratings.length} ratings
        </div>
        <div className="rating-chart">
          {Object.values(percentageResult).map((pct, i) => {
            return (
              <div key={i}>
                star {i + 1} 
                <progress
                  onClick ={() => this.setState({ reviewsByRating: i + 1 })}
                  value={String(pct * 100)}
                  max="100"
                 ></progress>
                {pct * 100} %
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="review-index-container">
        <div className="left-section">
          {this.leftSection()}
          <p>Review this product</p>
          <Link
            to={`/review/create-review/${this.props.match.params.productId}`}
          >
            <button>Write a customer Review</button>
          </Link>
        </div>
        <div className="right-section">{this.renderReviews()}</div>
      </div>
    );
  }
}
export default withRouter(ReviewShow);
