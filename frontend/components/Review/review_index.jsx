import React from "react";
import { FaUserCircle } from "react-icons/fa";

class ReviewShow extends React.Component {
  constructor() {
    super(props);

    this.renderReviews = this.renderReviews.bind(this);
    this.renderAvgRating = this.renderAvgRating.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.productId);
  }

  renderReviews() {
    if (!this.props.reviews) {
      return null;
    }

    return (
      <div className="reviews">
        {this.props.reviews.map((review) => {
          return (
            <div>
              <FaUserCircle />
              {review.title}
              {review.body}
            </div>
          );
        })}
      </div>
    );
  }

  renderAvgRating() {
      return <div className="">
          
      </div> 
  }

  render() {
    return (
      <div className="review-index-container">
        {this.renderAvgRating()}
        {this.renderReviews()}
      </div>
    );
  }
}
export default ReviewShow;
