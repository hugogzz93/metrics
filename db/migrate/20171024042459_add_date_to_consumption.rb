class AddDateToConsumption < ActiveRecord::Migration[5.0]
  def change
  	add_column :consumptions, :date, :datetime
  end
end
