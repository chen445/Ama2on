class Api::ProductsController < ApplicationController
    def show
        @product = Product.with_attached_photos.find(params[:id])
        if @product
            render "api/products/show"
        else  
            render json: @product.errors.full_messages, status: 422
        end
    end


    def index
        @products = Product.all
        render "api/products/index"
    end
    
    
end
