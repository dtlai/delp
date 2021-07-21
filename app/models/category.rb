class Category < ApplicationRecord
    validates :category, presence: true 

    has_many :business_categories,
        class_name: 'BusinessCategory',
        foreign_key: :category_id

    has_many :businesses,
        through: :business_categories,
        source: :business 

end
