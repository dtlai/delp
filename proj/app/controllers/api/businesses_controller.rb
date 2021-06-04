class Api::BusinessesController < ApplicationController

    def show 
        @business = Business.find_by(id: params[:id])
    end

    def index 
        @businesses = Business.all
    end

    def business_params
        params.require(:business).permit(
            :name,
            :address
        )
    end

end
