class CreateFatPercentages < ActiveRecord::Migration[5.0]
  def change
    create_table :fat_percentages do |t|
      t.string :value
      t.datetime :date

      t.timestamps
    end
  end
end
