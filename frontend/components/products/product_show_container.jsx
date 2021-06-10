import {connect} from 'react-redux';
import ProductShow from './product_show';
import {fetchProduct} from '../../actions/product'
import { createCartItem } from "../../actions/cart_items";


const mapStateToProps = (state,ownProps)=>({
    product: state.entities.products[ownProps.match.params.productId]
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (product) => dispatch(fetchProduct(product)),
  createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductShow)
