class CreateWaterPercentages < ActiveRecord::Migration[5.0]
  def change
    create_table :water_percentages do |t|
      t.string :value
      t.datetime :date

      t.timestamps
    end
  end
end
