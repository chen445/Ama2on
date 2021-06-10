import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchProducts } from "../../actions/product";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (products) => dispatch(fetchProducts(products)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
