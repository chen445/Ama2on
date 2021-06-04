json.extract! product, :id,:product_name,:price,:seller_id,:product_description
json.seller_first_name product.seller.first_name
json.seller_last_name product.seller.last_name

json.photos(product.photos).each do |photo, i|
    next if i == 0
    json.photoUrl url_for(photo)
end

json.mainPhoto url_for(product.photos[0])