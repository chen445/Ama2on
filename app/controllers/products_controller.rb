class ProductsController < ApplicationController
    def show
        
        @product = Product.find_by(params[:id])
        render "api/products/show"
    end 

    def index
        @products = Product.all
        render "api/products/index"
    end


    
end
