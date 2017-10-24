class AddsDataToObjects < ActiveRecord::Migration[5.0]
  def change
  	add_column :foods, :external, :boolean, default: true
  	change_column :foods, :usda_id, :string
  end
end
