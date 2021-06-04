class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def create
        @review = current_user.reviews.new(review_params)
        if @review.save
            render "api/reviews/show"
        else 
            render json: @review.errors.full_messages, status: 422
        end 
    end 

    def destory
        @review = current_user.reviews.find_by(id: params[:id])
        if @review && @review.destory
            render status: 200
        else 
            render json: @review.errors.full_messages, status: 422
        end 
    end 


    private

    def review_params
        params.require(:review).permit(:title,:body,:rating,:product_id)
    end 
end
