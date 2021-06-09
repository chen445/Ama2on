import {RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_ALL_REVIEWS} from '../actions/review';

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_REVIEW:
            return Object.assign({}, state, { [action.review.id]: action.review })
        case RECEIVE_ALL_REVIEWS:
            return action.reviews
        case REMOVE_REVIEW: 
            const nextState = Object.assign({}, state);
            delete nextState[action.reviewId]
            return nextState;
        default:
            return state;
    }
}

export default reviewReducer;