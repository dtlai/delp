export const fetchReviews = (businessId) => {
  return $.ajax({
    url: `/api/businesses/${businessId}/reviews`,
    method: "GET",
  });
};
export const fetchReview = (reviewId) => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "GET",
  });
};

export const createReview = (review, businessId) => {
  return $.ajax({
    method: "POST",
    url: `/api/businesses/${businessId}/reviews`,
    data: { review },
  });
}

export const updateReview = (review, businessId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/businesses/${businessId}/reviews/${review.id}`,
    data: { review },
  });
}

export const deleteReview = (review, businessId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/businesses/${businessId}/reviews/${review.id}`,
  });
}
