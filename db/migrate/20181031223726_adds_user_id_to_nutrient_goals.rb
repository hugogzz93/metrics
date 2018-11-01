class AddsUserIdToNutrientGoals < ActiveRecord::Migration[5.2]
  def change
    add_column :nutrient_goals, :user_id, :integer, null: false
  end
end
