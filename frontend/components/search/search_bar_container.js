import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchProducts } from "../../actions/product";
import {fetchCategory } from "../../actions/category";

const mapStateToProps = (state) => ({
  categories: Object.values(state.entities.categories),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (query, categoryId) =>
    dispatch(fetchProducts(query, categoryId)),
  fetchCategory: (categoryId) => dispatch(fetchCategory(categoryId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
