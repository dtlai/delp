export const fetchReviews = () => {
  return $.ajax({
    url: `/api/reviews/`,
    method: "GET",
  });
};
export const fetchReview = (reviewId) => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "GET",
  });
};
