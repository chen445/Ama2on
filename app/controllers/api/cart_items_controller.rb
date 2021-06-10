class Api::CartItemsController < ApplicationController
    before_action :require_logged_in, only:[:create,:destory,:index]
    def create
        @cart_item= current_user.cart_items.find_by(product_id: cart_item_params[:product_id])
        if @cart_item == nil 
            @cart_item = current_user.cart_items.new(cart_item_params)
        else 
            @cart_item.quantity += cart_item_params[:quantity].to_i
        end

        if @cart_item.save
           render :show
        else 
            render json: @cart_item.errors.full_messages 
        end

    end 

    def index 
        @cart_items = current_user.cart_items
        render "api/cart_items/index"
    end 


    def destroy
        @cart_item = current_user.cart_items.find_by(id: params[:id])
        if @cart_item && @cart_item.destroy
           render json:{}, status: 200
        else   
           render json: @cart_item.errors.full_messages 
        end
    end 


    private 
    def cart_item_params
        params.require(:cartItem).permit(:product_id, :quantity)
    end 
end