import * as APIReview from '../util/review_api_util'
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const recevieReviews = (reviews)=>{
    type: RECEIVE_REVIEWS,
    reviews
}

export const removeReview = (reviewId)=>{
    type: RECEIVE_REVIEWS,
    reviewId
}

