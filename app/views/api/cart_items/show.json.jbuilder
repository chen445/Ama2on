json.partial! "api/cart_items/cart_item", cart_item: @cart_item
json.mainPhoto url_for(@cart_item.product.photos[0])
json.price @cart_item.product.price
json.productName @cart_item.product.product_name