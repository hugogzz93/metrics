class CreateSleeps < ActiveRecord::Migration[5.0]
  def change
    create_table :sleeps do |t|
      t.decimal  "value",		precision: 8, scale: 2, null: false
      t.datetime :date

      t.timestamps
    end
  end
end
