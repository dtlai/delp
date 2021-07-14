import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  REMOVE_REVIEW,
} from "../actions/reviews_actions";

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      const newState = Object.assign({}, state);
      delete newState[action.review.id];
      return newState;

    default:
      return state;
  }
};

export default ReviewsReducer;
