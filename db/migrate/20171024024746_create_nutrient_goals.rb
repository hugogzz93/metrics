class CreateNutrientGoals < ActiveRecord::Migration[5.0]
  def change
    create_table :nutrient_goals do |t|
    	t.string :value
    	t.string :nutrient_id
      t.timestamps
    end
  end
end
