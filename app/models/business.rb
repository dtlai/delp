class Business < ApplicationRecord

    validates :name, :address, :city, :state, :biz_zipcode, :phone_number, :price_range, presence: true 

    has_many_attached :photos

end
