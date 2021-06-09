export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review }
  })
);

export const deleteReview = reviewId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${reviewId}`,
  })
);

export const fetchReviews = (productId) => {
    return $.ajax({
        url: `/api/products/${productId}/reviews`,
        method: 'GET'
    })
}
