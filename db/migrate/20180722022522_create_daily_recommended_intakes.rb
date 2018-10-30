class CreateDailyRecommendedIntakes < ActiveRecord::Migration[5.0]
  def change
    create_table :daily_recommended_intakes do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :nutrient, foreign_key: true
      t.float :value
      t.integer :measure

      t.timestamps
    end
  end
end
