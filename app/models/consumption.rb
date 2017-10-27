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
	def self.addWater(grams)
		Consumption.create(food_id: 8, grams: grams, date: DateTime.now)
	end

	def self.addMushrooms(grams)
		Consumption.create(food_id: 10, grams: grams, date: DateTime.now)
	end

	def self.addPotatoes(grams)
		Consumption.create(food_id: 11, grams: grams, date: DateTime.now)
	end

	def self.addCarrots(grams)
		Consumption.create(food_id: 12, grams: grams, date: DateTime.now)
	end

	def self.addHoney(grams)
		Consumption.create(food_id: 13, grams: grams, date: DateTime.now)
	end

	def self.addEggs(grams)
		Consumption.create(food_id: 14, grams: grams, date: DateTime.now)
	end

	def self.addQuinoa(grams)
		Consumption.create(food_id: 15, grams: grams, date: DateTime.now)
	end

	def self.addBroccoli(grams)
		Consumption.create(food_id: 16, grams: grams, date: DateTime.now)
	end

	def self.addRice(grams)
		Consumption.create(food_id: 17, grams: grams, date: DateTime.now)
	end

	def self.addBeans(grams)
		Consumption.create(food_id: 18, grams: grams, date: DateTime.now)
	end

	def self.addOatmeal(grams)
		Consumption.create(food_id: 4, grams: grams, date: DateTime.now)
	end

	def self.addAlmondMilk(grams)
		Consumption.create(food_id: 19, grams: grams, date: DateTime.now)
	end

	def self.addSpaghetti(grams)
		Consumption.create(food_id: 20, grams: grams, date: DateTime.now)
	end

	def self.addAvocado(grams)
		Consumption.create(food_id: 6, grams: grams, date: DateTime.now)
	end
end
