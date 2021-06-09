class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only:[:create,:destory]

    def create
         errors={}
         puts params
         
        if params[:review][:title]==nil || params[:review][:title]==""
            errors["titleError"]="Headline cannot be empty"
        end 
         if params[:review][:body]==nil || params[:review][:body]==""
            errors["bodyError"]="Comment cannot be empty"
        end 

        if params[:review][:rating]==nil || params[:review][:rating]=="0"
            errors["starError"]="Rating cannot be empty"
        end 

        if !errors.empty?
            return render json: errors, status: 400
        end

        @review = current_user.reviews.new(review_params)
        if @review.save
            render "api/reviews/show"
        else 
            render json: @review.errors.full_messages, status: 422
        end 
    end 

    def index
        if @reviews = Review.where(product_id: params[:product_id])
            render 'api/reviews/index'
        else  
             render json: @review.errors.full_messages, status: 422
        end 
    end

    def destroy
        @review = current_user.reviews.find_by(id: params[:id])
        if @review && @review.destroy
            render json: {}, status: 200
        else 
            render json: @review.errors.full_messages, status: 422
        end 
    end 


    private

    def review_params
        params.require(:review).permit(:title,:body,:rating,:product_id)
    end 
end
