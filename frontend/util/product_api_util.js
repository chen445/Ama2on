export const fetchProducts = (query) => {
  let url = "/api/products";
  if (query) {
    url += "?query=" + escape(query);
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

