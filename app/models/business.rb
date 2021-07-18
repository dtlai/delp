class Business < ApplicationRecord

    validates :name, :address, :city, :state, :biz_zipcode, :phone_number, :price_range, presence: true 

    has_many_attached :photos

    has_many :reviews,
        class_name: 'Review',
        foreign_key: :business_id

end
