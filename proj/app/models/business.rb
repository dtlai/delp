class Business < ApplicationRecord

    validates :name, :address, :city, :state, :biz_zipcode, :phone_number, :price_range, presence: true 

    has_one_attached :photo 

end
