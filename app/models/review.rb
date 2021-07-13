class Review < ApplicationRecord

    validates :rating, :message, :user_id, :business_id, presence: true 

    belongs_to :business,
        class_name: 'Business',
        foreign_key: :business_id

    belongs_to :user,
        class_name: 'User',
        foreign_key: :user_id

end
