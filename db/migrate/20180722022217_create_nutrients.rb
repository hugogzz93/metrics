class CreateNutrients < ActiveRecord::Migration[5.0]
  def change
    create_table :nutrients do |t|
      t.string :name
      t.timestamps
    end
  end
end
