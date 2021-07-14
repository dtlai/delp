import * as ReviewApiUtil from "../util/reviews_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews,
  };
};

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review,
  };
};

export const removeReview = (review) => {
  return {
    type: REMOVE_REVIEW,
    review,
  };
};

export const receiveReviewErrors = (errors) => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors,
  };
};

export const fetchReviews = () => dispatch => {
  return (
    ReviewApiUtil.fetchReviews()
      .then((reviews) => dispatch(receiveReviews(reviews)))
  )
}

export const fetchReview = () => dispatch => {
  return (
    ReviewApiUtil.fetchReview()
      .then((review) => dispatch(receiveReview(review)))
  )
}

export const createReview = (review, businessId) => dispatch => {
  return (
    ReviewApiUtil.createReview(review, businessId)
      .then((review) => dispatch(receiveReview(review)))
  )
}

export const updateReview = (review, businessId) => dispatch => {
  return (
    ReviewApiUtil.updateReview(review, businessId)
      .then((review) => dispatch(receiveReview(review)))
  )
}

export const deleteReview = (review, businessId) => dispatch => {
  return (
    ReviewApiUtil.deleteReview(review, businessId)
      .then(() => dispatch(removeReview(review)))
  )
}