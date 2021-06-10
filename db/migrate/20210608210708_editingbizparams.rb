class Editingbizparams < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :phone_number
    remove_column :businesses, :price_range
    add_column :businesses, :phone_number, :integer, null: false 
    add_column :businesses, :price_range, :string, null: false 
  end
end
