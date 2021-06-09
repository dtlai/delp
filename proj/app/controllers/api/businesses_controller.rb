class Api::BusinessesController < ApplicationController

    def show 
        @business = Business.with_attached_photos.find_by(id: params[:id])
        render :show
    end

    def index 
        @businesses = Business.all
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
