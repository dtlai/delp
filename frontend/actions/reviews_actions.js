import * as ReviewApiUtil from '../util/reviews_api_util'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReviews = reviews => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

export const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const fetchReviews = () => (dispatch) => {
  return ReviewApiUtil.fetchReviews().then((reviews) =>
    dispatch(receiveReviews(reviews))
  );
};

export const fetchReview = (review) => (dispatch) => {
  return ReviewApiUtil.fetchReview(review).then((review) =>
    dispatch(receiveReviews(review))
  );
};


