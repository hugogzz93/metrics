class Consumption < ApplicationRecord
	belongs_to :food
	before_create :check_date

	def check_date
		self.date ||= DateTime.now
	end

	def self.cr(name, grams)
		food = Food.find_by(name: name)
		Consumption.create(food: food, grams: grams)
	end
end
