class Api::BusinessesController < ApplicationController

    def show 
        @business = Business.with_attached_photos.find_by(id: params[:id])
        render :show
    end

    def index 
        if params[:query]
            @businesses = Business.all.select{|business| business.name.downcase.include?(params[:query].downcase) ||
                business.categories.any?{|biz_cat| biz_cat.category.downcase.include?(params[:query].downcase)}}
        else 
            @businesses = Business.all
        end
        render :index
    end

    def business_params
        params.require(:business).permit(
            :name,
            :address,
            :city, 
            :state,
            :biz_zipcode,
            :phone_number, 
            :price_range,
            photos: []
        )
    end

end
