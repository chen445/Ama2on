import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/product';
import ProductIndex from './product_index';
import {selectProducts} from '../../reducers/selectors'

const mapStateToProps = (state)=>({
    products: selectProducts(state)
})

const mapDispatchToProps = dispatch =>({
    fetchProducts: products => dispatch(fetchProducts(products)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductIndex)

