export const createCartItem = (cartItem) =>(
  $.ajax({
    method: "POST",
    url: "/api/cart_items",
    data: {cartItem},
  })
);

export const deleteCartItem = (cartItemId) =>(
  $.ajax({
    method: "DELETE",
    url: `/api/cart_items/${cartItemId}`,
  })
);

export const fetchCartItems = () => (
  $.ajax({
    url: `/api/cart_items`,
    method: "GET",
  })
);









