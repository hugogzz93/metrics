class Consumption < ApplicationRecord
	belongs_to :food
	before_create :check_date

	def check_date
		self.date ||= DateTime.now
	end
end
