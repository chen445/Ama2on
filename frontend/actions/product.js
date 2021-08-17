import * as APIProduct from '../util/product_api_util';

export const RECEIVE_PRODUCT ='RECEIVE_PRODUCT';
export const RECEIVE_ALL_PRODUCT ='RECEIVE_ALL_PRODUCT';
export const RECEIVE_PRODUCT_ERRORS ='RECEIVE_PRODUCT_ERRORS'


export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

export const receiveProducts = products => ({
  type: RECEIVE_ALL_PRODUCT,
  products
});

export const receiveProductErrors = errors =>({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
})

export const fetchProducts = (query, categoryId) => (dispatch) =>
  APIProduct.fetchProducts(query, categoryId).then(
    (products) => dispatch(receiveProducts(products)),
    (error) => dispatch(receiveProductErrors(error.responseJSON))
  );

export const fetchProduct = productId => dispatch => (
    APIProduct.fetchProduct(productId)
    .then(product=>(dispatch(receiveProduct(product))),
    error => (dispatch(receiveProductErrors(error.responseJSON)))
));


