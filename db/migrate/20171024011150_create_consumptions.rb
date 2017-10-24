class CreateConsumptions < ActiveRecord::Migration[5.0]
  def change
    create_table :consumptions do |t|
      t.belongs_to :food, null: false
      t.integer :grams

      t.timestamps
    end
  end
end
