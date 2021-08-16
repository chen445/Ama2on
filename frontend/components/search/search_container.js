
import { connect } from "react-redux";
import SearchResult from './search_result'
import {fetchProducts} from '../../actions/product'

const mapStateToProps = (state) => ({
    products: Object.values(state.entities.products)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
