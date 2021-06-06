json.extract! product, :id,:product_name,:price,:seller_id,:product_description,:average_rating
json.seller_first_name product.seller.first_name
json.seller_last_name product.seller.last_name

json.photosUrl(product.photos) do |photo, i|
    json.photoUrl url_for(photo)
end

json.mainPhoto url_for(product.photos[0])