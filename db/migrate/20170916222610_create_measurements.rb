class CreateMeasurements < ActiveRecord::Migration[5.0]
  def change
    create_table :measurements do |t|
    	t.decimal :value, precision: 5, scale: 2, null: false
    	t.belongs_to :statistic, index: true, null: false
      t.timestamps
    end
  end
end
