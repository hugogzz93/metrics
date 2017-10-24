class CreateMuscleMasses < ActiveRecord::Migration[5.0]
  def change
    create_table :muscle_masses do |t|
      t.string :value
      t.datetime :date

      t.timestamps
    end
  end
end
