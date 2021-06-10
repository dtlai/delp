class EditingBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :city, :string, null: false 
    add_column :businesses, :state, :string, null: false 
    add_column :businesses, :biz_zipcode, :integer, null: false 
    add_column :businesses, :phone_number, :integer, null: false 
    add_column :businesses, :price_range, :string, null: false 
  end
end
