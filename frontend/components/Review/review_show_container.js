import { connect } from "react-redux";
import ReviewShow from "../products/product_show";
import { deleteReview, fetchReviews} from "../../actions/review";


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  reviews: Object.values(state.entities.reviews),
});

const mapDispatchToProps = (dispatch) => ({
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  fetchReviews: (productId) => dispatch(fetchReviews(productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewShow);
