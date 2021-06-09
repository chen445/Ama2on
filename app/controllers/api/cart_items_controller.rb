# class Api::CartItemsController < ApplicationController
#     def create
#         @cart = current_user.cart_item.new(cart_item_params)
#         if @cart.save
#             render "api/cart_items/index"
#         end 
#     end 


#     private 
#     def cart_item_params
#         params.require(:cart_item).permit(:user_id, :product_id, :quantity)
#     end 
# end