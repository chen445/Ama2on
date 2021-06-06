import {RECEIVE_PRODUCT,RECEIVE_ALL_PRODUCT} from '../actions/product';


const productReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PRODUCT:
            return Object.assign({},state,{[action.product.id]:action.product});
        case RECEIVE_ALL_PRODUCT:
            return Object.assign({},action.products);
        default:
            return state;
    }
}

export default productReducer;