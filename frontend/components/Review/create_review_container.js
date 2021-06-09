import { connect } from "react-redux";
import ReviewForm from "../Review/review_form";
import { createReview } from "../../actions/review";
import {fetchProduct} from "../../actions/product"


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.review,
  review: {
    title: "",
    body: "",
    rating: 0,
  },
  product: state.entities.products[ownProps.match.params.productId],
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
