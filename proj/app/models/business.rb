class Business < ApplicationRecord

    validates :name, :address, presence: true 

    has_one_attached :photo 

end
