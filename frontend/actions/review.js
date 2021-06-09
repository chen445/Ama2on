import * as APIReview from '../util/review_api_util'
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const recevieReviews = (reviews)=>({
    type: RECEIVE_REVIEWS,
    reviews
})

export const recevieReview = (review)=>({
    type: RECEIVE_REVIEW,
    review
})
export const removeReview = (reviewId)=>({
    type: REMOVE_REVIEW,
    reviewId
})

export const receiveReviewErros = (errors) =>({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const fetchReviews = productId => dispatch =>(
    APIReview.fetchReviews(productId)
    .then(reviews=>dispatch(recevieReviews(reviews)),
        error => dispatch(receiveReviewErros(error.responseJSON)))
)

export const createReview = (review) => dispatch => (
    APIReview.createReview(review)
    .then(review => dispatch(recevieReview(review)),
    error => dispatch(receiveReviewErros(error.responseJSON)))
)

export const deleteReview = (reviewId) => dispatch =>(
    APIReview.deleteReview(reviewId)
    .then(()=>dispatch(removeReview(reviewId)),
    error =>  dispatch(receiveReviewErros(error.responseJSON)))
)