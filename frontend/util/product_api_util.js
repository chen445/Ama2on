export const fetchProducts = (query,categoryId) => {
  let url = "/api/products";
  url += "?"
  if (query) {
    url += "query=" + escape(query);
  }
  if (categoryId) {
     url += "&categoryId=" + escape(categoryId);
  }
    return $.ajax({
      method: "GET",
      url: url,
    });
}

export const fetchProduct = (productId) => (
   $.ajax({
    method: 'GET',
    url: `/api/products/${productId}`,
  })
)

