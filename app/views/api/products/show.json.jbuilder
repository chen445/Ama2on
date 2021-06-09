
json.partial! "/api/products/product", product: @product
json.reviewIds @product.reviews.pluck(:id)

# @product.reviews.includes(:reviewer).each do |review|
#     json.reviews do 
#         json.set! review.id do
#             json.partial! 'api/reviews/review', review: review
#         end 
#     end

#     json.reviewer do 
#         json.set! review.reviewer.id do 
#             json.extract! review.reviewer, :id, :first_name, :last_name
#         end 
#     end 
# end 
