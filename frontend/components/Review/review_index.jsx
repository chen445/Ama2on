import React from "react";
import { FaUserCircle } from "react-icons/fa";
import {withRouter} from 'react-router-dom';
  import { percentage } from "../../util/averating";
  import {Link} from 'react-router-dom'

class ReviewShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        reviewsByRating: undefined
    }

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
      <ol>
        {stars.map((star, i) => (
          <li key={i}>
            <span className={this.starClass(i + 1, rating)}> {star}</span>
          </li>
        ))}
      </ol>
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
        {reviews.map((review) => {
          return (
            <div key={review.id}>
              <FaUserCircle />
              {review.reviewerFirstName}
              {review.reviewerLastName}
              {review.createTime}
              {review.title}
              {review.body}
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
      <div className="review-index-left-section">
        <div>{this.renderStars(this.props.avgRating)}</div>
        <div>total number of reviews: {ratings.length}</div>
        <div>
          {Object.values(percentageResult).map((pct, i) => {
            return (
              <div key={i}>
                star {i + 1}
                <progress 
                onClick={()=> this.setState({reviewsByRating: i+1})}
                value={String(pct * 100)} max="100"></progress>
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
        {this.leftSection()}
        <Link to={`/review/create-review/${this.props.match.params.productId}`}>
          <button>
            Write a customer Review
          </button>
        </Link>
        {this.renderReviews()}
      </div>
    );
  }
}
export default withRouter(ReviewShow);
