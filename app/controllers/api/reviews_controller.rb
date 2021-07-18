class Api::ReviewsController < ApplicationController

    def index 
        @reviews = Business.find(params[:business_id]).reviews
        render :index
    end

    def show 
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def create 
        @review = Review.new(review_params)
        if @review.save 
            render :show 
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update 
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            render :show 
        else
            render json: ["Cannot update reviews"] 
        end
    end

    def destroy 
        @review = Review.find_by(id: params[:id])
        if current_user.id == @review.user_id 
            @review.destroy
        else
            render json: ["Cannot delete review"]
        end
    end

    private 

    def review_params
        params.require(:review).permit(:rating, :message, :business_id, :user_id)
    end

end
