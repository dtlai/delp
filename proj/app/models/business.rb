class Business < ApplicationRecord

    validates :name, :address, presence: true 


end
