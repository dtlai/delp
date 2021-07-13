class Api::ReviewsController < ApplicationController

    def index 
        @reviews = Review.all.find_by 
    end

end
