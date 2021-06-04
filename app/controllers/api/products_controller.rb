class Api::ProductsController < ApplicationController
    def show
        @product = Product.find_by(params[:id])
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
