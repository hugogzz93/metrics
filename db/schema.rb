# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180722022522) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "calories", force: :cascade do |t|
    t.decimal  "value",      precision: 8, scale: 2, null: false
    t.datetime "date"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  create_table "consumptions", force: :cascade do |t|
    t.integer  "food_id",    null: false
    t.integer  "grams"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "date"
    t.index ["food_id"], name: "index_consumptions_on_food_id", using: :btree
  end

  create_table "daily_recommended_intakes", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "nutrient_id"
    t.float    "value"
    t.integer  "measure"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["nutrient_id"], name: "index_daily_recommended_intakes_on_nutrient_id", using: :btree
    t.index ["user_id"], name: "index_daily_recommended_intakes_on_user_id", using: :btree
  end

  create_table "fat_percentages", force: :cascade do |t|
    t.string   "value"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "foods", force: :cascade do |t|
    t.string   "name"
    t.string   "usda_id"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.boolean  "external",   default: true
  end

  create_table "limbuses", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "muscle_masses", force: :cascade do |t|
    t.string   "value"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "nutrient_goals", force: :cascade do |t|
    t.string   "value"
    t.string   "nutrient_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "nutrients", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sleeps", force: :cascade do |t|
    t.decimal  "value",      precision: 8, scale: 2, null: false
    t.datetime "date"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  create_table "water_percentages", force: :cascade do |t|
    t.string   "value"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "weights", force: :cascade do |t|
    t.string   "value"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "daily_recommended_intakes", "nutrients"
  add_foreign_key "daily_recommended_intakes", "users"
end
